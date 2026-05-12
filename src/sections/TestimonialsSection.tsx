import { useState, useEffect, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionLabel from '../components/SectionLabel';
import { TESTIMONIALS } from '../assets/data';

export default function TestimonialsSection() {
  const sectionRef = useScrollReveal();
  const [activeIdx, setActiveIdx] = useState(0);
  const [fading, setFading] = useState(false);

  const setQuote = useCallback((idx: number) => {
    setFading(true);
    setTimeout(() => {
      setActiveIdx(idx);
      setFading(false);
    }, 300);
  }, []);

  // Use functional updater so the interval never captures a stale activeIdx
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx((prev) => {
        const next = (prev + 1) % TESTIMONIALS.length;
        setFading(true);
        setTimeout(() => setFading(false), 300);
        return next;
      });
    }, 6000);
    return () => clearInterval(id);
  }, []); // no activeIdx dependency — functional updater always has current value

  const active = TESTIMONIALS[activeIdx];

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative bg-navy py-28 px-8 md:px-16 overflow-hidden"
    >
      {/* Decorative large quote mark */}
      <span
        className="absolute top-0 left-4 font-serif text-gold/[0.04] leading-none select-none pointer-events-none"
        style={{ fontSize: '28rem' }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <SectionLabel light className="reveal justify-center mb-10">Client Voices</SectionLabel>

        <div
          className="transition-opacity duration-300"
          style={{ opacity: fading ? 0 : 1 }}
        >
          <blockquote className="font-serif font-light italic text-cream leading-[1.65] mb-8 text-xl md:text-2xl lg:text-3xl">
            &ldquo;{active.quote}&rdquo;
          </blockquote>
          <cite className="not-italic font-sans text-gold text-[0.72rem] tracking-[0.22em] uppercase">
            — {active.author} · {active.company}
          </cite>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-3 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setQuote(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === activeIdx
                  ? 'bg-gold scale-150'
                  : 'bg-gold/30 hover:bg-gold/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
