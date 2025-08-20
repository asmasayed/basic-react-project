import React, { useState, useEffect } from 'react';
import './Slogans.css';

export default function Slogans() {
  const slogans = [
    {
      id: 1,
      quote: "Choose a job you love, and you will never have to work a day in your life.",
      author: "Confucius"
    },
    {
      id: 2,
      quote: "Love what you do, and you’ll succeed.",
      author: "Albert Schweitzer"
    },
    {
      id: 3,
      quote: "Your career is what you're paid for. Your calling is what you're made for.",
      author: "Steve Harvey"
    },
    {
      id: 4,
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      id: 5,
      quote: "Don't be afraid to give yourself everything you've ever wanted in life.",
      author: "Riccardo Tisci"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);
      
      // After fade out completes, change quote and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === slogans.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 500); // Half second for fade out
      
    }, 5000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [slogans.length]);

  const currentSlogan = slogans[currentIndex];

  return (
    <section className="slogans-section">
      <div className="slogans-container">
        <div className="slogans-content">
          <div className={`slogan-item ${isVisible ? 'visible' : 'hidden'}`}>
            <blockquote className="quote">
              "{currentSlogan.quote}"
            </blockquote>
            <cite className="author">— {currentSlogan.author}</cite>
          </div> 
        </div>
        {/* Progress indicators */}
          <div className="progress-dots">
            {slogans.map((_, index) => (
              <span 
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsVisible(true);
                  }, 500);
                }}
              />
            ))}
          </div>
      </div>
    </section>
  );
}
