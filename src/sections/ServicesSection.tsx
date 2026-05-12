import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionLabel from '../components/SectionLabel';
import Button from '../components/Button';
import { SERVICES } from '../assets/data';

export default function ServicesSection() {
  const sectionRef = useScrollReveal(100);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="services"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-navy pt-28 pb-32 px-6 sm:px-10 md:px-16 lg:px-24"
    >
      {/* ── Header ── */}
      <div className="text-center mb-20">
        <SectionLabel light className="reveal justify-center mb-6">What We Offer</SectionLabel>
        <h2
          className="reveal font-sans font-black text-white uppercase leading-[0.95] tracking-[-0.03em] mb-6"
          style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}
        >
          Three Ways We <br />
          <span
            className="inline-block"
            style={{
              background: 'linear-gradient(110deg, #B8945A 0%, #F0CC7A 40%, #B8945A 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Serve You
          </span>
        </h2>
        <p className="reveal font-sans font-light text-white/45 text-[0.92rem] leading-[1.85] max-w-lg mx-auto">
          Focused expertise across the three pillars that matter most — no noise, just precision.
        </p>
      </div>

      {/* ── 3-column service cards ── */}
      <div className="grid md:grid-cols-3 gap-px bg-gold/15 rounded-2xl overflow-hidden">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onEnquire={() => scrollTo('#contact')}
          />
        ))}
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: { id: number; title: string; description: string };
  onEnquire: () => void;
}

function ServiceCard({ service, onEnquire }: ServiceCardProps) {
  return (
    <div className="reveal group relative bg-navy-mid px-10 py-14 overflow-hidden flex flex-col hover:bg-navy-light transition-colors duration-400">
      {/* Animated top gold border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold/20 group-hover:bg-gold transition-colors duration-400" />

      {/* Large index number */}
      <div
        className="font-sans font-black text-gold/12 group-hover:text-gold/25 leading-none mb-8 transition-colors duration-400 select-none"
        style={{ fontSize: 'clamp(4rem, 7vw, 6rem)' }}
      >
        {String(service.id).padStart(2, '0')}
      </div>

      {/* Title */}
      <h3
        className="font-sans font-black text-white uppercase leading-[1.05] tracking-[-0.02em] mb-5"
        style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)' }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="font-sans font-light text-white/45 text-[0.87rem] leading-[1.8] mb-10 flex-1">
        {service.description}
      </p>

      {/* CTA — matches hero ghost style (dark bg context) */}
      <Button variant="ghost" darkBg onClick={onEnquire} className="self-start px-7 py-3">
        Enquire
      </Button>
    </div>
  );
}
