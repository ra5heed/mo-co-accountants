import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the section enters the viewport, the 'visible' class is added
 * to each child with the 'reveal' class, staggered by `staggerMs`.
 */
export function useScrollReveal(staggerMs = 80) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const revealEls = section.querySelectorAll<HTMLElement>('.reveal');
            revealEls.forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * staggerMs);
            });
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [staggerMs]);

  return sectionRef;
}
