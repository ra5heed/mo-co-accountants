import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../assets/data';
import Button from './Button';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const overHero = !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${overHero && !mobileOpen
          ? 'py-8 bg-transparent'
          : 'py-4 bg-navy/95 backdrop-blur-2xl border-b border-gold/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]'
        }
        px-6 sm:px-10 md:px-16 lg:px-24 flex items-center justify-between`}
    >
      {/* ── LOGO ── */}
      <button onClick={() => scrollTo('#hero')} className="flex flex-col leading-tight group">
        <span
          className={`font-sans font-black tracking-[0.06em] uppercase transition-all duration-300 text-[1.05rem] group-hover:text-gold
            ${overHero ? 'text-white' : 'text-cream'}`}
        >
          MO <span className="text-gold">&amp;</span> Co.
        </span>
        <span className="font-sans text-[0.5rem] tracking-[0.28em] uppercase text-gold/70 mt-0.5">
          Chartered Accountants
        </span>
      </button>

      {/* ── DESKTOP LINKS ── */}
      <ul className="hidden md:flex items-center gap-10">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <button
              onClick={() => scrollTo(link.href)}
              className={`relative font-sans text-[0.68rem] tracking-[0.2em] uppercase transition-colors duration-300 group
                ${overHero ? 'text-white/55 hover:text-white' : 'text-cream/55 hover:text-cream'}`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-400" />
            </button>
          </li>
        ))}
      </ul>

      {/* ── CTA BUTTON ── */}
      <Button
        variant={overHero ? 'primary' : 'dark'}
        darkBg={overHero}
        onClick={() => scrollTo('#contact')}
        className="hidden md:inline-flex"
      >
        Get in Touch <span className="inline-block rotate-45 ml-1.5 text-[0.75rem]">↑</span>
      </Button>

      {/* ── MOBILE TOGGLE ── */}
      <button
        className={`md:hidden transition-colors duration-300 ${overHero ? 'text-white' : 'text-cream'}`}
        onClick={() => setMobileOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* ── MOBILE DRAWER ── */}
      <div
        className={`fixed top-0 left-0 right-0 bg-navy border-b border-gold/10
          flex flex-col pt-24 pb-10 px-8 gap-6 md:hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)]
          transition-all duration-400 overflow-hidden z-40
          ${mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
      >
        {/* ── CLOSE BUTTON inside drawer ── */}
        <button
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
          className="absolute top-5 right-6 flex items-center gap-2 text-cream/60 hover:text-gold transition-colors duration-300 group"
        >
          <span className="font-sans text-[0.6rem] tracking-[0.2em] uppercase">Close</span>
          <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="text-left font-sans text-[0.75rem] tracking-[0.2em] uppercase text-cream/80 hover:text-gold transition-colors duration-300"
          >
            {link.label}
          </button>
        ))}
        <Button
          variant="dark"
          onClick={() => scrollTo('#contact')}
          className="self-start mt-2"
        >
          <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ background: 'linear-gradient(120deg, #B8945A, #E0C07A, #B8945A)' }}
            />
            <span className="relative z-10 group-hover:text-navy transition-colors duration-300"></span>
          Get in Touch 
        </Button>
      </div>
    </nav>
  );
}
