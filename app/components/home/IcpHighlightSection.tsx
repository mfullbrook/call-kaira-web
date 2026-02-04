export function IcpHighlightSection() {
  return (
    <section className="py-24 bg-[#151B2B]/30 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Lettings Agents Card */}
          <div
            className="group relative overflow-hidden rounded-3xl bg-[#111827] border border-white/10 px-8 py-12 shadow-2xl hover:border-[#D9342B]/50 transition-all duration-500"
            id="lettings"
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#D9342B]/10 rounded-full blur-3xl group-hover:bg-[#D9342B]/20 transition-all" />
            <div
              className="absolute inset-0 z-0 opacity-20 mix-blend-overlay"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_mrMOqfRZ16h2V0Zh_MT6BS68j08gF65lMgAEqIxovIROnoFC92Pb3d8LpRXQyoev9wl2cqoxa3Trnw9Y5faSxF2QkUN1sFBqSOchKai2m4_UfSKR4_IkmMimGDgyJHZz_xe7zsmUk9nivp7mNb8PtU-nWusTOjFErYFvYsGfsdAP9rk4XmRxi0rD9COwqTHyI6u-0hE05vii2UpevAS4uKRvDJKfYr9IiZvnXf2MB16nD2XVqLAluXOJDwI234lx7N30o4Kgnl0')",
                backgroundSize: 'cover',
              }}
            />
            <div className="relative z-10 flex flex-col items-start gap-6">
              <span className="rounded-full bg-[#D9342B]/10 px-4 py-1.5 text-xs font-bold text-[#D9342B] ring-1 ring-inset ring-[#D9342B]/30 tracking-wide uppercase">
                For Lettings Agents
              </span>
              <h3 className="text-3xl font-bold text-white">Capture every viewing request</h3>
              <p className="max-w-md text-slate-400 leading-relaxed">
                Stop playing phone tag with tenants. Robin qualifies applicants, books viewings into
                your diary, and answers property-specific questions instantly.
              </p>
              <a
                className="mt-2 flex items-center text-sm font-bold text-white hover:text-[#D9342B] transition-colors group-hover:translate-x-2 duration-300"
                href="#"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* MSPs & IT Card */}
          <div
            className="group relative overflow-hidden rounded-3xl bg-[#111827] border border-white/10 px-8 py-12 shadow-2xl hover:border-blue-500/50 transition-all duration-500"
            id="msps"
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all" />
            <div
              className="absolute inset-0 z-0 opacity-10"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDuED9LRZhG54xzuLREaFhg6KfNXIzHTmiiBUzZCFA1yiR_Fp7SyXRnqljiWkRGSoVLOc9p1CuNpcBr7gj5cTBWqAK59wsnH63wMC_uYvjTJPAMxVO7W_3XPIK_t_owPmoBi9uJiD7AYdoBFh1VMt85_60SXAkxvhAZQ4Gzao2GrFg5iRa0iJFZ3XcMxUaslBt28j8bdwBZPh46ZKBfoKuvrPP0AiC8A50LYgLukcREri1PwG9MjrInVrMnZbo1cOjWmf4Bc3R9hfE')",
                backgroundSize: 'cover',
              }}
            />
            <div className="relative z-10 flex flex-col items-start gap-6">
              <span className="rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-400 ring-1 ring-inset ring-blue-500/30 tracking-wide uppercase">
                For MSPs & IT
              </span>
              <h3 className="text-3xl font-bold text-white">Triage critical tickets 24/7</h3>
              <p className="max-w-md text-slate-400 leading-relaxed">
                Don't wake up the on-call engineer for a password reset. Robin classifies severity,
                creates tickets, and only escalates true P1 emergencies.
              </p>
              <a
                className="mt-2 flex items-center text-sm font-bold text-white hover:text-blue-400 transition-colors group-hover:translate-x-2 duration-300"
                href="#"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
