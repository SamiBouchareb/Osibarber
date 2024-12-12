import React from 'react';
import { Scissors, Instagram, Phone, MapPin, Clock, ArrowUp, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const CURRENT_YEAR = new Date().getFullYear();

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/osi.barbier/',
    color: 'hover:text-[#E1306C]'
  }
];

const QUICK_LINKS = [
  { name: 'Startseite', to: 'home' },
  { name: 'Über Uns', to: 'about' },
  { name: 'Leistungen', to: 'services' },
  { name: 'Galerie', to: 'gallery' },
  { name: 'Kontakt', to: 'contact' }
];

const CONTACT_INFO = [
  {
    icon: MapPin,
    text: 'Papenhuder Str. 52, 22087 Hamburg',
    href: 'https://maps.google.com/?q=Papenhuder+Str.+52,22087+Hamburg'
  },
  {
    icon: Phone,
    text: '+49 (0) 40 123456',
    href: 'tel:+4940123456'
  },
  {
    icon: Mail,
    text: 'info@osibarbier.de',
    href: 'mailto:info@osibarbier.de'
  },
  {
    icon: Clock,
    text: 'Mo-Fr: 09:00 - 20:00 Uhr',
    href: null
  }
];

export function Footer() {
  return (
    <footer className="relative bg-secondary pt-16 pb-8 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Scissors className="h-8 w-8 text-primary" />
              <span className="text-white text-xl font-bold ml-2">Osi Barbier</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ihr Premium-Barbershop in Hamburg. Wir bieten erstklassigen Service und individuelle Beratung für den modernen Mann.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors duration-200 ${social.color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-primary cursor-pointer transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-semibold mb-6">Öffnungszeiten</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">Montag - Freitag: <span className="text-primary">09:00 - 20:00</span></li>
              <li className="text-gray-400">Samstag: <span className="text-primary">10:00 - 18:00</span></li>
              <li className="text-gray-400">Sonntag: <span className="text-primary">Geschlossen</span></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              {CONTACT_INFO.map((info, index) => (
                <li key={index}>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-start text-gray-400 hover:text-primary transition-colors duration-200 group"
                    >
                      <info.icon className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors duration-200" />
                      <span className="text-sm">{info.text}</span>
                    </a>
                  ) : (
                    <div className="flex items-start text-gray-400">
                      <info.icon className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{info.text}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            {CURRENT_YEAR} Osi Barbier. Alle Rechte vorbehalten.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-lg transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}