'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NAV_ITEMS = ['Product', 'Features', 'Pricing'];
const MORE_ITEMS = ['Blog', 'Docs', 'Support'];

function Navbar() {
  const [showMore, setShowMore] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((open) => !open);
    setShowMore(false);
  };

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setShowMore(false);
  };

  return (
    <div className="typenav">
      <nav
        className="navtypo sticky top-0 z-50 relative bg-white/70 backdrop-blur-xl border-b border-slate-200/60"
        style={{
          animation: 'fadeDown .5s ease both',
          boxShadow: '0 6px 30px rgba(0,0,0,0.08)',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        <div className="absolute -top-24 -right-40 w-[420px] h-[420px] bg-gradient-to-br from-blue-400/20 via-cyan-300/20 to-purple-400/20 blur-[140px] rounded-full pointer-events-none" />

        <div className="absolute -top-24 -left-40 w-[360px] h-[360px] bg-gradient-to-br from-purple-400/20 via-pink-300/20 to-transparent blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-3 relative">
          <div className="flex items-center justify-between w-full">
            <Link href="/" className="flex items-center gap-2 group" onClick={closeMenus}>
              <div className="relative w-12 h-12">
                <Image
                  src="/logo4.png"
                  alt="DigitalSloth Logo"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  background:
                    'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1d4ed8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Digital
                <span
                  style={{
                    background:
                      'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Sloth
                </span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <ul className="flex items-center gap-6 lg:gap-10">
                {NAV_ITEMS.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group relative px-2 py-2 text-slate-600 text-[0.95rem] font-medium hover:text-[#1d4ed8] hover:bg-blue-50 rounded-md transition-all duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}

                <li className="relative">
                  <button
                    type="button"
                    onClick={() => setShowMore((open) => !open)}
                    className="group flex items-center gap-1 px-1 py-2 text-slate-600 text-[0.95rem] font-medium hover:text-[#1d4ed8] transition-colors"
                  >
                    More
                    <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#1d4ed8] transition-all duration-300 group-hover:w-full" />
                  </button>

                  {showMore && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-xl shadow-xl py-2 z-50">
                      {MORE_ITEMS.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#1d4ed8] transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              </ul>

              <div className="flex items-center gap-3 ml-3 pl-3 border-l border-slate-200/60">
                <button
                  type="button"
                  className="text-slate-500 text-[0.85rem] font-medium px-3 py-1.5 rounded-lg hover:text-[#1d4ed8] hover:bg-blue-50 transition-all"
                >
                  Sign in
                </button>

                <button
                  type="button"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-lg text-[0.85rem] font-semibold shadow-md hover:shadow-lg hover:-translate-y-[1px] transition-all"
                >
                  Get Started →
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition-colors hover:text-[#1d4ed8] hover:border-blue-200"
            >
              <span className="text-2xl leading-none">{mobileMenuOpen ? '×' : '☰'}</span>
            </button>
          </div>

          {mobileMenuOpen && (
            <div
              id="mobile-nav-menu"
              className="md:hidden mt-4 rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-lg p-4"
            >
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={closeMenus}
                    className="px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-blue-50 hover:text-[#1d4ed8] transition-colors"
                  >
                    {item}
                  </a>
                ))}

                {MORE_ITEMS.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={closeMenus}
                    className="px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-blue-50 hover:text-[#1d4ed8] transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-3">
                <button
                  type="button"
                  className="w-full px-4 py-3 rounded-xl text-slate-600 font-medium hover:bg-blue-50 hover:text-[#1d4ed8] transition-colors"
                >
                  Sign in
                </button>

                <button
                  type="button"
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-md"
                >
                  Get Started →
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
