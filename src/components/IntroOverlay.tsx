import { useEffect, useRef, useState } from 'react';

interface IntroOverlayProps {
  onComplete: () => void;
}

export default function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const [hiding, setHiding] = useState(false);
  const onCompleteRef = useRef(onComplete);

  // Keep ref in sync without re-running the effect when the callback identity changes
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // After 3.6s start the fade-out, then notify parent after the 0.9s CSS transition
    const fadeTimer   = setTimeout(() => setHiding(true),                   3600);
    const removeTimer = setTimeout(() => onCompleteRef.current(),       3600 + 900);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []); // intentionally empty — runs once on mount

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-navy flex flex-col items-center justify-center transition-opacity duration-[900ms] ease-out ${
        hiding ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="intro-line mb-12" />
      <div className="intro-logo text-center px-6">
        <p className="font-serif font-light text-cream tracking-[0.08em] leading-snug text-4xl md:text-5xl">
          Mikhail Olatunde
        </p>
        <p className="font-serif italic text-gold tracking-[0.08em] leading-snug text-4xl md:text-5xl">
          &amp; Co.
        </p>
      </div>
      <p className="intro-sub mt-6 text-gold-light text-[0.72rem] tracking-[0.28em] uppercase font-sans">
        Chartered Accountants &nbsp;&middot;&nbsp; Nigeria
      </p>
      <div className="intro-bar absolute bottom-0 left-0" />
    </div>
  );
}
