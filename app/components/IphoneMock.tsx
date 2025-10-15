import { MicOff, Grid3X3, Volume2, BatteryFull } from 'lucide-react';
import { Logo } from '@call-kaira/frontend-commons';

function IphoneMock() {
  return (
    <div>
      {/* iPhone Frame - much thinner border */}
      <div className="bg-gray-900 rounded-t-[2.5rem] rounded-b-none p-1 shadow-2xl w-80 h-[500px] overflow-hidden">
      <div className="bg-gray-800 rounded-t-[2rem] rounded-b-none p-0.5 h-full">
        <div className="bg-gray-900 rounded-t-[1.5rem] rounded-b-none overflow-hidden relative h-full text-white">
          {/* iPhone Screen */}
          <div className="h-full relative">
            {/* Status Bar */}
            <div className="flex justify-between items-center px-6 pt-3 pb-2">
              <span className="text-white text-sm">9:41</span>
              <div className="flex items-center space-x-1">
                {/* Signal bars */}
                <svg className="w-5 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.181 9.668" overflow="visible">
                  <path d="M 15.18 0.906 L 15.18 8.761 C 15.18 9.261 14.802 9.667 14.337 9.667 L 13.493 9.667 C 13.028 9.667 12.65 9.261 12.65 8.761 L 12.65 0.906 C 12.65 0.406 13.028 0 13.493 0 L 14.337 0 C 14.803 0 15.181 0.406 15.181 0.906 Z M 9.301 1.933 L 10.145 1.933 C 10.611 1.933 10.988 2.349 10.988 2.861 L 10.988 8.739 C 10.988 9.251 10.611 9.667 10.145 9.667 L 9.301 9.667 C 8.836 9.667 8.458 9.251 8.458 8.739 L 8.458 2.861 C 8.458 2.349 8.836 1.933 9.301 1.933 Z M 5.877 4.028 C 6.343 4.028 6.721 4.45 6.721 4.968 L 6.721 8.728 C 6.721 9.248 6.343 9.668 5.877 9.668 L 5.034 9.668 C 4.568 9.668 4.191 9.248 4.191 8.728 L 4.191 4.969 C 4.191 4.449 4.568 4.029 5.034 4.029 L 5.877 4.029 Z M 1.686 5.962 C 2.152 5.962 2.53 6.377 2.53 6.889 L 2.53 8.739 C 2.53 9.251 2.152 9.666 1.686 9.666 L 0.843 9.666 C 0.377 9.666 0 9.251 0 8.739 L 0 6.889 C 0 6.377 0.377 5.962 0.843 5.962 Z" fill="rgb(247,247,247)"></path>
                </svg>
                {/* WiFi */}
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 0 1 .808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 0 1-1.414 1.414zM14.95 11.05a7 7 0 0 0-9.9 0 1 1 0 0 1-1.414-1.414 9 9 0 0 1 12.728 0 1 1 0 0 1-1.414 1.414zM12.12 13.88a3 3 0 0 0-4.24 0 1 1 0 0 1-1.415-1.414 5 5 0 0 1 7.07 0 1 1 0 0 1-1.415 1.414zM9 16a1 1 0 0 1 2 0 1 1 0 0 1-2 0z"/>
                </svg>
                {/* Battery */}
                <BatteryFull className="w-5 h-5 text-white opacity-80" />
              </div>
            </div>

            {/* Call Header */}
            <div className="text-center px-6 mb-6">
              <p className="text-gray-400 text-sm font-poppins">+44 20 1234 5678</p>
              <h3 className="text-white text-xl font-bold font-lexend mt-1">CallKaira AI</h3>
            </div>

            {/* Chat Messages */}
            <div className="px-6 space-y-4 flex-1">
              {/* AI Message */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Logo width={32} height={32} />
                </div>
                <div className="bg-cerise-500 rounded-2xl rounded-tl-md px-4 py-3 max-w-xs">
                  <p className="text-white text-sm font-poppins">Hello! Thank you for calling. How can I help you today?</p>
                </div>
              </div>

              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-gray-700 rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
                  <p className="text-white text-sm font-poppins">"I'd like to schedule an appointment for next week."</p>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Logo width={32} height={32} />
                </div>
                <div className="bg-cerise-500 rounded-2xl rounded-tl-md px-4 py-3 max-w-xs">
                  <p className="text-white text-sm font-poppins">Perfect! I can check our availability. What day works best for you?</p>
                </div>
              </div>
            </div>

            {/* Call Controls at bottom */}
            <div className="flex justify-center space-x-8 pb-8 pt-6">
              {/* Mute */}
              <button className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <MicOff className="w-5 h-5 text-white" />
              </button>

              {/* Keypad */}
              <button className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <Grid3X3 className="w-5 h-5 text-white" />
              </button>

              {/* Speaker */}
              <button className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <Volume2 className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default IphoneMock
