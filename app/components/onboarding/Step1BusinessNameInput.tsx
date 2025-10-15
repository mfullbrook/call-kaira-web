import { useRef, useEffect } from 'react';

interface Step1BusinessNameInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearchMode: () => void;
}

const Step1BusinessNameInput =
  ({ value, onChange, onSearchMode }: Step1BusinessNameInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    // Update the input value directly when the value prop changes
    useEffect(() => {
      if (inputRef.current && inputRef.current.value !== value) {
        inputRef.current.value = value;
      }
    }, [value]);
  return (
    <>
      {/* Manual company name input */}
      <div className="space-y-2">
        <input
          ref={inputRef}
          type="text"
          defaultValue={value}
          onChange={(e) => {
            onChange(e.target.value)
          }}
          placeholder="Your business name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins focus:outline-none focus:border-cerise-500 focus:ring-2 focus:ring-cerise-500"
        />
        <button
          type="button"
          className="text-cerise-500 hover:text-cerise-600 font-poppins text-sm underline"
          onClick={onSearchMode}
        >
          ← Search for business instead
        </button>
      </div>
    </>
  )
}

export default Step1BusinessNameInput
