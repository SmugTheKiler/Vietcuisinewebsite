import { Leaf, BookOpen, Users } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We use high-quality herbs, meats, and spices in every dish.',
  },
  {
    id: 2,
    icon: BookOpen,
    title: 'Authentic Recipes',
    description: 'Traditional Vietnamese flavors prepared with care.',
  },
  {
    id: 3,
    icon: Users,
    title: 'Friendly Service',
    description: 'A welcoming dining experience for families and friends.',
  },
];

export function CustomerExperience() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#8B1E1E]/10 mb-6">
                  <Icon className="w-8 h-8 text-[#8B1E1E]" />
                </div>
                <h3 
                  className="text-2xl text-[#8B1E1E] mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-lg text-[#2B2B2B]/80"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
