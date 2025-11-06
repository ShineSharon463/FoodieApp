import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button } from 'react-native';
import { useCart } from '../context/CartContext';

export default function RecipeDetail({ route }) {
  const { recipe } = route.params;
  const { addToCart } = useCart();

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.title}>{recipe.name}</Text>

      <Text style={styles.subHeading}>Ingredients:</Text>
      {recipe.ingredients.map((item, idx) => (
        <Text key={idx} style={styles.text}>• {item}</Text>
      ))}

      <Text style={styles.subHeading}>Instructions:</Text>
      <Text style={styles.text}>{recipe.instructions}</Text>

      <View style={{ marginVertical: 20 }}>
        <Button title="Add to Cart" color="#ff9500" onPress={() => addToCart(recipe)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15, backgroundColor: '#f6f6f6' },
  image: { width: '100%', height: 200, borderRadius: 10 },
  title: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 },
  subHeading: { fontWeight: 'bold', fontSize: 18, marginTop: 10 },
  text: { fontSize: 16, lineHeight: 22 },
});
