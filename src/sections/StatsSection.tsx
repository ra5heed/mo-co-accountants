import { useScrollReveal } from '../hooks/useScrollReveal';
import { STATS } from '../assets/data';

export default function StatsSection() {
  const sectionRef = useScrollReveal(100);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="grid grid-cols-2 md:grid-cols-4 bg-gold-pale"
    >
      {STATS.map((stat, idx) => (
        <div
          key={stat.id}
          className={`reveal text-center px-6 py-16 hover:bg-gold/10 transition-colors duration-300
            ${idx < STATS.length - 1 ? 'border-r border-gold/25' : ''}`}
        >
          <div className="font-serif font-light text-navy leading-none mb-3 text-5xl md:text-6xl">
            {stat.value}
            {stat.suffix && (
              <sup className="font-serif text-gold text-[0.45em] align-super">{stat.suffix}</sup>
            )}
          </div>
          <p className="font-sans text-[0.68rem] tracking-[0.2em] uppercase text-muted">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
}
