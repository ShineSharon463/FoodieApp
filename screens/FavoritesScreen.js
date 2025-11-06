import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import RecipeCard from '../components/RecipeCard';

export default function FavoritesScreen({ route, navigation }) {
  const { favoriteRecipes = [] } = route?.params || {}; // ✅ Prevent crash

  return (
    <View style={styles.container}>
      {favoriteRecipes.length === 0 ? (
        <Text style={styles.empty}>No favorites added yet!</Text>
      ) : (
        <FlatList
          data={favoriteRecipes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <RecipeCard
              recipe={item}
              onPress={() => navigation.navigate('Recipe Detail', { recipe: item })}
              isFavorite={true}
              onToggleFavorite={() => {}}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // ✅ Center content vertically
    alignItems: 'center', // ✅ Center horizontally
    backgroundColor: '#f6f6f6',
    padding: 10,
  },
  empty: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
});
