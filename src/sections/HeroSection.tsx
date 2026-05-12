import { useEffect, useState } from 'react';

/* ────────────────────────────────────────────────────────────
   Architectural SVG cityscape — stylised office towers
──────────────────────────────────────────────────────────── */
function CityscapeSVG() {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full pointer-events-none select-none"
      viewBox="0 0 1440 560"
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4B483" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#B8945A" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="bldGrad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B8945A" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#0D1B2A" stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── Far background skyline ── */}
      {[
        [0,310,55,250],[62,340,38,220],[108,280,72,280],[192,318,45,242],
        [248,230,95,330],[356,295,50,265],[416,255,68,305],[496,272,82,288],
        [590,200,110,360],[716,258,65,302],[792,225,100,335],[908,272,55,288],
        [978,248,78,312],[1068,268,60,292],[1140,210,92,350],[1248,255,68,305],
        [1328,228,60,332],[1400,245,40,315],
      ].map(([x,y,w,h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill="url(#bldGrad)" />
      ))}

      {/* ── Mid towers ── */}
      <rect x="230"  y="140" width="48"  height="420" fill="url(#bldGrad2)" />
      <rect x="246"  y="128" width="14"  height="22"  fill="#D4B483" opacity="0.55" filter="url(#glow)" />
      <rect x="610"  y="90"  width="58"  height="470" fill="url(#bldGrad2)" />
      <rect x="627"  y="76"  width="24"  height="24"  fill="#D4B483" opacity="0.65" filter="url(#glow)" />
      <rect x="1040" y="110" width="52"  height="450" fill="url(#bldGrad2)" />
      <rect x="1054" y="96"  width="22"  height="22"  fill="#D4B483" opacity="0.5"  filter="url(#glow)" />

      {/* ── Foreground glassy tower (centre-left, dominant) ── */}
      <rect x="320"  y="60"  width="74"  height="500" fill="#1A2E42" opacity="0.45" />
      <rect x="322"  y="62"  width="70"  height="3"   fill="#B8945A" opacity="0.6" />
      {/* Glass window grid — tall tower */}
      {Array.from({ length: 18 }, (_, r) =>
        Array.from({ length: 4 }, (_, c) => (
          <rect
            key={`w-${r}-${c}`}
            x={330 + c * 15} y={72 + r * 24}
            width="9" height="14"
            fill="#FAF7F2"
            opacity={Math.random() > 0.55 ? 0.18 : 0.06}
          />
        ))
      )}

      {/* ── Right anchor tower ── */}
      <rect x="1100" y="80"  width="68"  height="480" fill="#1A2E42" opacity="0.40" />
      <rect x="1102" y="82"  width="64"  height="3"   fill="#B8945A" opacity="0.55" />
      {Array.from({ length: 16 }, (_, r) =>
        Array.from({ length: 3 }, (_, c) => (
          <rect
            key={`wr-${r}-${c}`}
            x={1110 + c * 17} y={90 + r * 26}
            width="10" height="15"
            fill="#FAF7F2"
            opacity={Math.random() > 0.5 ? 0.14 : 0.05}
          />
        ))
      )}

      {/* ── Ground horizon line ── */}
      <rect x="0" y="554" width="1440" height="6" fill="#B8945A" opacity="0.12" />
      {/* Subtle ground glow */}
      <ellipse cx="720" cy="560" rx="720" ry="30" fill="#B8945A" opacity="0.06" />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────
   MAIN HERO SECTION
──────────────────────────────────────────────────────────── */
export default function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  /* Subtle parallax on mouse move */
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', handle, { passive: true });
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
    >
      {/* ══════════════════════════════════════════════════
          BACKGROUND SYSTEM
      ══════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${mouse.x * 0.5}px, ${mouse.y * 0.35}px) scale(1.06)`,
          transition: 'transform 1.4s cubic-bezier(0.23,1,0.32,1)',
        }}
      >
        {/* Deep navy-to-obsidian base */}
        <div className="absolute inset-0 bg-[#060d18]" />

        {/* Animated colour-mesh gradient */}
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background: `
              radial-gradient(ellipse 90% 70% at 15% 20%, rgba(184,148,90,0.22) 0%, transparent 65%),
              radial-gradient(ellipse 70% 60% at 85% 75%, rgba(36,59,85,0.55) 0%, transparent 60%),
              radial-gradient(ellipse 60% 80% at 50% 0%,  rgba(13,27,42,0.8)   0%, transparent 70%),
              linear-gradient(160deg, #060e1a 0%, #0D1B2A 40%, #0a1408 100%)
            `,
          }}
        />

        {/* GOLD ORB — top-left, primary atmosphere */}
        <div
          className="absolute orb-pulse rounded-full"
          style={{
            top: '-12%', left: '-8%',
            width: '680px', height: '680px',
            background: 'radial-gradient(circle, rgba(184,148,90,0.28) 0%, rgba(184,148,90,0.05) 55%, transparent 75%)',
            filter: 'blur(40px)',
          }}
        />

        {/* TEAL ORB — bottom-right */}
        <div
          className="absolute orb-pulse-2 rounded-full"
          style={{
            bottom: '-10%', right: '-5%',
            width: '560px', height: '560px',
            background: 'radial-gradient(circle, rgba(36,59,85,0.65) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />

        {/* AMBER ORB — centre, warmth */}
        <div
          className="absolute orb-pulse-3 rounded-full"
          style={{
            top: '30%', left: '42%',
            width: '420px', height: '420px',
            background: 'radial-gradient(circle, rgba(212,180,131,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Architectural cityscape */}
        <CityscapeSVG />

        {/* Film grain */}
        <div className="absolute inset-0 hero-noise" />

        {/* Edge vignette */}
        <div className="absolute inset-0 hero-vignette" />

        {/* Strong bottom fade — blends cityscape into content area */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64"
          style={{ background: 'linear-gradient(to top, rgba(6,13,24,0.95) 0%, transparent 100%)' }}
        />
      </div>

      {/* ══════════════════════════════════════════════════
          CONTENT — grows to fill, aligned to top
      ══════════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col flex-1 px-6 sm:px-10 md:px-16 lg:px-24 pt-32 md:pt-40 pb-0">

        {/* ── TRUST BADGE ── */}
        <div className="hero-badge self-start mb-10">
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2">
            <span className="relative flex h-2 w-2">
              <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
            </span>
            <span className="font-sans text-[0.62rem] tracking-[0.28em] uppercase text-gold/80">
              Trusted Since 2004 · Nigeria
            </span>
          </div>
        </div>

        {/* ── MAIN HEADLINE — massive, stacked, dominant ── */}
        <div className="mb-10 overflow-hidden">
          <div className="hero-h1-line1">
            <h1
              className="font-sans font-black text-white leading-[0.90] tracking-[-0.04em] uppercase"
              style={{ fontSize: 'clamp(4rem, 10.5vw, 10.5rem)' }}
            >
              Creative
            </h1>
          </div>
          <div className="hero-h1-line2 overflow-hidden">
            <h1
              className="hero-gradient-text font-sans font-black leading-[0.90] tracking-[-0.04em] uppercase"
              style={{ fontSize: 'clamp(4rem, 10.5vw, 10.5rem)' }}
            >
              Finance
            </h1>
          </div>
          <div className="hero-h1-line3 overflow-hidden">
            <h1
              className="font-sans font-black text-white/85 leading-[0.90] tracking-[-0.04em] uppercase"
              style={{ fontSize: 'clamp(4rem, 10.5vw, 10.5rem)' }}
            >
              Leadership.
            </h1>
          </div>
        </div>

        {/* ── SECONDARY STATEMENT + BODY ── */}
        <div className="hero-sub flex flex-col md:flex-row md:items-end gap-8 md:gap-24 mb-12 max-w-5xl">
          {/* Body copy */}
          <div className="max-w-sm">
            <p className="font-sans font-light text-white/50 leading-[1.9] text-[0.88rem]">
              Expert accounting, tax advisory &amp; financial consulting across Nigeria —
              with integrity at every figure.
            </p>
          </div>

          {/* Secondary quote block */}
          <div className="flex-shrink-0 border-l-2 border-gold/30 pl-6">
            <p className="font-sans text-[0.58rem] tracking-[0.28em] uppercase text-gold/60 mb-2">
              Our Promise
            </p>
            <p className="font-sans font-semibold text-white/75 text-[1rem] leading-[1.55]">
              "Great financial strategy<br />
              should feel effortless."
            </p>
          </div>
        </div>

        {/* ── CTAs ── */}
        <div className="hero-ctas flex flex-wrap gap-4 items-center mb-16">

          {/* Primary CTA */}
          <button
            onClick={() => scrollTo('#services')}
            className="group relative inline-flex items-center font-sans font-bold text-[0.72rem] tracking-[0.16em] uppercase
              rounded-full px-7 py-3 overflow-hidden transition-all duration-400
              bg-white text-navy
              hover:shadow-[0_0_40px_rgba(184,148,90,0.65)] hover:scale-[1.04]"
          >
            {/* Hover gold fill */}
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ background: 'linear-gradient(120deg, #B8945A, #E0C07A, #B8945A)' }}
            />
            <span className="relative z-10 group-hover:text-navy transition-colors duration-300">
              Explore Services
            </span>
          </button>

        </div>
      </div>

    </section>
  );
}
