import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useCart } from '../context/CartContext';

export default function CartScreen() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.name}>{item.name}</Text>
                <Button title="Remove" color="red" onPress={() => removeFromCart(item.id)} />
              </View>
            )}
          />
          <Button title="Clear Cart" color="#ff9500" onPress={clearCart} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // ✅ centers vertically
    alignItems: 'center',     // ✅ centers horizontally
    backgroundColor: '#fff',
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    width: '100%',
  },
  name: { fontSize: 16 },
  empty: { textAlign: 'center', rfontSize: 18, color: '#777' },
});
