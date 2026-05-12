import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionLabel from '../components/SectionLabel';
import { PILLARS } from '../assets/data';

export default function AboutSection() {
  const sectionRef = useScrollReveal(90);

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="grid md:grid-cols-2"
    >
      {/* Left image column */}
      <div className="reveal relative bg-cream-dark overflow-hidden min-h-[420px] md:min-h-0">
        <img
          src="/image/office-photo.jpg"
          alt="Mikhail Olatunde & Co. office"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gold right edge bar */}
        <div className="absolute right-0 top-[15%] bottom-[15%] w-1 bg-gold" />
      </div>

      {/* Right text column */}
      <div className="bg-cream px-8 md:px-16 lg:px-20 py-20 md:py-28 flex flex-col justify-center">
        <SectionLabel className="reveal mb-6">Our Story</SectionLabel>

        <h2 className="reveal font-serif font-light text-navy leading-[1.15] mb-7 text-4xl md:text-5xl">
          Built on Trust,<br />Driven by <em className="italic text-gold">Expertise</em>
        </h2>

        <p className="reveal font-sans font-light text-muted leading-[1.9] text-[0.95rem] mb-5">
          Founded by Mikhail Olatunde, LLB (UK), MBA, ACTI, FCA, our firm has grown from a boutique practice into a
          respected name in Nigerian chartered accountancy. We combine deep local knowledge with
          international best practices to deliver financial solutions that stand the test of time.
        </p>

        <p className="reveal font-sans font-light text-muted leading-[1.9] text-[0.95rem] mb-10">
          We are registered with the Institute of Chartered Accountants of Nigeria (ICAN) and hold
          membership with the Association of National Accountants of Nigeria (ANAN).
        </p>

        <div className="reveal grid grid-cols-2 gap-5">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="border-l-2 border-gold pl-4">
              <h4 className="font-serif font-semibold text-navy text-[1.05rem] mb-1">
                {pillar.title}
              </h4>
              <p className="font-sans font-light text-muted text-[0.82rem] leading-[1.65]">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
