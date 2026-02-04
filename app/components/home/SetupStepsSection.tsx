export function SetupStepsSection() {
  return (
    <section className="py-24 bg-[#0B0F19] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-[#151B2B]/50 rounded-3xl p-8 md:p-12 border border-white/5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                Live in 10 minutes
              </h2>
              <div className="space-y-8 relative pl-4">
                <div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#D9342B]/50 to-transparent" />

                {[
                  {
                    num: 1,
                    title: 'Sign up',
                    desc: 'Create an account. No credit card required for the trial.',
                    active: true,
                  },
                  {
                    num: 2,
                    title: 'Configure',
                    desc: 'Upload FAQs, set your tone, and link your calendar.',
                  },
                  {
                    num: 3,
                    title: 'Forward your line',
                    desc: 'Simply forward your calls to your new Robin number.',
                  },
                  {
                    num: 4,
                    title: 'Start capturing',
                    desc: 'Get instant summaries and see leads pour in.',
                  },
                ].map((step) => (
                  <div key={step.num} className="flex gap-6 group relative">
                    <div
                      className={`flex-none flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white z-10 ${
                        step.active
                          ? 'bg-[#0F1320] border-2 border-[#D9342B] shadow-[0_0_15px_rgba(217,52,43,0.4)]'
                          : 'bg-[#0F1320] border border-white/20'
                      }`}
                    >
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                      <p className="text-slate-400 font-light text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block relative h-full min-h-[300px] bg-gradient-to-br from-[#0F1320] to-black rounded-2xl border border-white/5 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="w-full max-w-sm space-y-4">
                  <div className="flex items-center justify-between text-white/50 text-xs font-mono uppercase tracking-widest mb-4">
                    <span>Setup Progress</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#D9342B] w-full" />
                  </div>

                  {[
                    {
                      icon: 'check',
                      title: 'Account Created',
                      subtitle: 'admin@callkaira.com',
                      color: 'green',
                    },
                    {
                      icon: 'check',
                      title: 'Number Assigned',
                      subtitle: '+44 20 7123 4567',
                      color: 'green',
                    },
                    {
                      icon: 'live',
                      title: 'Live & Listening',
                      subtitle: 'Waiting for first call...',
                      color: 'primary',
                      active: true,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`bg-[#0F1320] border ${
                        item.active ? 'border-l-4 border-l-[#D9342B]' : ''
                      } border-white/10 rounded-xl p-4 flex items-center gap-4`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          item.color === 'green'
                            ? 'bg-green-500/20 text-green-500'
                            : 'bg-[#D9342B]/20 text-[#D9342B] animate-pulse'
                        }`}
                      >
                        {item.icon === 'check' ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path d="M8 7a5 5 0 0110 0v8a5 5 0 01-10 0V7z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">{item.title}</h4>
                        <p className="text-xs text-slate-500">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
