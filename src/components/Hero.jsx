import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    The Future of Commerce is <span className="highlight">Agentic</span>
                </h1>
                <p className="hero-subtitle">
                    Empowering autonomous agents to discover, negotiate, and transact on your behalf.
                    Welcome to the next evolution of digital exchange.
                </p>
                <button className="cta-button">Explore the Revolution</button>
            </div>
            <div className="hero-visual">
                <div className="orb"></div>
                <div className="orb-glow"></div>
            </div>
        </section>
    );
};

export default Hero;
