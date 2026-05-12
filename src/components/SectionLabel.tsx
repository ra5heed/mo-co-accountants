interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({ children, light = false, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-9 h-px bg-gold flex-shrink-0" />
      <p
        className={`font-sans text-[0.66rem] tracking-[0.32em] uppercase ${
          light ? 'text-gold-light' : 'text-gold'
        }`}
      >
        {children}
      </p>
    </div>
  );
}
