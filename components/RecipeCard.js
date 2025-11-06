import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function RecipeCard({ recipe, onPress, onToggleFavorite, isFavorite }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image source={recipe.image} style={styles.image} />
        <Text style={styles.name}>{recipe.name}</Text>
        <TouchableOpacity onPress={onToggleFavorite} style={styles.heart}>
          <AntDesign name={isFavorite ? 'heart' : 'hearto'} size={22} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginVertical: 10,
    padding: 10,
    elevation: 3
  },
  image: { width: '100%', height: 150, borderRadius: 10 },
  name: { fontWeight: 'bold', fontSize: 18, marginVertical: 5 },
  heart: { position: 'absolute', top: 10, right: 15 }
});
