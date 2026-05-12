interface PhotoPlaceholderProps {
  label?: string;
  className?: string;
  dark?: boolean;
}

export default function PhotoPlaceholder({ label = 'Photo', className = '', dark = false }: PhotoPlaceholderProps) {
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center gap-3 ${
        dark ? 'bg-navy-mid' : 'bg-navy/30'
      } ${className}`}
    >
      <svg
        width="40" height="40" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1"
        className="text-gold/30"
      >
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span className="text-gold/30 text-[0.7rem] tracking-[0.1em] uppercase font-sans">{label}</span>
    </div>
  );
}
