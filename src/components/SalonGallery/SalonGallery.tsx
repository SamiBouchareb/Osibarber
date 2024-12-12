import React, { useState } from 'react';
import salon1 from '../../assets/salan 1.webp';
import salon2 from '../../assets/salon 2.webp';
import salon3 from '../../assets/solan 3.webp';
import salon4 from '../../assets/solan 4.webp';

export const SalonGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: salon1, alt: 'Salon Ansicht 1' },
    { src: salon2, alt: 'Salon Ansicht 2' },
    { src: salon3, alt: 'Salon Ansicht 3' },
    { src: salon4, alt: 'Salon Ansicht 4' },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black via-black to-zinc-900">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-24 relative">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-12 tracking-tight">
            Unser{' '}
            <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">
              Salon
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-2xl text-gray-300 leading-relaxed font-light">
              Willkommen in unserem{' '}
              <span className="font-normal bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                exklusiven Barbershop
              </span>
            </p>
            <p className="text-xl text-gray-400 leading-relaxed font-light tracking-wide">
              Wo traditionelle Handwerkskunst auf moderne Eleganz trifft.
              <br className="hidden md:block" />
              Erleben Sie Premium-Styling in einer Atmosphäre, die Ihre Sinne inspiriert.
            </p>
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative h-[400px] overflow-hidden rounded-2xl shadow-2xl 
                         shadow-black/50 cursor-pointer transform transition-all duration-700
                         hover:shadow-xl hover:shadow-red-900/30"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform transition-all duration-700 
                         group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 
                              group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex flex-col items-center gap-4">
                    <span className="text-white/90 font-light tracking-[0.2em] uppercase text-sm">
                      Entdecken Sie mehr
                    </span>
                    <div className="w-12 h-12 rounded-full border border-red-500/30 flex items-center justify-center
                                  transform group-hover:scale-110 transition-transform duration-500
                                  bg-gradient-to-br from-red-500/10 to-transparent backdrop-blur-sm">
                      <svg 
                        className="w-6 h-6 text-red-500/90" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="1.5" 
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-xl text-gray-400/90 max-w-2xl mx-auto leading-relaxed font-light">
            Ihr Besuch bei uns ist mehr als ein Termin –{' '}
            <span className="font-normal bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">
              es ist ein Erlebnis
            </span>
            .
            <br className="hidden md:block" />
            Lassen Sie sich von unserem Team in einer Atmosphäre der Exzellenz verwöhnen.
          </p>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -top-12 right-0 text-white/80 text-sm px-6 py-3 
                         rounded-full bg-gradient-to-r from-red-500/20 to-red-700/20 hover:from-red-500/30 hover:to-red-700/30 
                         transition-all duration-300 backdrop-blur-sm flex items-center gap-3 group hover:scale-105"
            >
              <span className="font-light tracking-[0.2em] uppercase text-sm">Schließen</span>
              <span className="text-xl group-hover:rotate-90 transition-transform duration-300">×</span>
            </button>
            <img
              src={selectedImage}
              alt="Vergrößerte Ansicht"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};
