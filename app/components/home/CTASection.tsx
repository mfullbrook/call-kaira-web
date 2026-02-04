export function CTASection() {
  return (
    <section className="bg-gradient-to-b from-[#0F1320] to-black py-28 text-center border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D9342B]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative inline-block mb-10">
          <div className="absolute inset-0 rounded-full bg-[#D9342B] blur-[40px] opacity-20 animate-pulse" />
          <h2 className="relative text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-6 leading-tight">
            Stop losing leads today.
          </h2>
        </div>

        <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-12 font-light">
          Join hundreds of UK businesses who trust Robin to handle their calls. Set up takes less
          than 10 minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto relative rounded-full bg-[#111111] border border-white/10 text-white px-8 py-5 text-lg font-bold overflow-hidden group shadow-glow-red hover:shadow-[0_0_80px_-15px_rgba(217,52,43,0.7)] transition-all duration-300">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#D9342B]/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Free Trial
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-[#D9342B] group-hover:translate-x-1 transition-transform"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <button className="w-full sm:w-auto rounded-full border border-white/20 bg-transparent px-8 py-5 text-lg font-bold text-white hover:bg-white/5 transition-all">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
