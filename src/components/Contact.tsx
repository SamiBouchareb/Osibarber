import React from 'react';
import { MapPin, Phone, Clock, Navigation2 } from 'lucide-react';
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
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary-light to-secondary opacity-90" />
      <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-5" />
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative max-w-7xl mx-auto px-6"
      >
        {/* Heading Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
            Ihr Weg zu uns
          </span>
          <h2 className="text-6xl font-alex-brush text-primary mb-4">Besuchen Sie Uns</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Erleben Sie erstklassigen Service in unserem Salon
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Opening Hours */}
          <motion.div variants={itemVariants}>
            <ContactCard
              icon={Clock}
              title="Öffnungszeiten"
              details={[
                'Montag - Freitag:',
                '09:00 - 20:00 Uhr',
                'Samstag:',
                '10:00 - 18:00 Uhr',
                'Sonntag:',
                'Geschlossen'
              ]}
              className="h-full"
            />
          </motion.div>

          {/* Center: Address & Map */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <ContactCard
              icon={MapPin}
              title="Unsere Adresse"
              details={[
                'Papenhuder Str. 52',
                '22087 Hamburg'
              ]}
              className="mb-4"
            >
              <div className="mt-4 rounded-lg overflow-hidden border border-primary/10">
                <iframe
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${SALON_COORDINATES.lng - 0.002}%2C${SALON_COORDINATES.lat - 0.002}%2C${SALON_COORDINATES.lng + 0.002}%2C${SALON_COORDINATES.lat + 0.002}&layer=mapnik&marker=${SALON_COORDINATES.lat}%2C${SALON_COORDINATES.lng}`}
                  className="w-full h-[180px]"
                  frameBorder="0"
                  title="Salon Location"
                  loading="lazy"
                  style={{ border: 0 }}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 inline-flex items-center text-primary text-sm font-medium"
                onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${SALON_COORDINATES.lat},${SALON_COORDINATES.lng}`, '_blank')}
              >
                <Navigation2 className="h-4 w-4 mr-2" />
                Route planen
              </motion.button>
            </ContactCard>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div variants={itemVariants}>
            <ContactCard
              icon={Phone}
              title="Kontaktieren Sie uns"
              details={[
                'Telefon:',
                '+49 (0) 40 123456',
                'E-Mail:',
                'info@osibarbier.de'
              ]}
              className="h-full"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full bg-primary/10 hover:bg-primary/20 text-primary py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                onClick={() => window.location.href = 'tel:+4940123456'}
              >
                <Phone className="h-4 w-4 mr-2" />
                Jetzt anrufen
              </motion.button>
            </ContactCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  details: string[];
  className?: string;
  children?: React.ReactNode;
}

function ContactCard({ 
  icon: Icon, 
  title, 
  details,
  className = '',
  children
}: ContactCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={`bg-secondary/40 backdrop-blur-sm p-6 rounded-xl shadow-lg transition-all duration-300 border border-white/5 ${className}`}
    >
      <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="space-y-1">
        {details.map((detail, index) => (
          <p key={index} className="text-gray-300 text-sm leading-relaxed">{detail}</p>
        ))}
      </div>
      {children}
    </motion.div>
  );
}