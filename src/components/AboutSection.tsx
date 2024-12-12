import React, { useEffect, useState } from 'react';
import ownerImage from '../assets/WhatsApp-Image-2023-11-19-at-16.12.50-1152x1536.jpeg.webp';
import { AnimatedQuote } from './AnimatedQuote'; // Assuming AnimatedQuote is in the same directory

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-transparent animate-gradient-shift"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent"></div>
        </div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ff0000_1px,transparent_1px)] bg-[size:16px_16px]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Section - Enhanced */}
          <div className="w-full lg:w-5/12 relative order-2 lg:order-1">
            <div className="relative group">
              {/* Premium Frame Effect */}
              <div className="absolute -inset-4 rounded-2xl opacity-75">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent blur-2xl 
                  transform group-hover:scale-105 transition-transform duration-1000"></div>
              </div>

              {/* Main Image Container */}
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-tr from-red-500/10 to-transparent p-0.5">
                <div className="relative rounded-lg overflow-hidden">
                  {/* Image Wrapper with Premium Effects */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={ownerImage}
                      alt="OSI - Der Barbier"
                      className="absolute inset-0 w-full h-full object-cover object-center transform 
                        transition-all duration-700 group-hover:scale-105 filter contrast-105 brightness-95"
                    />
                    
                    {/* Sophisticated Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent 
                      opacity-80 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-red-500/5 rounded-full blur-3xl 
                animate-pulse-slow opacity-75"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-red-500/5 rounded-full blur-3xl 
                animate-pulse-slow opacity-75" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Image Caption */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-11/12">
              <div className="relative overflow-hidden bg-gradient-to-r from-black/95 via-black/95 to-black/95 
                backdrop-blur-xl rounded-xl border border-white/5 transform hover:scale-[1.02] 
                transition-all duration-300">
                <AnimatedQuote />
              </div>
            </div>
          </div>

          {/* Text Content Section - Enhanced */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <div className="relative">
              {/* Animated Entry for Text Content */}
              <div className={`space-y-6 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                {/* Section Title with Premium Styling */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-[2px] bg-gradient-to-r from-red-500 to-transparent"></div>
                    <h2 className="text-red-500 text-xs uppercase tracking-[0.2em] font-medium">
                      Willkommen
                    </h2>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    Hey, schön, dass du da bist!
                  </h3>
                </div>

                {/* Content Paragraphs with Enhanced Typography */}
                <div className="space-y-4 text-white/75 text-base leading-relaxed tracking-wide">
                  <p className="transform hover:translate-x-2 transition-transform duration-300">
                    In meinem Barbiershop geht's um mehr als nur ums Haareschneiden – es geht um Begegnungen, 
                    Gemeinschaft und die Kunst, Schönheit in jedem Detail zu sehen. Bei Osi Barbier ist jeder 
                    Besuch nicht nur eine Gelegenheit, sich zu stylen, sondern auch, sich zu entspannen.
                  </p>
                  
                  <p className="transform hover:translate-x-2 transition-transform duration-300">
                    Von präzisen Taper-Fades über mutige Zero-Fades bis hin zu stilvollen High-Fades – bei 
                    Osi Barbier, dem besten Barbier in Hamburg, findest du nicht nur Experten, sondern auch 
                    eine herzliche Gemeinschaft, die sich darauf freut, deine individuelle Stilvision zum 
                    Leben zu erwecken.
                  </p>
                  
                  <p className="transform hover:translate-x-2 transition-transform duration-300">
                    Deine Zufriedenheit und dein Wohlbefinden stehen bei uns an erster Stelle!
                  </p>
                </div>

                {/* Signature with Premium Effect */}
                <div className="relative inline-block group pt-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent opacity-0 
                    group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                  <p className="relative text-xl font-medium bg-gradient-to-r from-red-500 to-red-400 
                    bg-clip-text text-transparent transform group-hover:translate-x-1 transition-transform duration-300">
                    – OSI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10%, 10%) rotate(5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        .animate-gradient-shift {
          animation: gradient-shift 15s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.15; }
        }
      `}</style>
    </section>
  );
}
