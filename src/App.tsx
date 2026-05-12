import { useState, useCallback, useEffect } from 'react';
import IntroOverlay from './components/IntroOverlay';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import StatsSection from './sections/StatsSection';
import TeamSection from './sections/TeamSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  // Lock scroll during intro — must be a side effect, not a render statement
  useEffect(() => {
    if (!introComplete) {
      document.body.style.overflow = 'hidden';
    }
  }, [introComplete]);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
    document.body.style.overflow = '';
  }, []);

  return (
    <>
      {!introComplete && <IntroOverlay onComplete={handleIntroComplete} />}

      <div className={`transition-opacity duration-700 ${introComplete ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <StatsSection />
          <TeamSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </>
  );
}
