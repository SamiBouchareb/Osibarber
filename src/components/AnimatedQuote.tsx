import React, { useEffect, useState, useRef } from 'react';

export const AnimatedQuote = () => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const quote = "Mit Leidenschaft und Präzision – Ihr persönlicher Stil ist meine Mission";
  const glowColors = [
    'rgba(255, 59, 59, 0.2)',  // Red glow
    'rgba(255, 255, 255, 0.1)', // White glow
    'rgba(255, 59, 59, 0.15)'   // Softer red glow
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    const typeSpeed = 70; // Base typing speed
    const naturalVariation = 50; // Random variation in typing speed

    const typeNextCharacter = () => {
      if (currentIndex <= quote.length) {
        setDisplayText(quote.slice(0, currentIndex));
        setCursorPosition(currentIndex);
        
        const randomDelay = Math.random() * naturalVariation;
        const totalDelay = typeSpeed + randomDelay;

        currentIndex++;
        setTimeout(typeNextCharacter, totalDelay);
      } else {
        setIsTypingComplete(true);
      }
    };

    // Start typing after a short delay
    setTimeout(typeNextCharacter, 500);
  }, [isVisible]);

  return (
    <div 
      ref={containerRef}
      className="relative py-3 px-6 overflow-hidden"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm">
        {glowColors.map((color, index) => (
          <div
            key={index}
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at ${50 + (index * 20)}% ${50 + (index * 10)}%, ${color} 0%, transparent 50%)`,
              animation: `floatGlow ${6 + index}s ease-in-out infinite alternate`,
              animationDelay: `${index * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className={`relative transform transition-all duration-1000 
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
      >
        {/* Decorative Line */}
        <div className="absolute left-0 top-1/2 w-full h-[1px] overflow-hidden">
          <div className={`h-full bg-gradient-to-r from-transparent via-red-500/30 to-transparent 
            transform transition-transform duration-1000 ease-out
            ${isVisible ? 'translate-x-0 opacity-30' : '-translate-x-full opacity-0'}`}
          />
        </div>

        {/* Text Container */}
        <div className="relative text-center">
          <p className="text-sm font-light tracking-wide text-white/90 leading-relaxed">
            {displayText}
            {/* Animated Cursor */}
            <span className={`inline-block w-0.5 h-4 ml-0.5 align-middle bg-red-500
              ${isTypingComplete ? 'animate-cursor-blink-slow' : 'animate-cursor-blink'}`}
            />
          </p>

          {/* Floating Particles Effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-0.5 bg-red-500/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `floatParticle ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes floatGlow {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(1%, 1%) scale(1.05);
            opacity: 0.4;
          }
          100% {
            transform: translate(-1%, -1%) scale(0.95);
            opacity: 0.2;
          }
        }

        @keyframes floatParticle {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px) scale(1.2);
            opacity: 0.3;
          }
        }

        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes cursor-blink-slow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.2; }
        }

        .animate-cursor-blink {
          animation: cursor-blink 0.8s steps(2) infinite;
        }

        .animate-cursor-blink-slow {
          animation: cursor-blink-slow 1.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
