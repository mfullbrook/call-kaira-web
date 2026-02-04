export function Testimonials() {
  return (
    <section className="py-24 bg-[#0B0F19] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-white">Loved by UK Business Owners</h2>
        </div>

        <div className="relative flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory px-4 md:justify-center scrollbar-hide">
          {[
            {
              quote:
                "We used to miss about 15 calls a week. Since installing Robin, we've booked 20% more viewings. It paid for itself in day one.",
              name: 'James M.',
              role: 'Estate Agent, London',
            },
            {
              quote:
                'The setup was incredibly fast. I love getting WhatsApp summaries instead of listening to long voicemails.',
              name: 'Sarah L.',
              role: 'Director, TechFix Ltd',
            },
            {
              quote:
                "Professional, reliable, and cost-effective. It's like having a full-time receptionist for a fraction of the price.",
              name: 'David K.',
              role: 'Founder, Plumbing Pros',
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="snap-center shrink-0 w-[320px] rounded-3xl bg-[#151B2B] p-8 shadow-card-glow border border-white/5 hover:border-white/10 transition-all"
            >
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 mb-8 text-sm leading-relaxed font-light">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                <div className="size-10 rounded-full bg-slate-700 ring-2 ring-white/10" />
                <div>
                  <p className="text-sm font-bold text-white">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
