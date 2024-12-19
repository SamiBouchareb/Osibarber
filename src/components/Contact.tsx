import React from 'react';
import { MapPin, Phone, Clock, Navigation2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Actual salon coordinates for Hamburg Papenhuder Str. 52
const SALON_COORDINATES = {
  lat: 53.55629,
  lng: 10.01994
};

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center py-32 bg-[#0a0a0a]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent" />
      </div>
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Heading Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <span className="inline-block px-4 py-1 bg-red-500/10 rounded-full text-red-500 text-sm font-medium tracking-wider uppercase mb-6">
            Ihr Weg zu uns
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Besuchen Sie Uns
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Erleben Sie erstklassigen Service in unserem Premium-Salon im Herzen von Hamburg
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 xl:gap-12">
          {/* Opening Hours */}
          <motion.div variants={itemVariants}>
            <div className="group h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 
              hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-red-500/10">
                  <Clock className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">Öffnungszeiten</h3>
              </div>
              <div className="space-y-4">
                {[
                  { day: 'Montag - Freitag', hours: '09:00 - 20:00 Uhr' },
                  { day: 'Samstag', hours: '10:00 - 18:00 Uhr' },
                  { day: 'Sonntag', hours: 'Geschlossen' }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white/70">{schedule.day}</span>
                    <span className="text-white font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Address & Map */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 
              hover:border-white/20 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-red-500/10">
                    <MapPin className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Unsere Adresse</h3>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${SALON_COORDINATES.lat},${SALON_COORDINATES.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 
                    transition-all duration-300 text-white/80 hover:text-white text-sm"
                >
                  <Navigation2 className="w-4 h-4" />
                  <span>Route planen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="mb-6 space-y-1">
                <p className="text-white text-lg">Papenhuder Str. 52</p>
                <p className="text-white/70">22087 Hamburg</p>
              </div>

              <div className="rounded-xl overflow-hidden border border-white/10">
                <iframe
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${SALON_COORDINATES.lng - 0.002}%2C${SALON_COORDINATES.lat - 0.002}%2C${SALON_COORDINATES.lng + 0.002}%2C${SALON_COORDINATES.lat + 0.002}&layer=mapnik&marker=${SALON_COORDINATES.lat}%2C${SALON_COORDINATES.lng}`}
                  className="w-full h-[300px]"
                  frameBorder="0"
                  title="Salon Location"
                  loading="lazy"
                  style={{ filter: 'grayscale(1) contrast(1.2)' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}