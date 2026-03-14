import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
const FORMSPREE_URL = 'https://formspree.io/f/xojklkrn';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl text-[#8B1E1E] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Contact Us
          </h2>
          <p 
            className="text-lg text-[#2B2B2B]/80 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#FFF8F1] rounded-lg p-8 shadow-md">
<form
action={FORMSPREE_URL} method="POST"
  className="space-y-6"
>
  <div>
    <label 
      htmlFor="name" 
      className="block text-[#2B2B2B] mb-2"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      required
      className="w-full px-4 py-3 rounded-lg border border-[#D9A441]/30 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E] bg-white"
      style={{ fontFamily: 'Inter, sans-serif' }}
    />
  </div>

  <div>
    <label 
      htmlFor="email" 
      className="block text-[#2B2B2B] mb-2"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      required
      className="w-full px-4 py-3 rounded-lg border border-[#D9A441]/30 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E] bg-white"
      style={{ fontFamily: 'Inter, sans-serif' }}
    />
  </div>

  <div>
    <label 
      htmlFor="phone" 
      className="block text-[#2B2B2B] mb-2"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      Phone
    </label>
    <input
      type="tel"
      id="phone"
      name="phone"
      className="w-full px-4 py-3 rounded-lg border border-[#D9A441]/30 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E] bg-white"
      style={{ fontFamily: 'Inter, sans-serif' }}
    />
  </div>

  <div>
    <label 
      htmlFor="message" 
      className="block text-[#2B2B2B] mb-2"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      Message
    </label>
    <textarea
      id="message"
      name="message"
      required
      rows={5}
      className="w-full px-4 py-3 rounded-lg border border-[#D9A441]/30 focus:outline-none focus:ring-2 focus:ring-[#8B1E1E] bg-white resize-none"
      style={{ fontFamily: 'Inter, sans-serif' }}
    />
  </div>

  <button
    type="submit"
    className="w-full bg-[#8B1E1E] text-white px-8 py-4 rounded-lg hover:bg-[#6B1616] transition-colors"
    style={{ fontFamily: 'Inter, sans-serif' }}
  >
    Send Message
  </button>
</form>          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 
                className="text-2xl text-[#8B1E1E] mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Get In Touch
              </h3>
              <div className="space-y-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-[#D9A441] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[#2B2B2B]/60 text-sm mb-1">Email</p>
                    <a 
                      href="mailto:vietscuisine@gmail.com"
                      className="text-[#2B2B2B] hover:text-[#8B1E1E] transition-colors"
                    >
                      vietscuisine@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-[#D9A441] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[#2B2B2B]/60 text-sm mb-1">Peachtree City Phone</p>
                    <a 
                      href="tel:7704872494"
                      className="text-[#2B2B2B] hover:text-[#8B1E1E] transition-colors block"
                    >
                      (770) 487-2494
                    </a>
                    <p className="text-[#2B2B2B]/60 text-sm mt-3 mb-1">Newnan Phone</p>
                    <a 
                      href="tel:6788573425"
                      className="text-[#2B2B2B] hover:text-[#8B1E1E] transition-colors block"
                    >
                      (678) 857-3425
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#D9A441] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[#2B2B2B]/60 text-sm mb-1">Peachtree City Location</p>
                    <p className="text-[#2B2B2B]">2828 W Highway 54</p>
                    <p className="text-[#2B2B2B]">Peachtree City, GA 30269</p>
                    
                    <p className="text-[#2B2B2B]/60 text-sm mt-3 mb-1">Newnan Location</p>
                    <p className="text-[#2B2B2B]">30 Bullsboro Dr</p>
                    <p className="text-[#2B2B2B]">Newnan, GA 30263</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFF8F1] rounded-lg p-6">
              <h4 
                className="text-xl text-[#8B1E1E] mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Business Hours
              </h4>
              <div 
                className="space-y-2 text-[#2B2B2B]/80"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <p>Tuesday – Sunday: 11:30 AM – 9:00 PM</p>
                <p className="text-[#8B1E1E]">Closed Monday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
