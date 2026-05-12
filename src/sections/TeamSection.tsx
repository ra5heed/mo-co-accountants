import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionLabel from '../components/SectionLabel';
import PhotoPlaceholder from '../components/PhotoPlaceholder';
import Button from '../components/Button';
import { TEAM_MEMBERS } from '../assets/data';
import type { TeamMember } from '../types';

export default function TeamSection() {
  const sectionRef = useScrollReveal(100);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="team"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-cream px-6 sm:px-10 md:px-16 lg:px-24 py-28"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
        <div>
          <SectionLabel className="reveal mb-5">Our People</SectionLabel>
          <h2
            className="reveal font-sans font-black text-navy uppercase leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)' }}
          >
            Meet the<br />
            <span
              style={{
                background: 'linear-gradient(110deg, #B8945A 0%, #D4B483 50%, #B8945A 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Experts
            </span>
          </h2>
        </div>
        <Button
          variant="dark"
          onClick={() => scrollTo('#contact')}
          className="reveal self-start md:self-auto"
        >
          Join Our Team
        </Button>
      </div>

      {/* Team grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TEAM_MEMBERS.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="reveal group">
      <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: '3/4' }}>
        <div className="absolute inset-0 bg-navy-mid group-hover:scale-[1.06] transition-transform duration-700">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <PhotoPlaceholder dark />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      </div>
      <div className="border-b border-gold/20 py-5">
        <h3 className="font-serif text-navy text-[1.22rem]">{member.name}</h3>
        <p className="font-sans text-gold text-[0.72rem] tracking-[0.14em] uppercase mt-1">
          {member.credentials} · {member.role}
        </p>
      </div>
    </div>
  );
}
