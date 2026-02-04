export function HowItWorksSection() {
  return (
    <section className="py-24 bg-[#151B2B]/50 border-y border-white/5" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 md:text-center max-w-3xl mx-auto">
          <span className="text-[#D9342B] font-bold text-xs tracking-widest uppercase mb-3 block">
            The Solution
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet Robin</h2>
          <p className="mt-4 text-lg text-slate-400 font-light">
            Your new AI receptionist handles calls exactly how you want, transforming chaos into
            structured data.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-[110px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[#D9342B]/40 to-transparent blur-[1px]" />

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Step 1: Answers */}
            <div className="relative flex flex-col items-center text-center group">
              <div className="relative flex h-52 w-52 items-center justify-center mb-8 z-10 transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-full h-full rounded-full bg-[#0F1320] border border-white/10 flex flex-col items-center justify-center p-6 shadow-2xl group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-16 h-16 text-slate-300 group-hover:text-blue-400 transition-colors mb-2"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                  </svg>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-blue-400/70">
                    STEP 01
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                Answers
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed px-4">
                24/7 coverage with a natural, human-like voice that represents your brand
                professionally.
              </p>
            </div>

            {/* Step 2: Captures */}
            <div className="relative flex flex-col items-center text-center group">
              <div className="relative flex h-52 w-52 items-center justify-center mb-8 z-10 transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-full h-full rounded-full bg-[#0F1320] border border-white/10 flex flex-col items-center justify-center p-6 shadow-2xl group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-16 h-16 text-slate-300 group-hover:text-purple-400 transition-colors mb-2"
                  >
                    <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z" />
                  </svg>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-purple-400/70">
                    STEP 02
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                Captures
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed px-4">
                Understands context, qualifies leads, handles FAQs, and gathers the key details you
                need.
              </p>
            </div>

            {/* Step 3: Notifies */}
            <div className="relative flex flex-col items-center text-center group">
              <div className="relative flex h-52 w-52 items-center justify-center mb-8 z-10 transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-[#D9342B]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-full h-full rounded-full bg-[#0F1320] border border-white/10 flex flex-col items-center justify-center p-6 shadow-2xl group-hover:border-[#D9342B]/50 group-hover:shadow-[0_0_30px_rgba(217,52,43,0.3)] transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-16 h-16 text-slate-300 group-hover:text-[#D9342B] transition-colors mb-2"
                  >
                    <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                    <path
                      fillRule="evenodd"
                      d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-[#D9342B]/70">
                    STEP 03
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#D9342B] transition-colors">
                Notifies
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed px-4">
                Sends concise summaries directly to your phone via WhatsApp, SMS, or Email instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
