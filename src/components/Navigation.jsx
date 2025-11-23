import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo" onClick={() => scrollToSection('hero')}>
                    <span className="logo-icon">⚡</span>
                    <span className="logo-text">Agentic Commerce</span>
                </div>
                <ul className="nav-menu">
                    <li><button onClick={() => scrollToSection('hero')} className="nav-link">Home</button></li>
                    <li><button onClick={() => scrollToSection('trends')} className="nav-link">Trends</button></li>
                    <li><button onClick={() => scrollToSection('demo')} className="nav-link">Demo</button></li>
                    <li><button onClick={() => scrollToSection('demo')} className="nav-cta">Get Started</button></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
