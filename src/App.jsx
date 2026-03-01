import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Timeline from './components/Timeline';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased bg-ivory text-ink selection:bg-gold-soft selection:text-ink">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Timeline />
        <SocialProof />
        <Services />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
