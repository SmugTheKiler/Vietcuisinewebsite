import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2B2B2B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 
              className="text-2xl text-[#D9A441] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Viet's Cuisine
            </h3>
            <p 
              className="text-white/80 mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Authentic Vietnamese flavors made with fresh ingredients and traditional recipes.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-[#8B1E1E] rounded-full flex items-center justify-center hover:bg-[#6B1616] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#8B1E1E] rounded-full flex items-center justify-center hover:bg-[#6B1616] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-lg text-[#D9A441] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-white/80 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('menu')} className="text-white/80 hover:text-white transition-colors">
                  Menu
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('locations')} className="text-white/80 hover:text-white transition-colors">
                  Locations
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Peachtree City Location */}
          <div>
            <h4 
              className="text-lg text-[#D9A441] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Peachtree City
            </h4>
            <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#D9A441] mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <p>2828 W Highway 54</p>
                  <p>Peachtree City, GA 30269</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#D9A441] mr-2 flex-shrink-0" />
                <a href="tel:7704872494" className="text-white/80 hover:text-white transition-colors text-sm">
                  (770) 487-2494
                </a>
              </div>
              <p className="text-white/80 text-sm">Tue–Sun: 11:30 AM – 9:30 PM</p>
            </div>
          </div>

          {/* Newnan Location */}
          <div>
            <h4 
              className="text-lg text-[#D9A441] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Newnan
            </h4>
            <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#D9A441] mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <p>30 Bullsboro Dr</p>
                  <p>Newnan, GA 30263</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#D9A441] mr-2 flex-shrink-0" />
                <a href="tel:6788573425" className="text-white/80 hover:text-white transition-colors text-sm">
                  (678) 857-3425
                </a>
              </div>
              <p className="text-white/80 text-sm">Tue–Sun: 11:30 AM – 9:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Mail className="w-5 h-5 text-[#D9A441] mr-2" />
            <a 
              href="mailto:vietscuisine@gmail.com"
              className="text-white/80 hover:text-white transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              vietscuisine@gmail.com
            </a>
          </div>
          <p 
            className="text-white/60 text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            © {new Date().getFullYear()} Viet's Cuisine. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
