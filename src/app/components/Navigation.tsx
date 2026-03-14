import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF8F1] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 
              className="text-2xl sm:text-3xl text-[#8B1E1E] cursor-pointer"
              style={{ fontFamily: 'Playfair Display, serif' }}
              onClick={() => scrollToSection('hero')}
            >
              Viet's Cuisine
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-[#2B2B2B] hover:text-[#8B1E1E] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Home
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-[#2B2B2B] hover:text-[#8B1E1E] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Menu
            </button>
            <button onClick={() => scrollToSection('locations')} className="text-[#2B2B2B] hover:text-[#8B1E1E] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Locations
            </button>
            <button onClick={() => scrollToSection('about')} className="text-[#2B2B2B] hover:text-[#8B1E1E] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-[#2B2B2B] hover:text-[#8B1E1E] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Contact
            </button>
            
            {/* CTA Button */}
            <button className="bg-[#8B1E1E] text-white px-6 py-3 rounded-lg hover:bg-[#6B1616] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Order Pickup
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#2B2B2B] hover:text-[#8B1E1E] transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF8F1] border-t border-[#D9A441]/20">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left py-2 text-[#2B2B2B] hover:text-[#8B1E1E] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Home
            </button>
            <button onClick={() => scrollToSection('menu')} className="block w-full text-left py-2 text-[#2B2B2B] hover:text-[#8B1E1E] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Menu
            </button>
            <button onClick={() => scrollToSection('locations')} className="block w-full text-left py-2 text-[#2B2B2B] hover:text-[#8B1E1E] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Locations
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-[#2B2B2B] hover:text-[#8B1E1E] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-[#2B2B2B] hover:text-[#8B1E1E] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Contact
            </button>
            <button className="w-full bg-[#8B1E1E] text-white px-6 py-3 rounded-lg hover:bg-[#6B1616] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Order Pickup
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
