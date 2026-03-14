export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1701480253822-1842236c9a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcGhvJTIwYm93bCUyMHNvdXB8ZW58MXx8fHwxNzczNDU0NjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Authentic Vietnamese Cuisine
        </h1>
        <p 
          className="text-lg sm:text-xl md:text-2xl text-white/95 mb-10 max-w-2xl mx-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Traditional Vietnamese dishes made with fresh ingredients and rich flavors.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('menu')}
            className="bg-[#8B1E1E] text-white px-8 py-4 rounded-lg hover:bg-[#6B1616] transition-colors w-full sm:w-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            View Menu
          </button>
          <button 
          onClick={() => scrollToSection('locations')}
            className="bg-white text-[#8B1E1E] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors w-full sm:w-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Book a Table
          </button>
        </div>
      </div>
    </section>
  );
}
