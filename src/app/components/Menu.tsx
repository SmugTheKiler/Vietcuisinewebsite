const menuCategories = [
  {
    id: 1,
    name: 'Appetizers',
    items: ['Fresh Spring Rolls', 'Egg Rolls', 'Crispy Wontons', 'Chicken Wings'],
  },
  {
    id: 2,
    name: 'Pho (Noodle Soup)',
    items: ['Pho with Beef', 'Pho with Chicken', 'Pho with Seafood', 'Vegetarian Pho'],
  },
  {
    id: 3,
    name: 'Vermicelli Bowls',
    items: ['Grilled Pork Vermicelli', 'Grilled Chicken Vermicelli', 'Spring Roll Vermicelli', 'Combination Vermicelli'],
  },
  {
    id: 4,
    name: 'Rice Plates',
    items: ['Grilled Pork Rice Plate', 'Grilled Chicken Rice Plate', 'Combination Rice Plate', 'Vegetarian Rice Plate'],
  },
  {
    id: 5,
    name: 'Drinks',
    items: ['Vietnamese Iced Coffee', 'Thai Iced Tea', 'Coconut Water', 'Fresh Lemonade'],
  },
];

export function Menu() {
  return (
    <section id="menu" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl text-[#8B1E1E] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Menu
          </h2>
          <p 
            className="text-lg text-[#2B2B2B]/80 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A selection of our authentic Vietnamese dishes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {menuCategories.map((category) => (
            <div 
              key={category.id}
              className="bg-[#FFF8F1] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 
                className="text-2xl text-[#8B1E1E] mb-4 pb-2 border-b-2 border-[#D9A441]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, index) => (
                  <li 
                    key={index}
                    className="text-[#2B2B2B]/80 flex items-start"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="text-[#D9A441] mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            className="bg-[#8B1E1E] text-white px-8 py-4 rounded-lg hover:bg-[#6B1616] transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
