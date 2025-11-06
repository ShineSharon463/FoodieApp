import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import RecipeCard from '../components/RecipeCard';

export default function MyRecipesScreen({ navigation }) {
  const [myRecipes, setMyRecipes] = useState([]);

  return (
    <View style={styles.container}>
      <Button title="Add New Recipe" onPress={() => navigation.navigate('Add Recipe', { setMyRecipes })} />
      {myRecipes.length === 0 ? (
        <Text style={styles.empty}>No recipes yet. Add one!</Text>
      ) : (
        <FlatList
          data={myRecipes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <RecipeCard
              recipe={item}
              onPress={() => navigation.navigate('Recipe Detail', { recipe: item })}
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
    justifyContent: 'center', // ✅ centers vertically
    alignItems: 'center',     // ✅ centers horizontally
    backgroundColor: '#f6f6f6',
    padding: 10,
  },
  empty: {
    marginTop: 20,
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
});
