export function StatsSection() {
  return (
    <section className="border-y border-white/5 bg-[#151B2B]/30 py-10 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-white mb-2">100%</span>
            <p className="text-sm text-slate-400 font-medium">of calls answered</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-white mb-2">&lt;60s</span>
            <p className="text-sm text-slate-400 font-medium">Summaries delivered</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-white mb-2">10m</span>
            <p className="text-sm text-slate-400 font-medium">Set up time</p>
          </div>
        </div>

        <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-8">
          Trusted by 500+ UK Businesses
        </p>

        <div className="flex flex-wrap justify-center gap-10 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="h-6 w-28 bg-white/10 rounded-sm flex items-center justify-center text-[10px] font-bold text-white/30">
            COMPANY A
          </div>
          <div className="h-6 w-28 bg-white/10 rounded-sm flex items-center justify-center text-[10px] font-bold text-white/30">
            COMPANY B
          </div>
          <div className="h-6 w-28 bg-white/10 rounded-sm flex items-center justify-center text-[10px] font-bold text-white/30">
            COMPANY C
          </div>
          <div className="h-6 w-28 bg-white/10 rounded-sm flex items-center justify-center text-[10px] font-bold text-white/30">
            COMPANY D
          </div>
          <div className="h-6 w-28 bg-white/10 rounded-sm flex items-center justify-center text-[10px] font-bold text-white/30">
            COMPANY E
          </div>
        </div>
      </div>
    </section>
  );
}
