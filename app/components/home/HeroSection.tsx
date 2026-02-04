export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-36">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#D9342B]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#D9342B] backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9342B] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D9342B]" />
                </span>
                New: WhatsApp Summaries v2.0
              </div>

              {/* Heading */}
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]">
                Every call answered. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9342B] to-orange-500 text-glow">
                  Every detail captured.
                </span>
              </h1>

              {/* Subheading */}
              <p className="max-w-[560px] text-lg text-slate-400 md:text-xl leading-relaxed font-light">
                AI voice answering that feels human. Robin answers 24/7, filters spam, and sends you
                concise summaries instantly via WhatsApp.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 min-[420px]:flex-row">
              <button className="inline-flex h-12 items-center justify-center rounded-full bg-[#D9342B] px-8 text-base font-semibold text-white shadow-[0_0_20px_rgba(217,52,43,0.4)] hover:shadow-[0_0_30px_rgba(217,52,43,0.6)] hover:bg-[#b0261f] transition-all transform hover:-translate-y-0.5">
                Start Free Trial
              </button>
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 text-base font-semibold text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
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
                See how it works
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                No credit card needed
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                14-day free trial
              </div>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative grid grid-cols-2 gap-4">
              {/* Incoming Call Card */}
              <div className="col-span-1 glass-panel rounded-3xl p-6 relative overflow-hidden transform transition-transform hover:scale-105 duration-500 z-10 border-l-4 border-l-[#D9342B]/50">
                {/* Phone Status Bar */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h4l2 7-3 3a16 16 0 0010 10l3-3 7 2v4a2 2 0 01-2 2A18 18 0 012 5a2 2 0 012-2z" />
                    </svg>
                    <span className="text-[10px] text-white/50 font-mono">5G</span>
                  </div>
                  <span className="text-[10px] text-white/50 font-mono">14:32</span>
                </div>

                {/* Call UI */}
                <div className="flex flex-col items-center justify-center py-6">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 animate-[pulse_2s_infinite]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-lg">Incoming Call</h3>
                  <p className="text-slate-400 text-xs mt-1">Unknown Number</p>

                  {/* Call Action Buttons */}
                  <div className="flex gap-8 mt-8 w-full justify-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-white rotate-[135deg]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-green-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Sync Icon */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-[#0F1320] rounded-full border border-[#D9342B] flex items-center justify-center shadow-[0_0_20px_rgba(217,52,43,0.4)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-6 h-6 text-[#D9342B] animate-spin"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>

              {/* WhatsApp Message Card */}
              <div className="col-span-1 whatsapp-bg rounded-3xl p-4 relative overflow-hidden transform translate-y-12 transition-transform hover:-translate-y-0 duration-500 border border-white/5 shadow-2xl">
                {/* WhatsApp Header */}
                <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3 rounded-t-xl mb-4 border-b border-[#2a3942]">
                  <div className="w-8 h-8 bg-[#D9342B] rounded-full flex items-center justify-center text-xs font-bold text-white">
                    R
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">Robin (AI Assistant)</h4>
                    <p className="text-[#8696a0] text-[10px]">online</p>
                  </div>
                </div>

                {/* WhatsApp Messages */}
                <div className="space-y-3">
                  {/* Incoming Message */}
                  <div className="bg-[#202c33] rounded-lg rounded-tl-none p-3 max-w-[90%] border border-[#2a3942]">
                    <p className="text-[#e9edef] text-xs leading-relaxed">
                      <strong className="text-[#D9342B] block mb-1 text-[10px] uppercase tracking-wider">
                        New Lead Captured
                      </strong>
                      📞 James called about 2-bed flat in Hackney.
                      <br />
                      📅 Wants viewing: Tue 10am.
                      <br />
                      💰 Budget: £2.2k/mo.
                    </p>
                    <div className="text-[#8696a0] text-[9px] text-right mt-1">14:34</div>
                  </div>

                  {/* Outgoing Message */}
                  <div className="bg-[#005c4b] rounded-lg rounded-tr-none p-3 max-w-[80%] self-end ml-auto shadow-sm">
                    <p className="text-[#e9edef] text-xs">Thanks Robin, book it in.</p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[#8696a0] text-[9px] text-white/70">14:35</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-3 h-3 text-[#53bdeb]"
                      >
                        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
