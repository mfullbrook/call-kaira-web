export function HearRobinSection() {
  const demos = [
    {
      title: 'Property Inquiry',
      icon: 'real_estate_agent',
      iconColor: 'text-[#D9342B]',
      duration: '0:45',
      progress: 'w-1/3',
      playing: true,
    },
    {
      title: 'Appointment Booking',
      icon: 'calendar_month',
      iconColor: 'text-blue-400',
      duration: '0:32',
      progress: 'w-0',
      playing: false,
    },
    {
      title: 'Tech Support Triage',
      icon: 'support',
      iconColor: 'text-green-400',
      duration: '1:12',
      progress: 'w-0',
      playing: false,
    },
    {
      title: 'Restaurant Reservation',
      icon: 'restaurant',
      iconColor: 'text-orange-400',
      duration: '0:58',
      progress: 'w-0',
      playing: false,
    },
  ];

  return (
    <section className="py-24 bg-[#0B0F19]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Hear Robin in Action
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10">
            Listen to real scenarios handled by our AI.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {demos.map((demo) => (
              <div
                key={demo.title}
                className="rounded-2xl bg-[#151B2B] border border-white/5 p-6 hover:border-[#D9342B]/30 transition-colors group text-left"
              >
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-5 h-5 ${demo.iconColor}`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {demo.title}
                </h4>
                <div className="bg-[#0F1320] rounded-xl p-3 flex items-center gap-4">
                  <button
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 transition-all ${
                      demo.playing
                        ? 'bg-[#D9342B] hover:scale-105'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="w-full h-1 bg-white/10 rounded-full relative overflow-hidden">
                    <div
                      className={`absolute left-0 top-0 h-full bg-[#D9342B] rounded-full ${demo.progress}`}
                    />
                  </div>
                  <span className="text-xs text-slate-500 font-mono">{demo.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
