const menuCategories = [
  {
    id: 1,
    name: "Appetizers",
    items: [
      "Fresh Spring Rolls (Shrimp)",
      "BBQ Pork Spring Rolls",
      "Vietnamese Crispy Egg Rolls",
      "Coconut Shrimp",
      "Vietnamese Chicken Wings"
    ]
  },
  {
    id: 2,
    name: "Salads",
    items: [
      "Mango Salad",
      "Papaya Salad (Som Tum)",
      "Cucumber Salad",
      "Shrimp & Herb Salad",
      "Chicken Cabbage Salad"
    ]
  },
  {
    id: 3,
    name: "Vegetarian",
    items: [
      "Vegetarian Spring Rolls",
      "Vegetarian Pho (Tofu & Vegetables)",
      "Vegetarian Vermicelli Bowl",
      "Vegetarian Rice Plate",
      "Vegetarian Stir Fry Noodles"
    ]
  },
  {
    id: 4,
    name: "Pho (Beef Noodle Soup)",
    items: [
      "House Special Pho",
      "Pho with Rare Steak",
      "Pho with Brisket",
      "Pho with Meatballs",
      "Pho with Rare Steak & Brisket"
    ]
  },
  {
    id: 5,
    name: "Chicken Pho",
    items: [
      "Classic Chicken Pho",
      "Chicken Pho with Flat Rice Noodles",
      "Chicken Pho with Vermicelli",
      "Chicken Pho with Clear Noodles",
      "Chicken Pho with Extra Herbs"
    ]
  },
  {
    id: 6,
    name: "Seafood Noodle Soup",
    items: [
      "Seafood Pho",
      "Shrimp Noodle Soup",
      "Seafood Egg Noodle Soup",
      "Seafood Rice Noodle Soup",
      "House Special Seafood Combo Soup"
    ]
  },
  {
    id: 7,
    name: "Vermicelli Bowls",
    items: [
      "Grilled Pork Vermicelli",
      "Grilled Chicken Vermicelli",
      "BBQ Beef Vermicelli",
      "Grilled Shrimp Vermicelli",
      "Combination Vermicelli Bowl"
    ]
  },
  {
    id: 8,
    name: "Rice Plates",
    items: [
      "Grilled Pork Rice Plate",
      "Lemongrass Chicken Rice Plate",
      "BBQ Beef Rice Plate",
      "Grilled Shrimp Rice Plate",
      "Combination Rice Plate"
    ]
  },
  {
    id: 9,
    name: "Kids Menu",
    items: [
      "Kids BBQ Pork Rice",
      "Kids Lemongrass Chicken Rice",
      "Kids BBQ Beef Rice",
      "Kids Chicken Pho",
      "Kids Meatball Pho"
    ]
  },
  {
    id: 10,
    name: "Desserts",
    items: [
      "Mango Sticky Rice",
      "Sweet Sticky Rice",
      "Fried Banana Dessert",
      "Coconut Jelly",
      "Vietnamese Flan"
    ]
  },
  {
    id: 11,
    name: "Drinks",
    items: [
      "Vietnamese Iced Coffee",
      "Thai Iced Tea",
      "Fresh Lemonade",
      "Coconut Juice",
      "Mango Smoothie"
    ]
  }
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
            Top 5 dishes per category of our authentic Vietnamese dishes
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
          onClick={() => window.open('https://nebula.wsimg.com/fdb297b748cd4ba0fa3e6d8424660539?AccessKeyId=F612F19B47BEF3A4A62F&disposition=0&alloworigin=1')}
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
