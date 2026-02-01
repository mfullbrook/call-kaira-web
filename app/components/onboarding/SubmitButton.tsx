import { ArrowRight } from 'lucide-react';

interface SubmitButtonProps {
  onClick?: () => void;
  disabled: boolean;
  processing: boolean;
  className?: string;
  text: string;
  processingText: string;
  type?: 'button' | 'submit';
  disabledWhenProcessing?: boolean;
}

const SubmitButton = ({ onClick, disabled, processing, className = '', text, processingText, type = 'submit', disabledWhenProcessing = true }: SubmitButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || (disabledWhenProcessing && processing)}
      className={`w-full px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center group ${
        !disabled && !processing
          ? 'bg-valencia-500 text-white hover:bg-valencia-600 active:translate-y-0.5 active:bg-valencia-600/80'
          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
      } ${className}`}
    >
      {processing ? (
        <>
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          {processingText}
        </>
      ) : (
        <>
          {text}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
