import { Phone } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 30, 30, 0.85), rgba(139, 30, 30, 0.85)), url('https://images.unsplash.com/photo-1759892984793-072f8ecac014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwZm9vZCUyMGF0bW9zcGhlcmV8ZW58MXx8fHwxNzczNDU0Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-3xl sm:text-4xl lg:text-5xl text-white mb-8"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Craving Vietnamese Food Tonight?
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            className="bg-white text-[#8B1E1E] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors w-full sm:w-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Order Pickup
          </button>
          <button 
            className="bg-[#D9A441] text-white px-8 py-4 rounded-lg hover:bg-[#C89431] transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
            onClick={() => window.open('tel:7704872494')}
          >
            <Phone size={20} />
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
}
