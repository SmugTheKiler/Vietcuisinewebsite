import { MapPin, Phone, Clock } from 'lucide-react';

const locations = [
  {
    id: 1,
    name: 'Peachtree City Location',
    address: '2828 W Highway 54',
    city: 'Peachtree City, GA 30269',
    phone: '(770) 487-2494',
    hours: 'Tue–Sun: 11:30 AM – 9:30 PM',
    closed: 'Closed Monday',
  },
  {
    id: 2,
    name: 'Newnan Location',
    address: '30 Bullsboro Dr',
    city: 'Newnan, GA 30263',
    phone: '(678) 857-3425',
    hours: 'Tue–Sun: 11:30 AM – 9:00 PM',
    closed: 'Closed Monday',
  },
];

export function Locations() {
  return (
    <section id="locations" className="py-16 sm:py-20 lg:py-24 bg-[#FFF8F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl text-[#8B1E1E] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Locations
          </h2>
          <p 
            className="text-lg text-[#2B2B2B]/80 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Visit us at either of our convenient Georgia locations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div 
              key={location.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Map Placeholder */}
              <div className="aspect-video bg-gray-200 relative">
                <iframe
                  className="w-full h-full"
                  loading="lazy"
                  src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(location.address + ', ' + location.city)}`}
                  style={{ border: 0, filter: 'grayscale(0.3)' }}
                  title={`Map of ${location.name}`}
                />
                <div className="absolute inset-0 bg-[#8B1E1E]/10 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-[#8B1E1E]" />
                </div>
              </div>

              {/* Location Info */}
              <div className="p-6">
                <h3 
                  className="text-2xl text-[#8B1E1E] mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {location.name}
                </h3>

                <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#D9A441] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[#2B2B2B]">{location.address}</p>
                      <p className="text-[#2B2B2B]">{location.city}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-[#D9A441] mr-3 flex-shrink-0" />
                    <a 
                      href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}
                      className="text-[#2B2B2B] hover:text-[#8B1E1E] transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-[#D9A441] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[#2B2B2B]">{location.hours}</p>
                      <p className="text-[#8B1E1E]">{location.closed}</p>
                    </div>
                  </div>
                </div>

                <button 
                  className="mt-6 w-full bg-[#8B1E1E] text-white px-6 py-3 rounded-lg hover:bg-[#6B1616] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  onClick={() => window.open(`tel:${location.phone.replace(/[^0-9]/g, '')}`)}
                >
                  Call Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
