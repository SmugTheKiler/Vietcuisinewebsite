export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#FFF8F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1710186012479-d79e9d2a7065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwY3Vpc2luZSUyMGF1dGhlbnRpYyUyMGRpc2hlc3xlbnwxfHx8fDE3NzM0NTQ2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Vietnamese cuisine"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl text-[#8B1E1E] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              About Viet's Cuisine
            </h2>
            <div 
              className="space-y-4 text-lg text-[#2B2B2B]/80"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <p>
                Viet's Cuisine is dedicated to bringing authentic Vietnamese flavors to our community. 
                Our dishes are prepared using fresh ingredients, traditional recipes, and time-honored 
                cooking techniques.
              </p>
              <p>
                From comforting bowls of pho to flavorful noodle dishes and fresh herbs, every meal 
                reflects the rich culinary traditions of Vietnam.
              </p>
              <p>
                We take pride in serving our community with warm hospitality and genuine Vietnamese 
                flavors that transport you to the streets of Saigon with every bite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
