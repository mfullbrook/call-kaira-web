export function FeaturesBentoSection() {
  return (
    <section className="py-24 bg-[#0B0F19]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for Business
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Everything you need to automate your reception desk without sounding robotic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]">
          {/* Small Feature Cards */}
          <div className="md:col-span-1 lg:col-span-1 rounded-3xl bento-grid-item border border-white/5 p-6 relative overflow-hidden group hover:border-white/20 transition-colors">
            <div className="w-10 h-10 bg-[#0F1320] rounded-xl flex items-center justify-center mb-4 border border-white/10 text-orange-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">24/7 Answering</h3>
            <p className="text-slate-400 text-xs">
              Never miss a call, day or night. Robin is always on.
            </p>
          </div>

          <div className="md:col-span-1 lg:col-span-1 rounded-3xl bento-grid-item border border-white/5 p-6 relative overflow-hidden group hover:border-white/20 transition-colors">
            <div className="w-10 h-10 bg-[#0F1320] rounded-xl flex items-center justify-center mb-4 border border-white/10 text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Natural Voice</h3>
            <p className="text-slate-400 text-xs">
              Human-like intonation and pauses. Callers often don't realize it's AI.
            </p>
          </div>

          <div className="md:col-span-1 lg:col-span-1 rounded-3xl bento-grid-item border border-white/5 p-6 relative overflow-hidden group hover:border-white/20 transition-colors">
            <div className="w-10 h-10 bg-[#0F1320] rounded-xl flex items-center justify-center mb-4 border border-white/10 text-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Custom Greeting</h3>
            <p className="text-slate-400 text-xs">
              Welcome callers with your business name and tailored message.
            </p>
          </div>

          <div className="md:col-span-1 lg:col-span-1 rounded-3xl bento-grid-item border border-white/5 p-6 relative overflow-hidden group hover:border-white/20 transition-colors">
            <div className="w-10 h-10 bg-[#0F1320] rounded-xl flex items-center justify-center mb-4 border border-white/10 text-purple-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Smart Capture</h3>
            <p className="text-slate-400 text-xs">
              Extracts names, dates, amounts, and intent automatically.
            </p>
          </div>

          <div className="md:col-span-1 lg:col-span-1 rounded-3xl bento-grid-item border border-white/5 p-6 relative overflow-hidden group hover:border-white/20 transition-colors">
            <div className="w-10 h-10 bg-[#0F1320] rounded-xl flex items-center justify-center mb-4 border border-white/10 text-pink-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">FAQ Handling</h3>
            <p className="text-slate-400 text-xs">
              Upload your knowledge base and let Robin answer common questions.
            </p>
          </div>

          <div className="md:col-span-1 lg:col-span-1 rounded-3xl bento-grid-item border border-white/5 p-6 relative overflow-hidden group hover:border-white/20 transition-colors">
            <div className="w-10 h-10 bg-[#0F1320] rounded-xl flex items-center justify-center mb-4 border border-white/10 text-red-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Urgent Transfer</h3>
            <p className="text-slate-400 text-xs">
              Detects emergencies and forwards calls to you immediately.
            </p>
          </div>

          {/* Large Feature Card - Instant Summaries */}
          <div className="md:col-span-2 lg:col-span-2 rounded-3xl bento-grid-item border border-white/5 p-8 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between">
                <div>
                  <div className="w-12 h-12 bg-[#0F1320] rounded-xl flex items-center justify-center mb-6 border border-white/10 text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Instant Summaries</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                    Get notified the second the call ends via WhatsApp, Email, or SMS.
                  </p>
                </div>
                <div className="w-48 bg-[#1e1e1e] rounded-lg border border-white/10 p-3 font-mono text-[10px] text-gray-300 shadow-lg hidden sm:block transform rotate-2 group-hover:rotate-0 transition-transform">
                  <div className="flex gap-2 mb-2 border-b border-white/10 pb-2">
                    <span className="text-green-400 font-bold">New Summary</span>
                    <span className="text-xs text-gray-500">Just now</span>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <span className="text-gray-500">Caller:</span> Sarah Jones
                    </p>
                    <p>
                      <span className="text-gray-500">Intent:</span>{' '}
                      <span className="bg-blue-500/20 text-blue-300 px-1 rounded">Booking</span>
                    </p>
                    <p>
                      <span className="text-gray-500">Action:</span> Scheduled for Friday @ 2pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Large Feature Card - Dashboard */}
          <div className="md:col-span-2 lg:col-span-2 rounded-3xl bento-grid-item border border-white/5 p-8 relative overflow-hidden group hover:border-[#D9342B]/30 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D9342B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 bg-[#0F1320] rounded-xl flex items-center justify-center mb-6 border border-white/10 text-[#D9342B]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Dashboard Access</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-8">
                Manage everything from our mobile-friendly dashboard.
              </p>
              <div className="mt-auto w-full bg-[#0F1320] rounded-xl border border-white/10 p-4 shadow-lg transform translate-y-4 group-hover:translate-y-2 transition-transform">
                <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                  <span>Today's Activity</span>
                  <span className="text-green-400">+12%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-[#D9342B] w-3/4 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
