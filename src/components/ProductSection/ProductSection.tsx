import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import uppercutImage from '../../assets/uppercut-deluxe-styling-powder-20gr-2-1718198451.webp';

export const ProductSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a0a]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#0a0a0a]" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Product Image Container */}
          <div 
            className="relative lg:h-[90vh] flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative aspect-square w-full max-w-2xl">
              {/* Glow Effect */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 z-0"
                  >
                    <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Product Image */}
              <motion.div
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 h-full"
              >
                <img
                  src={uppercutImage}
                  alt="Osi Dust Powder Wax"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-10 lg:space-y-12 lg:max-w-xl">
            {/* Premium Badge */}
            <div className="inline-block">
              <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm 
                rounded-full px-6 py-2 border border-red-500/30">
                <span className="text-red-500 text-sm font-medium tracking-wide uppercase">Exklusiv bei Osi Barbier</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                      Osi Dust
                    </span>
                  </span>
                  <span className="block mt-1 text-3xl lg:text-4xl xl:text-5xl font-medium text-white/70 tracking-wide">
                    Powder Wax
                  </span>
                </h2>
              </div>
              
              <p className="text-white/70 text-lg xl:text-xl leading-relaxed max-w-2xl">
                Premium Haarstyling-Produkt für den perfekten Look. Entwickelt von Barbieren 
                für professionelle Ergebnisse.
              </p>
            </div>

            {/* Progress Bars */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/80 font-medium text-lg">Halt</span>
                  <span className="text-white/60">Stark</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "80%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/80 font-medium text-lg">Finish</span>
                  <span className="text-white/60">Matt</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between pt-8">
              <div className="text-white space-y-1">
                <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Preis</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                    12,99 €
                  </span>
                </div>
              </div>
              <button 
                className="group relative px-8 py-4 overflow-hidden rounded-full
                  border border-white/10 bg-transparent
                  transition-all duration-300 hover:border-white/20"
              >
                <div className="relative z-10 flex items-center gap-2">
                  <span className="text-white font-medium tracking-wide">
                    Im Salon erhältlich
                  </span>
                  <svg 
                    className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
