import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Picker } from 'react-native';

const ProductFilter = ({ filters, setFilters, fetchProducts }) => {
  const handleInputChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={filters.category}
        onValueChange={(value) => handleInputChange('category', value)}
        style={styles.input}
      >
        <Picker.Item label="All" value="All" />
        <Picker.Item label="Electronics" value="Electronics" />
        <Picker.Item label="Clothing" value="Clothing" />
      </Picker>
      <TextInput
        placeholder="Company"
        value={filters.company}
        onChangeText={(value) => handleInputChange('company', value)}
        style={styles.input}
      />
      <TextInput
        placeholder="Rating"
        value={filters.rating}
        onChangeText={(value) => handleInputChange('rating', value)}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Price Range"
        value={filters.priceRange}
        onChangeText={(value) => handleInputChange('priceRange', value)}
        style={styles.input}
      />
      <Picker
        selectedValue={filters.availability}
        onValueChange={(value) => handleInputChange('availability', value)}
        style={styles.input}
      >
        <Picker.Item label="All" value="All" />
        <Picker.Item label="In Stock" value="In Stock" />
        <Picker.Item label="Out of Stock" value="Out of Stock" />
      </Picker>
      <Button title="Search" onPress={fetchProducts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16
  },
  input: {
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4
  }
});

export default ProductFilter;
