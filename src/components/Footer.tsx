import React from 'react';
import { Instagram, Phone, MapPin, Clock, ArrowUp, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import logoWhite from '../assets/Logowhite.png';

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
    <footer className="relative bg-[#050505] pt-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#050505] opacity-95" />
        <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 xl:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="home" smooth={true} duration={500} className="inline-block cursor-pointer">
              <img 
                src={logoWhite} 
                alt="Osi Barbier Logo" 
                className="h-16 w-auto hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-white/60 text-base leading-relaxed">
              Ihr Premium-Barbershop in Hamburg. Wir bieten erstklassigen Service und individuelle Beratung für den modernen Mann.
            </p>
            <div className="flex space-x-6">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="p-3 rounded-full bg-red-500/5 hover:bg-red-500/10 transition-colors">
                    <social.icon className="h-5 w-5 text-red-500/90 group-hover:text-red-500 transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-white font-semibold text-lg mb-6">
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Navigation</span>
            </h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-white/60 hover:text-red-500 cursor-pointer transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 lg:col-start-9">
            <h3 className="text-white font-semibold text-lg mb-6">
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Kontakt</span>
            </h3>
            <ul className="space-y-4">
              {CONTACT_INFO.map((info, index) => (
                <li key={index}>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center space-x-3 text-white/60 hover:text-red-500 transition-colors duration-200"
                    >
                      <div className="p-2 rounded-lg bg-red-500/5 group-hover:bg-red-500/10 transition-colors">
                        <info.icon className="h-4 w-4 text-red-500/90 group-hover:text-red-500" />
                      </div>
                      <span>{info.text}</span>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-3 text-white/60">
                      <div className="p-2 rounded-lg bg-red-500/5">
                        <info.icon className="h-4 w-4 text-red-500/90" />
                      </div>
                      <span>{info.text}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/40 text-sm">
              {CURRENT_YEAR} Osi Barbier. Alle Rechte vorbehalten.
            </p>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group p-3 rounded-full bg-red-500/5 hover:bg-red-500/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="h-5 w-5 text-red-500/90 group-hover:text-red-500 transition-colors" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}