import React from 'react';
import Hero from './components/Hero';
import TrendSection from './components/TrendSection';
import DemoSection from './components/DemoSection';

function App() {
  return (
    <div className="app">
      <Hero />
      <TrendSection />
      <DemoSection />
      <footer style={{ padding: '2rem', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
        <p>&copy; 2025 Agentic Commerce Demo. Built for the Future.</p>
      </footer>
    </div>
  );
}

export default App;
