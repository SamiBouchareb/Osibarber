import React, { useRef } from 'react';
import { ServiceCard } from './ServiceCard';
import { AnimatedBackground } from './AnimatedBackground';

interface Service {
  title: string;
  price: string;
  description: string;
  category: string;
  iconType: string;
}

const services: Service[] = [
  // Haare
  {
    title: "Herren Haarschnitt",
    price: "35",
    description: "Professioneller Haarschnitt inkl. Beratung, Waschen, Styling",
    category: "Haare",
    iconType: "haircut"
  },
  {
    title: "Kinder Haarschnitt",
    price: "25",
    description: "Kindgerechter Haarschnitt bis 12 Jahre",
    category: "Haare",
    iconType: "child"
  },
  {
    title: "Fade / Kontur",
    price: "40",
    description: "Präziser Fade-Schnitt mit sauberen Konturen",
    category: "Haare",
    iconType: "fade"
  },
  {
    title: "Edgar Cut",
    price: "45",
    description: "Trendiger Edgar Cut mit modernem Styling",
    category: "Haare",
    iconType: "edgar"
  },
  // Bart & Rasur
  {
    title: "Bart Trim",
    price: "20",
    description: "Professionelles Barttrimmen und Formgebung",
    category: "Bart & Rasur",
    iconType: "beard"
  },
  {
    title: "Rasur",
    price: "35",
    description: "Traditionelle Nassrasur mit Dampfhandtuch",
    category: "Bart & Rasur",
    iconType: "beardTrim"
  },
  // Sonstiges
  {
    title: "Augenbrauen",
    price: "10",
    description: "Präzises Zupfen und Trimmen der Augenbrauen",
    category: "Sonstiges",
    iconType: "eyebrows"
  },
  {
    title: "Waxing",
    price: "15",
    description: "Professionelle Haarentfernung mit Wachs",
    category: "Sonstiges",
    iconType: "waxing"
  }
];

const premiumServices: Service[] = [
  {
    title: "Osi-Paket",
    price: "37",
    description: "In nur 40 Minuten vereinen wir einen präzisen Haarschnitt und die perfekte Bartformung. Qualität, Effizienz und ein unschlagbarer Preis.",
    category: "Premium",
    iconType: "haircut"
  },
  {
    title: "Osi-Paket Deluxe",
    price: "50",
    description: "Exklusives Styling-Erlebnis mit individuellem Haarschnitt und Bartformung im VIP-Bereich. Ohne Wartezeit, mit Getränkeservice.",
    category: "Premium",
    iconType: "spa"
  }
];

export const ServiceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" ref={sectionRef} className="relative py-16 overflow-hidden">
      <AnimatedBackground />

      {/* Premium glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 backdrop-blur-sm" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Was wir dir bieten
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {services.map((service, index) => (
            <div key={service.title}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Premium Packages */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Premium Pakete</h3>
            <div className="w-16 h-1 mx-auto bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {premiumServices.map((service, index) => (
              <div key={service.title}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
