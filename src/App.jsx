import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrendSection from './components/TrendSection';
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <TrendSection />
      <DemoSection />
      <Footer />
    </div>
  );
}

export default App;
