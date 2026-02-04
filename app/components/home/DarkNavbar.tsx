import { Link } from 'react-router';

export function DarkNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0B0F19]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/home2" className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#D9342B] to-[#b0261f] text-white shadow-glow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M8 7a5 5 0 0110 0v8a5 5 0 01-10 0V7z" />
              <path d="M8 11h8M8 15h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">CallKaira</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            href="#how-it-works"
          >
            How It Works
          </a>
          <a
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            href="#pricing"
          >
            Pricing
          </a>
          <a
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            href="#lettings"
          >
            For Lettings
          </a>
          <a
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            href="#msps"
          >
            For MSPs
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <a
            className="hidden sm:block text-sm font-medium text-slate-300 hover:text-white transition-colors"
            href="#"
          >
            Login
          </a>
          <button className="inline-flex h-10 items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm font-bold text-white shadow ring-1 ring-white/10 transition-all hover:bg-white/20 hover:scale-105 focus-visible:outline-none">
            Start Free Trial
          </button>
        </div>
      </div>
    </header>
  );
}
