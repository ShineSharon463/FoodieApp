export const categories = [
  "Breakfast", "Lunch", "Dinner", "Snacks", "Desserts",
  "Beverages", "Healthy", "Quick Meals", "Vegan", "Seafood", "My Food"
];

export const recipes = [
  {
    id: '1',
    name: 'Spaghetti Bolognese',
    category: 'Dinner',
    image: require('../assets/images/pasta.jpg'),
    ingredients: ['Spaghetti', 'Minced Meat', 'Tomato Sauce', 'Onion', 'Garlic'],
    instructions: 'Boil spaghetti. Cook meat with sauce. Mix together and serve hot.',
    prepTime: '30 mins',
    servings: 2,
    calories: 450,
    difficulty: 'Medium'
  },
  {
    id: '2',
    name: 'Cheese Burger',
    category: 'Lunch',
    image: require('../assets/images/burger.jpg'),
    ingredients: ['Bun', 'Beef Patty', 'Cheese', 'Lettuce', 'Tomato'],
    instructions: 'Grill patty, assemble burger with ingredients.',
    prepTime: '20 mins',
    servings: 1,
    calories: 600,
    difficulty: 'Easy'
  },
];
