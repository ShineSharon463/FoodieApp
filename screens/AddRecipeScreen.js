import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'react-native';

export default function AddRecipeScreen({ route, navigation }) {
  const { setMyRecipes } = route.params;
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) setImage(result.assets[0].uri);
  };

  const saveRecipe = () => {
    const newRecipe = {
      id: Date.now().toString(),
      name,
      image: { uri: image },
      ingredients: ingredients.split(','),
      instructions,
      prepTime: '15 mins',
      servings: 1,
      calories: 200,
      difficulty: 'Easy'
    };
    setMyRecipes((prev) => [...prev, newRecipe]);
    navigation.navigate('My Recipes');
  };

  return (
    <ScrollView style={{ padding: 15 }}>
      <TextInput placeholder="Recipe Name" value={name} onChangeText={setName} style={{ borderBottomWidth: 1, marginBottom: 10 }} />
      <Button title="Upload Image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: '100%', height: 200, marginVertical: 10 }} />}
      <TextInput placeholder="Ingredients (comma separated)" value={ingredients} onChangeText={setIngredients} style={{ borderBottomWidth: 1, marginBottom: 10 }} />
      <TextInput placeholder="Instructions" value={instructions} onChangeText={setInstructions} multiline style={{ borderBottomWidth: 1, marginBottom: 10 }} />
      <Button title="Save Recipe" onPress={saveRecipe} />
    </ScrollView>
  );
}
