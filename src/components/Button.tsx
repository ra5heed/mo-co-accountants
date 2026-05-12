import type { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * Shared Button component — matches the hero section CTA style.
 *
 * variant="primary"  White bg → gold-gradient fill on hover, glow shadow.
 * variant="ghost"    Glassmorphism border pill → gold tint on hover.
 * variant="dark"     Navy bg on light sections → gold bg on hover.
 *
 * Use `darkBg` on dark/navy sections so primary reads correctly.
 */

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'dark';
  children: ReactNode;
  /** Pass true when button sits on a dark background */
  darkBg?: boolean;
}

export default function Button({
  variant = 'primary',
  darkBg = false,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  /* ── Primary: white fill → gold gradient on hover ── */
  if (variant === 'primary') {
    return (
      <button
        {...rest}
        className={[
          'group relative inline-flex items-center font-sans font-bold text-[0.72rem] tracking-[0.16em] uppercase',
          'rounded-full px-7 py-3 overflow-hidden transition-all duration-400',
          darkBg ? 'bg-white text-navy' : 'bg-navy text-cream',
          'hover:shadow-[0_0_40px_rgba(184,148,90,0.65)] hover:scale-[1.04]',
          className,
        ].join(' ')}
      >
        <span
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: 'linear-gradient(120deg, #B8945A, #E0C07A, #B8945A)' }}
        />
        <span className="relative z-10 group-hover:text-navy transition-colors duration-300">
          {children}
        </span>
      </button>
    );
  }

  /* ── Ghost: border pill with glass effect → gold tint ── */
  if (variant === 'ghost') {
    return (
      <button
        {...rest}
        className={[
          'inline-flex items-center font-sans font-medium text-[0.72rem] tracking-[0.16em] uppercase',
          'rounded-full px-7 py-3 transition-all duration-400 hover:scale-[1.04]',
          darkBg
            ? 'text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:border-gold/60 hover:bg-gold/10 hover:shadow-[0_0_28px_rgba(184,148,90,0.3)] hover:text-white'
            : 'text-navy border border-navy/25 bg-transparent hover:border-gold hover:text-gold hover:shadow-[0_0_20px_rgba(184,148,90,0.2)]',
          className,
        ].join(' ')}
      >
        {children}
      </button>
    );
  }

  /* ── Dark: solid dark fill for light-bg sections ── */
  return (
    <button
      {...rest}
      className={[
        'group relative inline-flex items-center font-sans font-bold text-[0.72rem] tracking-[0.16em] uppercase',
        'rounded-full px-7 py-3 overflow-hidden transition-all duration-400',
        'bg-navy text-cream',
        'hover:shadow-[0_0_40px_rgba(184,148,90,0.55)] hover:scale-[1.04]',
        className,
      ].join(' ')}
    >
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: 'linear-gradient(120deg, #B8945A, #E0C07A, #B8945A)' }}
      />
      <span className="relative z-10 group-hover:text-navy transition-colors duration-300">
        {children}
      </span>
    </button>
  );
}
