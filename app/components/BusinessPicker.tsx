import { useState, useRef, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { GooglePlaces } from '../app-client';
import { Search, Building, MapPin, Loader } from 'lucide-react';
import { Country, Place } from '@call-kaira/frontend-commons';

export interface BusinessDisplayProps {
  place: Place;
  className?: string;
  onClick?: () => void;
  role?: string;
  'aria-selected'?: boolean;
}

export const BusinessDisplay: React.FC<BusinessDisplayProps> = ({
  place,
  className = '',
  onClick,
  role,
  'aria-selected': ariaSelected
}) => (
  <div
    className={`flex items-start space-x-3 ${className}`}
    onClick={onClick}
    role={role}
    aria-selected={ariaSelected}
  >
    <Building className="h-5 w-5 text-cerise-500 mt-0.5 flex-shrink-0" />
    <div className="flex-1 min-w-0">
      <p className="text-gray-900 font-medium truncate">
        {place.displayName.text}
      </p>
      <div className="flex items-center space-x-1 mt-1">
        <MapPin className="h-3 w-3 text-gray-400 flex-shrink-0" />
        <p className="text-gray-500 text-xs truncate">
          {place.formattedAddress}
        </p>
      </div>
      {place.businessStatus && (
        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mt-1 ${
          place.businessStatus === 'OPERATIONAL'
            ? 'bg-green-100 text-green-700'
            : 'bg-gray-100 text-gray-600'
        }`}>
          {place.businessStatus.toLowerCase().replace('_', ' ')}
        </span>
      )}
    </div>
  </div>
);


interface PlacesResponse {
  places?: Place[];
}

interface BusinessPickerProps {
  onChange: (place?: Place) => void;
  country: Country | null;
  className?: string;
}


const BusinessPicker: React.FC<BusinessPickerProps> = ({
  onChange,
  country,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<NodeJS.Timeout>();

  // Update the input value directly when searchTerm changes to avoid race conditions
  useEffect(() => {
    if (searchInputRef.current && searchInputRef.current.value !== searchTerm) {
      searchInputRef.current.value = searchTerm;
    }
  }, [searchTerm]);

  // Only sync when the parent explicitly clears the value (country change, etc.)
  useEffect(() => {
    if (searchTerm !== '') {
      setSearchTerm('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  // Use ReactQuery for places search
  const { data: placesResponse, isLoading, error } = useQuery({
    queryKey: ['places-search', debouncedSearchTerm, country],
    queryFn: async (): Promise<PlacesResponse> => {
      const response = await GooglePlaces.searchByText({
        query: {
          query: debouncedSearchTerm,
          countryCode: country?.code,
          pageSize: 10,
        },
      });
      return response.data as PlacesResponse;
    },
    enabled: debouncedSearchTerm.length >= 2 && isOpen,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const places = placesResponse?.places?.filter((place: Place) =>
    place.types.some(type =>
      ['establishment', 'point_of_interest', 'store', 'business'].includes(type)
    )
  ) || [];

  // Debounce search term
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);

    if (!isOpen && newValue.length > 0) {
      setIsOpen(true);
    }
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev =>
          prev < places.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev =>
          prev > 0 ? prev - 1 : places.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && places[highlightedIndex]) {
          handleSelect(places[highlightedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  const handleSelect = (place: Place) => {
    const companyName = place.displayName.text;
    setSearchTerm(companyName);
    onChange(place);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div className="relative">
        <input
          ref={searchInputRef}
          type="text"
          defaultValue={searchTerm}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          placeholder="Your business name, city"
          className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg font-poppins focus:outline-none focus:border-cerise-500 focus:ring-2 focus:ring-cerise-500"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        {isLoading && (
          <Loader className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-cerise-500 animate-spin" />
        )}
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-64 overflow-hidden">
          {error ? (
            <div className="p-4 text-center">
              <p className="font-poppins text-sm text-red-500">Error searching companies</p>
              <p className="font-poppins text-xs text-red-400 mt-1">
                {error instanceof Error ? error.message : 'Unknown error'}
              </p>
            </div>
          ) : isLoading ? (
            <div className="p-4 text-center">
              <Loader className="h-5 w-5 text-cerise-500 animate-spin mx-auto mb-2" />
              <p className="font-poppins text-sm text-gray-500">Searching companies...</p>
            </div>
          ) : places.length > 0 ? (
            <div className="max-h-64 overflow-y-auto">
              {places.map((place, index) => (
                <BusinessDisplay
                  place={place}
                  key={place.id}
                  className={`px-4 py-3 cursor-pointer font-poppins hover:bg-gray-50 ${
                    index === highlightedIndex ? 'bg-cerise-50' : ''
                  }`}
                  onClick={() => handleSelect(place)}
                  role="option"
                  aria-selected={index === highlightedIndex}
                />
              ))}
            </div>
          ) : debouncedSearchTerm.length >= 2 ? (
            <div className="p-4 text-center">
              <Building className="h-8 w-8 text-gray-300 mx-auto mb-2" />
              <p className="font-poppins text-sm text-gray-500">No companies found</p>
              <p className="font-poppins text-xs text-gray-400 mt-1">
                Try a different search term
              </p>
            </div>
          ) : (
            <div className="p-4 text-center">
              <p className="font-poppins text-sm text-gray-500">
                Type at least 2 characters to search
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BusinessPicker;
