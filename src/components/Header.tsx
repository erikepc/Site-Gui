import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const scrollToSection = (sectionId: string) => {
     const element = document.getElementById(sectionId);
     if (element) {
       element.scrollIntoView({ behavior: 'smooth' });
     }
     setIsMenuOpen(false);
   };

   return (
     <header className={`fixed w-full z-50 transition-all duration-500 ${
       isScrolled 
         ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-blue-100/20' 
         : 'bg-white/80 backdrop-blur-md'
     }`}>
      <div className="container mx-auto px-4 md:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo mini.jpg" 
              alt="Guilherme Segura - Fisioterapia Especializada em Joelho" 
              className="h-8 md:h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
            >
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
            >
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('specialties')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
            >
              Especialidades
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('treatments')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
            >
              Tratamentos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
            >
              Depoimentos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
            >
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600 bg-blue-50/50 backdrop-blur-sm px-3 py-2 rounded-full">
              <Phone className="w-4 h-4" />
              <span>(14) 98179-1249</span>
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Agendar Consulta
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-blue-50/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-blue-100/30 bg-white/90 backdrop-blur-lg rounded-lg">
            <nav className="flex flex-col space-y-3 pt-4 px-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('specialties')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Especialidades
              </button>
              <button 
                onClick={() => scrollToSection('treatments')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Tratamentos
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Contato
              </button>
              <div className="pt-3 border-t border-blue-100/30">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <Phone className="w-4 h-4" />
                  <span>(14) 98179-1249</span>
                </div>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                >
                  Agendar Consulta
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;