import { SERVICES } from '../assets/data';

const FOOTER_COMPANY  = ['About Us', 'Our Team', 'Careers',  'Contact'];
const FOOTER_HREFS    = ['#about',   '#team',    '#contact', '#contact'];
const AFFILIATIONS    = ['ICAN Member', 'ANAN Member', 'IFAC Compliant', 'CAC Registered'];

export default function FooterSection() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-navy px-6 sm:px-10 md:px-16 lg:px-24 pt-20 pb-8">
      {/* Top grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="mb-1">
            <span className="font-sans font-black text-white text-[1rem] tracking-[0.04em] uppercase">
              MO <span className="text-gold">&amp;</span> Co.
            </span>
          </div>
          <p className="font-sans text-gold text-[0.55rem] tracking-[0.24em] uppercase mb-5">
            Chartered Accountants
          </p>
          <p className="font-sans font-light text-cream/40 text-[0.83rem] leading-[1.85]">
            Delivering trusted financial expertise to businesses and individuals across Nigeria
            since 2004.
          </p>
        </div>

        {/* Services — pulled directly from canonical SERVICES data */}
        <FooterCol title="Services">
          {SERVICES.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => scrollTo('#services')}
                className="font-sans text-[0.84rem] text-cream/45 hover:text-gold transition-colors duration-300 text-left"
              >
                {s.title}
              </button>
            </li>
          ))}
        </FooterCol>

        {/* Company */}
        <FooterCol title="Company">
          {FOOTER_COMPANY.map((item, i) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(FOOTER_HREFS[i])}
                className="font-sans text-[0.84rem] text-cream/45 hover:text-gold transition-colors duration-300 text-left"
              >
                {item}
              </button>
            </li>
          ))}
        </FooterCol>

        {/* Affiliations */}
        <FooterCol title="Affiliations">
          {AFFILIATIONS.map((a) => (
            <li key={a}>
              <span className="font-sans text-[0.84rem] text-cream/45">{a}</span>
            </li>
          ))}
        </FooterCol>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <p className="font-sans text-[0.72rem] text-cream/25 tracking-[0.05em]">
          © {new Date().getFullYear()} Mikhail Olatunde &amp; Co. Chartered Accountants. All rights reserved.
        </p>
        <p className="font-sans text-[0.62rem] tracking-[0.2em] uppercase text-gold/50">
          ICAN · ANAN · CAC Registered
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-sans text-[0.6rem] tracking-[0.24em] uppercase text-gold mb-5">
        {title}
      </h4>
      <ul className="flex flex-col gap-3.5">{children}</ul>
    </div>
  );
}
