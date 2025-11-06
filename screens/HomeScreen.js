import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import CategoryList from '../components/CategoryList';
import RecipeCard from '../components/RecipeCard';
import { categories, recipes } from '../utils/data';

export default function HomeScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredRecipes = selectedCategory
    ? recipes.filter((r) => r.category === selectedCategory)
    : recipes;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
      <CategoryList
        categories={categories}
        maxVisible={4}
        onSelectCategory={setSelectedCategory}
      />
      <View style={{ padding: 10 }}>
        {filteredRecipes?.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onPress={() => navigation.navigate('RecipeDetail', { recipe })}
          />
        ))}
      </View>
    </ScrollView>
  );
}
