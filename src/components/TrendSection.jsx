import React from 'react';
import './TrendSection.css';

const trends = [
    {
        id: 1,
        title: 'Autonomous Decision Making',
        description: 'Agents that don\'t just assist, but decide and execute complex transactions independently.',
        icon: '🧠'
    },
    {
        id: 2,
        title: 'Hyper-Personalization',
        description: 'AI that anticipates needs and curates bespoke shopping experiences in real-time.',
        icon: '✨'
    },
    {
        id: 3,
        title: 'Agent-to-Agent Commerce',
        description: 'A new economy where your agent negotiates directly with brand agents for the best deals.',
        icon: '🤝'
    },
    {
        id: 4,
        title: 'Secure Agentic Payments',
        description: 'Next-gen protocols allowing agents to securely hold wallets and authorize payments.',
        icon: '🔒'
    }
];

const TrendSection = () => {
    return (
        <section className="trend-section">
            <h2 className="section-title">Key Trends in <span className="highlight-text">2025</span></h2>
            <div className="trend-grid">
                {trends.map((trend) => (
                    <div key={trend.id} className="trend-card">
                        <div className="trend-icon">{trend.icon}</div>
                        <h3 className="trend-title">{trend.title}</h3>
                        <p className="trend-description">{trend.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrendSection;
