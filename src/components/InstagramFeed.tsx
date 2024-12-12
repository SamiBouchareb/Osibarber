import React, { useEffect, useRef, useState } from 'react';

export function InstagramFeed() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Add custom fonts for Journey text
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Petit+Formal+Script&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');

      .journey-text {
        font-family: 'Alex Brush', cursive;
        font-weight: 400;
        letter-spacing: 0;
        font-size: 1.2em;
        transform: rotate(-4deg);
      }

      @media (min-width: 768px) {
        .elfsight-app-ee84626a-9831-424e-a24c-6b37e90e54a3 {
          max-width: 800px !important;
          margin: 0 auto !important;
        }
        .elfsight-app-ee84626a-9831-424e-a24c-6b37e90e54a3 .eapps-instagram-feed {
          max-width: 100% !important;
          border-radius: 1.5rem !important;
          overflow: hidden !important;
        }
        .elfsight-app-ee84626a-9831-424e-a24c-6b37e90e54a3 .eapps-instagram-feed-container {
          max-width: 100% !important;
        }
        .elfsight-app-ee84626a-9831-424e-a24c-6b37e90e54a3 .eapps-instagram-feed-posts-grid-post {
          transition: transform 0.3s ease !important;
        }
        .elfsight-app-ee84626a-9831-424e-a24c-6b37e90e54a3 .eapps-instagram-feed-posts-grid-post:hover {
          transform: scale(1.02) !important;
        }
      }
    `;
    document.head.appendChild(styleEl);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(styleEl);
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-[#FEFEFE] to-white"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FEFAFA 50%, #FFFFFF 100%)'
      }}
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-[#FFF5F5] to-white rounded-full filter blur-[120px] opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#FFF5F5] to-white rounded-full filter blur-[120px] opacity-60 translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full opacity-[0.03]">
            <div className="absolute inset-0 bg-gradient-to-r from-red-200 via-transparent to-red-200"
                 style={{ transform: 'skew(-45deg)' }}></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Enhanced Heading Section */}
          <div className="text-center mb-24">
            <div className="inline-block">
              <div className="flex items-center justify-center space-x-3 mb-8">
                <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-red-200 to-transparent opacity-70"></div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500 uppercase tracking-[0.4em] text-sm font-medium">@osi.barbier</span>
                <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-red-200 to-transparent opacity-70"></div>
              </div>
              <div className="relative inline-block mb-8">
                <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                  <span className="text-gray-900 block mb-2">Folgen Sie</span>
                  <span className="text-gray-900">unserer</span>
                  <span className="relative ml-6 inline-block">
                    <span className="journey-text relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-red-600 to-red-500" 
                          style={{ 
                            textShadow: '2px 2px 4px rgba(239, 68, 68, 0.1)',
                          }}>
                      Journey
                    </span>
                    <span className="absolute inset-x-0 bottom-2 h-3 bg-gradient-to-r from-red-100/40 via-red-100/60 to-red-100/40 -skew-x-12 transform -rotate-2 rounded-full blur-sm"></span>
                  </span>
                </h2>
              </div>
            </div>
            <p className="text-gray-600/90 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              Entdecken Sie exklusive Einblicke in unsere Arbeit, die neuesten Trends 
              und werden Sie Teil unserer wachsenden Community
            </p>
          </div>

          {/* Enhanced Instagram Feed Container */}
          <div 
            className="relative transform transition-all duration-500"
            ref={feedRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Premium Frame with Enhanced Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-transparent to-white/95 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-transparent to-white/95 pointer-events-none"></div>
            
            {/* Premium Feed Container with Enhanced Shadows */}
            <div className={`relative bg-white rounded-[2rem] p-8
              transition-all duration-500 transform
              ${!isMobile ? 'max-w-4xl mx-auto hover:scale-[1.02]' : ''}
              ${isHovered 
                ? 'shadow-[0_20px_70px_rgba(0,0,0,0.08),0_10px_20px_rgba(239,68,68,0.05)]' 
                : 'shadow-[0_10px_50px_rgba(0,0,0,0.06)]'
              }
            `}>
              {/* Enhanced Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-transparent rounded-[2rem]"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-red-50/10 rounded-[2rem] opacity-70"></div>
              
              {/* Instagram Widget Container with Premium Styling */}
              <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm">
                <div className="elfsight-app-ee84626a-9831-424e-a24c-6b37e90e54a3" data-elfsight-app-lazy></div>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center mt-20">
            <a 
              href="https://www.instagram.com/osi.barbier/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`
                inline-flex items-center space-x-4 px-10 py-5 
                rounded-full bg-gradient-to-r from-white via-red-50/30 to-white
                hover:from-red-50/30 hover:via-white hover:to-red-50/30
                transition-all duration-500 group
                shadow-[0_10px_20px_rgba(239,68,68,0.05)]
                hover:shadow-[0_15px_30px_rgba(239,68,68,0.08)]
              `}
            >
              <span className="text-lg font-medium bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Mehr auf Instagram entdecken
              </span>
              <svg 
                className="w-6 h-6 text-red-500 transform transition-all duration-500 group-hover:translate-x-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
