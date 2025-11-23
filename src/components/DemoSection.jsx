import React, { useState, useEffect, useRef } from 'react';
import './DemoSection.css';

const conversation = [
    { sender: 'user', text: 'Find me a vintage leather jacket under $200.' },
    { sender: 'agent', text: 'Searching across 50+ vintage stores...' },
    { sender: 'agent', text: 'Found 3 options. Negotiating with "RetroFinds" for a 10% discount...' },
    { sender: 'agent', text: 'Deal secured! Total: $185. Shipping to your default address?' },
    { sender: 'user', text: 'Yes, approve.' },
    { sender: 'system', text: 'Transaction Completed. Receipt sent to wallet.' }
];

const DemoSection = () => {
    const [messages, setMessages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const chatEndRef = useRef(null);

    useEffect(() => {
        if (currentIndex < conversation.length && isPlaying) {
            const timeout = setTimeout(() => {
                setMessages((prev) => [...prev, conversation[currentIndex]]);
                setCurrentIndex((prev) => prev + 1);
                if (currentIndex + 1 >= conversation.length) {
                    setIsPlaying(false);
                }
            }, 1500); // Delay between messages
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, isPlaying]);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const restartDemo = () => {
        setMessages([]);
        setCurrentIndex(0);
        setIsPlaying(true);
    };

    return (
        <section id="demo" className="demo-section">
            <div className="demo-container">
                <div className="demo-text">
                    <h2 className="demo-title">Experience <span className="highlight-text">Agentic Speed</span></h2>
                    <p className="demo-description">
                        Watch as an autonomous agent handles discovery, negotiation, and payment in seconds.
                        No more endless scrolling or checkout forms.
                    </p>
                </div>
                <div className="chat-interface">
                    <div className="chat-header">
                        <div className="header-dots">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>
                        <span className="chat-title">Shopping Agent v2.0</span>
                        <button
                            className="restart-button"
                            onClick={restartDemo}
                            title="Restart Demo"
                        >
                            ↻
                        </button>
                    </div>
                    <div className="chat-body">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                {msg.sender === 'agent' && <span className="avatar">🤖</span>}
                                {msg.sender === 'user' && <span className="avatar">👤</span>}
                                <div className="message-content">{msg.text}</div>
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;
