const dishes = [
  {
    id: 1,
    name: 'Pho',
    description: 'Rich slow-simmered broth served with rice noodles, herbs, and beef.',
    image: 'https://images.unsplash.com/photo-1701480253822-1842236c9a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcGhvJTIwYm93bCUyMHNvdXB8ZW58MXx8fHwxNzczNDU0NjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    name: 'Fresh Spring Rolls',
    description: 'Rice paper rolls filled with herbs, vermicelli, and shrimp.',
    image: 'https://images.unsplash.com/photo-1656945843375-207bb6e47750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwZnJlc2glMjBzcHJpbmclMjByb2xsc3xlbnwxfHx8fDE3NzM0NTQ2ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    name: 'Egg Rolls',
    description: 'Crispy fried rolls filled with seasoned pork and vegetables.',
    image: 'https://images.unsplash.com/photo-1544601284-7fe39c93d4d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwZWdnJTIwcm9sbHMlMjBmcmllZHxlbnwxfHx8fDE3NzM0NTQ2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    name: 'Vermicelli Bowls',
    description: 'Rice noodles topped with grilled meats and fresh vegetables.',
    image: 'https://images.unsplash.com/photo-1745817078506-bfc70df458b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwdmVybWljZWxsaSUyMGJvd2wlMjBub29kbGVzfGVufDF8fHx8MTc3MzQ1NDY4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    name: 'Combination Rice Plates',
    description: 'Steamed rice served with grilled meats and pickled vegetables.',
    image: 'https://images.unsplash.com/photo-1680084581642-17cf51ad7760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwcmljZSUyMHBsYXRlJTIwZ3JpbGxlZCUyMG1lYXR8ZW58MXx8fHwxNzczNDU0Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    name: 'Vietnamese Coffee',
    description: 'Traditional strong coffee with sweet condensed milk.',
    image: 'https://images.unsplash.com/photo-1558722141-76ef6ca013be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwaWNlZCUyMGNvZmZlZXxlbnwxfHx8fDE3NzM0MDMxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function FeaturedDishes() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl text-[#8B1E1E] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Featured Dishes
          </h2>
          <p 
            className="text-lg text-[#2B2B2B]/80 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Explore our signature Vietnamese dishes made with authentic flavors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div 
              key={dish.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 
                  className="text-xl sm:text-2xl text-[#8B1E1E] mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {dish.name}
                </h3>
                <p 
                  className="text-[#2B2B2B]/80"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
