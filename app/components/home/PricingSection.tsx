export function PricingSection() {
  return (
    <section className="py-24 bg-[#151B2B]/30" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-400">No hidden fees. No contracts. Just results.</p>
        </div>

        <div className="relative max-w-lg mx-auto rounded-3xl border border-[#D9342B]/50 bg-gradient-to-b from-[#151B2B] to-[#0F1320] p-8 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#D9342B] px-4 py-1 text-sm font-bold text-white shadow-glow">
            MOST POPULAR
          </div>

          <div className="text-center mb-8 pt-4">
            <h3 className="text-lg font-medium text-slate-400">Pro Plan</h3>
            <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="text-6xl font-extrabold text-white tracking-tight">£49</span>
              <span className="text-xl text-slate-500">/mo</span>
            </div>
            <p className="mt-4 text-sm text-slate-400 font-light">
              Everything a growing business needs.
            </p>
          </div>

          <div className="w-full h-px bg-white/5 mb-8" />

          <ul className="space-y-5 mb-10">
            {[
              'Unlimited calls',
              'No per‑minute charges',
              'Knowledge Base',
              'SMS Alerts',
              'Local or Mobile UK Number',
              'Urgent Transfer',
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <div className="rounded-full bg-[#D9342B]/20 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-[#D9342B]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-slate-200">{feature}</span>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <div className="rounded-full bg-white/5 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-slate-500"
                >
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path
                    fillRule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-slate-400 italic">Calendar Integration (coming soon)</span>
            </li>
          </ul>

          <button className="w-full rounded-full bg-[#D9342B] py-4 text-base font-bold text-white shadow-glow hover:bg-[#b0261f] transition-all transform hover:scale-[1.02]">
            Start 14-Day Free Trial
          </button>

          <p className="mt-4 text-center text-xs text-slate-500">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
