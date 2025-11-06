import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';

const CategoryList = ({ categories, maxVisible = 4, onSelectCategory }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const visibleCategories = categories.slice(0, maxVisible);
  const extraCategories = categories.slice(maxVisible);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {visibleCategories.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={styles.category}
            onPress={() => onSelectCategory(cat.name)}
          >
            <Text style={styles.text}>{cat.name}</Text>
          </TouchableOpacity>
        ))}

        {extraCategories.length > 0 && (
          <TouchableOpacity
            style={[styles.category, styles.moreBtn]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.text}>More</Text>
          </TouchableOpacity>
        )}
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>More Categories</Text>
            <FlatList
              data={extraCategories}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    onSelectCategory(item.name);
                  }}
                >
                  <Text style={styles.modalItem}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.close}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, paddingHorizontal: 10 },
  category: { backgroundColor: '#ff9500', borderRadius: 20, paddingHorizontal: 15, paddingVertical: 8 },
  text: { color: 'white', fontWeight: 'bold' },
  moreBtn: { backgroundColor: '#ffa733' },
  modal: { flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.4)' },
  modalContent: { backgroundColor: 'white', margin: 20, borderRadius: 10, padding: 20 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  modalItem: { paddingVertical: 8, fontSize: 16 },
  close: { color: 'blue', textAlign: 'center', marginTop: 10 },
});

export default CategoryList;
