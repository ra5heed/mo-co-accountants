import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionLabel from '../components/SectionLabel';
import Button from '../components/Button';
import { SERVICES } from '../assets/data';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  message: string;
}

export default function ContactSection() {
  const sectionRef = useScrollReveal(80);
  const [form, setForm] = useState<FormState>({
    firstName: '', lastName: '', email: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ firstName: '', lastName: '', email: '', service: '', message: '' });
  };

  const inputClass = [
    'font-sans text-[0.9rem] text-body bg-cream',
    'border border-body/15 rounded-xl px-4 py-3.5 w-full outline-none',
    'focus:border-gold focus:ring-2 focus:ring-gold/15',
    'transition-all duration-300 placeholder:text-muted/45',
  ].join(' ');

  return (
    <section
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-cream-dark px-6 sm:px-10 md:px-16 lg:px-24 py-28 grid md:grid-cols-2 gap-16 md:gap-24 items-start"
    >
      {/* ── Left: copy + contact info ── */}
      <div>
        <SectionLabel className="reveal mb-6">Get in Touch</SectionLabel>

        <h2
          className="reveal font-sans font-black text-navy uppercase leading-[0.95] tracking-[-0.03em] mb-6"
          style={{ fontSize: 'clamp(2.4rem, 4vw, 3.8rem)' }}
        >
          Let&apos;s Build Your<br />
          <span
            style={{
              background: 'linear-gradient(110deg, #B8945A 0%, #D4B483 50%, #B8945A 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Future
          </span>
          {' '}Together
        </h2>

        <p className="reveal font-sans font-light text-muted leading-[1.9] text-[0.95rem] mb-10">
          Whether you&apos;re a growing SME, a large corporation, or an individual seeking financial
          clarity — our team is ready to support you. Schedule a consultation today.
        </p>

        <div className="reveal flex flex-col gap-5">
          {[
            { Icon: MapPin, text: '2 Gbajobi Street, Off Oritshe Street, Balogun B/Stop, ikeja - Lagos, Nigeria' },
            { Icon: Phone, text: '+234 812 332 5137' },
            { Icon: Mail,  text: 'olatunde.m@mikholng.com' },
          ].map(({ Icon, text }) => (
            <div key={text} className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon size={14} className="text-gold" strokeWidth={1.8} />
              </div>
              <span className="font-sans text-[0.88rem] text-body leading-[1.7] pt-1.5">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: form ── */}
      <form onSubmit={handleSubmit} className="reveal flex flex-col gap-5">
        {submitted && (
          <div className="bg-gold/10 border border-gold/30 rounded-xl px-5 py-4 font-sans text-[0.82rem] text-body">
            ✓ Thank you — we&apos;ll be in touch shortly.
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          {(['firstName', 'lastName'] as const).map((field) => (
            <div key={field} className="flex flex-col gap-2">
              <label className="font-sans text-[0.62rem] tracking-[0.2em] uppercase text-muted">
                {field === 'firstName' ? 'First Name' : 'Last Name'}
              </label>
              <input
                name={field}
                value={form[field]}
                onChange={handleChange}
                className={inputClass}
                placeholder={field === 'firstName' ? 'Tunde' : 'Adebayo'}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-sans text-[0.62rem] tracking-[0.2em] uppercase text-muted">Email Address</label>
          <input
            type="email" name="email" value={form.email}
            onChange={handleChange} className={inputClass}
            placeholder="tunde@company.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-sans text-[0.62rem] tracking-[0.2em] uppercase text-muted">Service of Interest</label>
          <select
            name="service" value={form.service}
            onChange={handleChange} className={inputClass}
          >
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.title}>{s.title}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-sans text-[0.62rem] tracking-[0.2em] uppercase text-muted">Message</label>
          <textarea
            name="message" value={form.message}
            onChange={handleChange} rows={4}
            className={inputClass}
            placeholder="Tell us about your needs…"
          />
        </div>

        <Button type="submit" variant="dark" className="self-start mt-2">
          Send Message
        </Button>
      </form>
    </section>
  );
}
