export function FAQSection() {
  return (
    <section className="py-24 bg-[#0B0F19] border-t border-white/5">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400">Everything you need to know about Robin.</p>
        </div>

        <div className="space-y-4">
          <details className="group rounded-2xl bg-[#151B2B] border border-white/5">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white hover:bg-white/5 transition-colors rounded-2xl outline-none focus:ring-1 focus:ring-[#D9342B]/50">
              <h3 className="font-medium">Does Robin work with my existing number?</h3>
              <span className="relative size-5 shrink-0">
                <svg
                  className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.5v15m7.5-7.5h-15" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg
                  className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
              Yes! You can divert calls from your existing mobile or landline to your unique Robin
              number. You can choose to divert all calls, or only when you're busy/unreachable.
            </div>
          </details>

          <details className="group rounded-2xl bg-[#151B2B] border border-white/5">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white hover:bg-white/5 transition-colors rounded-2xl outline-none focus:ring-1 focus:ring-[#D9342B]/50">
              <h3 className="font-medium">Can I customize what Robin says?</h3>
              <span className="relative size-5 shrink-0">
                <svg
                  className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.5v15m7.5-7.5h-15" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg
                  className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
              Absolutely. You can provide Robin with custom instructions, business hours, pricing
              information, and specific scripts for different scenarios. It learns from your inputs
              instantly.
            </div>
          </details>

          <details className="group rounded-2xl bg-[#151B2B] border border-white/5">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white hover:bg-white/5 transition-colors rounded-2xl outline-none focus:ring-1 focus:ring-[#D9342B]/50">
              <h3 className="font-medium">What happens if a call is urgent?</h3>
              <span className="relative size-5 shrink-0">
                <svg
                  className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.5v15m7.5-7.5h-15" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg
                  className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
              Robin is trained to detect urgency. If a caller states it's an emergency (based on your
              criteria), the call can be transferred directly to you or a designated team member
              immediately.
            </div>
          </details>

          <details className="group rounded-2xl bg-[#151B2B] border border-white/5">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white hover:bg-white/5 transition-colors rounded-2xl outline-none focus:ring-1 focus:ring-[#D9342B]/50">
              <h3 className="font-medium">Is there a long-term contract?</h3>
              <span className="relative size-5 shrink-0">
                <svg
                  className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.5v15m7.5-7.5h-15" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg
                  className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
              No. Robin operates on a monthly rolling subscription. You can cancel at any time with no
              penalties. We believe the product should keep you, not a contract.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
