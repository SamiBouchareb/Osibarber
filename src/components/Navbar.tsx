import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Logo.png';
import logoWhite from '../assets/Logowhite.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  const openBooking = () => {
    window.open('https://www.treatwell.de/ort/osi-barbier-1/?utm_source=google&utm_medium=rwg&hl=de-DE&gei=mrBUZ8PqCvKExc8PgZ-D8Qc', '_blank');
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <img 
              src={isScrolled ? logo : logoWhite}
              alt="Osi Barbier Logo" 
              className={`transition-all duration-500 ${
                isScrolled ? 'h-16' : 'h-20'
              }`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-500 transition-colors`}
            >
              Startseite
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-500 transition-colors`}
            >
              Leistungen
            </button>
            <button 
              onClick={() => scrollToSection('hallOfFame')}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-500 transition-colors`}
            >
              Hall of Fame
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-500 transition-colors`}
            >
              Kontakt
            </button>
            <button 
              onClick={openBooking}
              className={`
                px-7 py-3 rounded-full font-medium tracking-wide
                transition-all duration-300 transform
                ${isScrolled
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-white text-red-600 hover:bg-red-600 hover:text-white'
                }
                hover:shadow-lg active:scale-95
              `}
            >
              Jetzt Buchen
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMobileMenuOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden bg-white mt-2 rounded-lg shadow-lg`}
        >
          <div className="py-2">
            <button 
              onClick={() => scrollToSection('home')}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Startseite
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Leistungen
            </button>
            <button 
              onClick={() => scrollToSection('hallOfFame')}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Hall of Fame
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Kontakt
            </button>
            <div className="px-4 py-2">
              <button 
                onClick={openBooking}
                className="bg-red-600 text-white w-full py-3.5 rounded-full font-medium 
                  transition-all duration-300 hover:bg-red-700 hover:shadow-lg 
                  active:transform active:scale-97 shadow-md"
              >
                Jetzt Buchen
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}