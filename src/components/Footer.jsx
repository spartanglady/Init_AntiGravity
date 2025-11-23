import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3 className="footer-title">Agentic Commerce</h3>
                    <p className="footer-description">
                        Building the future of autonomous shopping experiences.
                    </p>
                </div>
                <div className="footer-section">
                    <h4 className="footer-heading">Product</h4>
                    <ul className="footer-links">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#trends">Trends</a></li>
                        <li><a href="#demo">Demo</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4 className="footer-heading">Connect</h4>
                    <ul className="footer-links">
                        <li><a href="#" onClick={(e) => e.preventDefault()}>Twitter</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}>LinkedIn</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}>GitHub</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Agentic Commerce Demo. Built for the Future.</p>
            </div>
        </footer>
    );
};

export default Footer;
