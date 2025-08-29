import React from 'react';
import { Hero } from './components/sections/Hero';
import { ProblemStats } from './components/sections/ProblemStats';
import { HowItWorks } from './components/sections/HowItWorks';
import { GameMechanics } from './components/sections/GameMechanics';
import { ValueProposition } from './components/sections/ValueProposition';
import { ProductShowcase } from './components/sections/ProductShowcase';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Roadmap } from './components/sections/Roadmap';
import { Footer } from './components/sections/Footer';
import { StickyNavigation } from './components/navigation/StickyNavigation';
import { StickyCTA } from './components/ui/StickyCTA';

function App() {
  return (
    <div className="min-h-screen font-[feather] bg-white">
      <StickyNavigation />
      <main>
        <Hero />
        <ProblemStats />
        <HowItWorks />
        <GameMechanics />
        <ValueProposition />
        <ProductShowcase />
        <Testimonials />
        <FAQ />
        <Roadmap />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;