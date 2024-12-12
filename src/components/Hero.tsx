import React, { useEffect, useState } from 'react';
import heroImage from '../assets/WhatsApp-Image-2023-11-19-at-16.10.47.jpeg';

export function Hero() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const openBooking = () => {
    window.open('https://www.treatwell.de/ort/osi-barbier-1/?utm_source=google&utm_medium=rwg&hl=de-DE&gei=mrBUZ8PqCvKExc8PgZ-D8Qc', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with enhanced effects */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b 
          from-black/30 
          via-transparent 
          to-black/50 
          z-10" />
        
        {/* Side vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-r 
          from-black/30 
          via-transparent 
          to-black/30 
          z-10" />

        {/* Animated decorative elements */}
        <div className="absolute inset-0 z-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Parallax Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center transform-gpu"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${scrollPosition * 0.5}px) scale(1.1)`,
            filter: 'brightness(0.85) contrast(1.1)',
            transition: 'transform 0.1s ease-out',
            willChange: 'transform'
          }} 
        />
      </div>

      {/* Content Container with Glass Effect */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 py-20">
        <div 
          className="max-w-3xl mx-auto backdrop-blur-sm bg-black/10 p-8 rounded-2xl border border-white/10
            shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
          style={{
            transform: `translateY(${scrollPosition * 0.2}px)`,
            opacity: Math.max(1 - scrollPosition / 700, 0),
          }}
        >
          {/* Main Text with Enhanced Typography */}
          <div className="space-y-2 text-center mb-8">
            <h1 className="relative">
              <span className="block text-4xl md:text-6xl font-bold text-white tracking-tight
                transform transition-transform hover:scale-105 duration-300">
                YOU DREAM IT,
              </span>
              <span className="block text-4xl md:text-6xl font-bold text-white tracking-tight mt-1
                transform transition-transform hover:scale-105 duration-300">
                WE MAKE IT!
              </span>
              
              {/* Enhanced Welcome Text with Premium Animation */}
              <div className="relative mt-6 overflow-hidden">
                {/* Animated Background Line */}
                <div 
                  className="absolute h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent w-full top-0
                    transform transition-transform duration-1000"
                  style={{
                    transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
                    opacity: isVisible ? 1 : 0,
                  }}
                />
                
                {/* Main Welcome Text with Gradient and Animation */}
                <span 
                  className={`
                    relative block text-2xl md:text-3xl font-medium tracking-[0.2em] py-4
                    bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent
                    transform transition-all duration-1000 ease-out
                    hover:scale-105 hover:tracking-[0.3em]
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                  `}
                  style={{
                    backgroundSize: '200% auto',
                    animation: 'gradient 8s linear infinite',
                  }}
                >
                  WILLKOMMEN BEI OSI!
                </span>
                
                {/* Animated Background Line */}
                <div 
                  className="absolute h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent w-full bottom-0
                    transform transition-transform duration-1000"
                  style={{
                    transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
                    opacity: isVisible ? 1 : 0,
                  }}
                />
              </div>
            </h1>
          </div>

          {/* Buttons with Enhanced Styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={openBooking}
              className="group relative px-8 py-4 overflow-hidden rounded-full
                bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold text-lg
                transition-all duration-300 hover:shadow-lg
                active:transform active:scale-95"
            >
              <span className="relative z-10">Termin Buchen</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 
                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            <button 
              onClick={scrollToServices}
              className="group relative px-8 py-4 w-full sm:w-auto overflow-hidden rounded-full
                bg-white/10 backdrop-blur-sm text-white font-semibold text-lg border border-white/20
                transition-all duration-300 hover:bg-white/20 hover:shadow-lg
                active:transform active:scale-95"
            >
              <span className="relative z-10">Unsere Leistungen</span>
              <div className="absolute inset-0 bg-white/10 
                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left">
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Add the keyframe animation for the gradient */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}