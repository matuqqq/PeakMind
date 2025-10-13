import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import PoliticaDePrivacidad from './components/sections/PrivacyPolitics.tsx';
import { StickyNavigation } from './components/navigation/StickyNavigation';
import { StickyCTA } from './components/ui/StickyCTA';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-featherBold">
        <StickyNavigation />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ProblemStats />
                <HowItWorks />
                <GameMechanics />
                <ValueProposition />
                <ProductShowcase />
                <Testimonials />
                <FAQ />
                <Roadmap />
              </>
            } />
            <Route path="/privacy" element={
              <div className="py-12">
                <PoliticaDePrivacidad />
              </div>
            } />
          </Routes>
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </BrowserRouter>
  );
}

export default App;