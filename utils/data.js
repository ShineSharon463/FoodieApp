// utils/data.js

export const categories = [
  { id: 1, name: 'Quick Meals' },
  { id: 2, name: 'Vegan' },
  { id: 3, name: 'Seafood' },
  { id: 4, name: 'My Food' },
  { id: 5, name: 'Desserts' },
];

// Sample recipe data
export const recipes = [
  {
    id: 1,
    name: 'Spaghetti Bolognese',
    category: 'Quick Meals',
    image: require('../assets/images/spaghetti.jpg'),
    ingredients: [
      'Spaghetti',
      'Minced Meat',
      'Tomato Sauce',
      'Onion',
      'Garlic',
    ],
    instructions:
      'Boil spaghetti. Cook meat with sauce. Mix together and serve hot.',
    prepTime: '30 mins',
    servings: 2,
    calories: 450,
    difficulty: 'Medium',
  },
  {
    id: 2,
    name: 'Cheese Burger',
    category: 'My Food',
    image: require('../assets/images/burger.jpg'),
    ingredients: ['Bun', 'Cheese', 'Lettuce', 'Beef Patty', 'Tomato'],
    instructions:
      'Grill patty, assemble burger with cheese and vegetables, and serve.',
    prepTime: '20 mins',
    servings: 1,
    calories: 550,
    difficulty: 'Easy',
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    category: 'Seafood',
    image: require('../assets/images/salmon.jpg'),
    ingredients: ['Salmon', 'Lemon', 'Garlic', 'Olive Oil', 'Pepper'],
    instructions:
      'Marinate salmon with lemon, garlic, and pepper. Grill until golden.',
    prepTime: '25 mins',
    servings: 2,
    calories: 320,
    difficulty: 'Medium',
  },
  {
    id: 4,
    name: 'Vegan Salad Bowl',
    category: 'Vegan',
    image: require('../assets/images/salad.jpg'),
    ingredients: ['Lettuce', 'Tomato', 'Cucumber', 'Avocado', 'Olive Oil'],
    instructions:
      'Mix all vegetables and drizzle olive oil. Serve fresh and chilled.',
    prepTime: '10 mins',
    servings: 1,
    calories: 180,
    difficulty: 'Easy',
  },
  {
    id: 5,
    name: 'Chocolate Cake',
    category: 'Desserts',
    image: require('../assets/images/cake.jpg'),
    ingredients: [
      'Flour',
      'Cocoa Powder',
      'Sugar',
      'Eggs',
      'Butter',
      'Milk',
    ],
    instructions:
      'Mix all ingredients and bake at 180°C for 30 minutes. Serve cool.',
    prepTime: '45 mins',
    servings: 4,
    calories: 600,
    difficulty: 'Hard',
  },
];
