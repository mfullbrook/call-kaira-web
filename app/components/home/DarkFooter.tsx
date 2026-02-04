export function DarkFooter() {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex size-8 items-center justify-center rounded-lg bg-[#D9342B]/20 text-[#D9342B]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M8 7a5 5 0 0110 0v8a5 5 0 01-10 0V7z" />
                  <path d="M8 11h8M8 15h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">CallKaira</span>
            </div>
            <p className="text-sm text-slate-500 mb-4 max-w-xs font-light">
              The AI receptionist that works as hard as you do. Made with ❤️ in London.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Product</h4>
            <ul className="space-y-3 text-sm text-slate-500 font-light">
              <li>
                <a className="hover:text-[#D9342B] transition-colors" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="hover:text-[#D9342B] transition-colors" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:text-[#D9342B] transition-colors" href="#">
                  Case Studies
                </a>
              </li>
              <li>
                <a className="hover:text-[#D9342B] transition-colors" href="#">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Solutions</h4>
            <ul className="space-y-3 text-sm text-slate-500 font-light">
              <li>
                <a className="hover:text-[#D9342B] transition-colors" href="#">
                  For Lettings
                </a>
              </li>
              <li>
                <a className="hover:text-[#D9342B] transition-colors" href="#">
                  For MSPs
                </a>
              </li>
              <li>
                <a className="hover:text-[#D9342B] transition-colors" href="#">
                  For Trades
                </a>
              </li>
              <li>
                <a className="hover:text-[#D9342B] transition-colors" href="#">
                  For Clinics
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-500 font-light">
              <li>
                <a className="hover:text-[#D9342B] transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-[#D9342B] transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="hover:text-[#D9342B] transition-colors" href="#">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a className="hover:text-[#D9342B] transition-colors" href="#">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600">© 2024 CallKaira Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="text-slate-600 hover:text-white transition-colors" href="#">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a className="text-slate-600 hover:text-white transition-colors" href="#">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
