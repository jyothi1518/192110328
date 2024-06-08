import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ product, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.card}>
    <Image source={{ uri: product.image }} style={styles.image} />
    <View style={styles.content}>
      <Text style={styles.title}>{product.name}</Text>
      <Text>{product.company} - {product.category}</Text>
      <Text>${product.price} - {product.rating} stars</Text>
      <Text>Discount: {product.discount}% - {product.availability ? 'In Stock' : 'Out of Stock'}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden'
  },
  image: {
    width: 100,
    height: 100
  },
  content: {
    padding: 16,
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ProductCard;
