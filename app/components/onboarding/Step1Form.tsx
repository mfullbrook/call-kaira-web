import { useState, FormEvent } from "react";
import { useNavigate } from "react-router";
import Step1BusinessNameInput from "./Step1BusinessNameInput";
import BusinessPicker, { BusinessDisplay } from "../BusinessPicker";
import { googlePlaceDataToPlace, getUserLocaleCountry, getCountryByCode, Country, Place } from "@call-kaira/frontend-commons";
import { X } from "lucide-react";
import CountryPicker from "../CountryPicker";
import SubmitButton from "./SubmitButton";


interface Step1FormProps {
  supportedCountries: Country[],
  onboarding: App.Voice.Data.OnboardingData
}

const Step1Form = ({supportedCountries, onboarding}: Step1FormProps) => {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [useManualEntry, setUseManualEntry] = useState(() => {
    // If user has a selected place, show the place display
    if (onboarding.google_place_id) {
      return false;
    }
    // If user has a business name but no place, show manual entry
    if (onboarding.business_name) {
      return true;
    }
    // Default to search mode for new users
    return false;
  });
  const [manualBusinessName, setManualBusinessName] = useState(onboarding.business_name || '');
  const [country, setCountry] = useState<Country | null>(
    onboarding.country_code
      ? getCountryByCode(onboarding.country_code, supportedCountries)
      : getUserLocaleCountry(supportedCountries)
  );
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(onboarding.google_place_id ? googlePlaceDataToPlace(onboarding.google_place_data) : null);



  const handleSearchMode = () => {
    setUseManualEntry(false)
    setManualBusinessName('')
    setSelectedPlace(null)
  }

  const handleManualMode = () => {
    setUseManualEntry(true)
    setSelectedPlace(null)
  }

  const handleBusinessChange = (place?: Place) => {
    setSelectedPlace(place ?? null);
  };

  const handleBusinessNameChange = (value: string) => {
    setManualBusinessName(value);
  }

  const handleUnselectCompany = () => {
    setSelectedPlace(null)
  }

  const handleCountryChange = (newCountry: Country) => {
    setCountry(newCountry);
    // Reset selections when country changes
    setSelectedPlace(null);
    setUseManualEntry(false);
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    try {
      // TODO: Make API call to update business
      // const response = await api.updateBusiness({
      //   country_code: country?.code || '',
      //   google_place_id: selectedPlace?.id || '',
      //   business_name: useManualEntry ? manualBusinessName : undefined
      // });

      // For now, just navigate to step 2
      navigate('/onboarding/step-2');
    } catch (error) {
      console.error('Error updating business:', error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="country_code" value={country?.code || ''} />
      <input type="hidden" name="google_place_id" value={selectedPlace?.id || ''} />
      {useManualEntry && (
        <input type="hidden" name="business_name" value={manualBusinessName || ''} />
      )}

          <div>
            <label className="block font-lexend font-medium text-gray-900 mb-2">
              Country
            </label>
            <CountryPicker
              countries={supportedCountries}
              value={country}
              onChange={handleCountryChange}
            />
          </div>


          <div className="space-y-4">
            <label className="block font-lexend font-medium text-gray-900 mb-2">
              {useManualEntry ? 'Business Name' : 'Business Search'}
            </label>

            {useManualEntry ? (
              <Step1BusinessNameInput value={manualBusinessName}
                                      onChange={handleBusinessNameChange}
                                      onSearchMode={handleSearchMode}/>
            ) : selectedPlace ? (
              <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                <div className="flex items-start justify-between">
                  <BusinessDisplay place={selectedPlace} />
                  <button
                    type="button"
                    onClick={handleUnselectCompany}
                    className="ml-2 p-1 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <X className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>
            ) : (
              /* Business search */
              <div className="space-y-2">
                <BusinessPicker
                  onChange={handleBusinessChange}
                  country={country}
                />
                <button
                  type="button"
                  onClick={handleManualMode}
                  className="text-cerise-500 hover:text-cerise-600 font-poppins text-sm underline"
                >
                  Business not found? Enter manually →
                </button>
              </div>
            )}
          </div>

      <SubmitButton
        type="submit"
        disabled={!(useManualEntry ? manualBusinessName.trim() : (selectedPlace ? true : false)) || !country || processing}
        processing={processing}
        text="Next"
        processingText="Creating..."
      />
    </form>
  )
}

export default Step1Form
