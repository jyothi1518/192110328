import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetails = ({ product }) => (
  <View style={styles.card}>
    <Image source={{ uri: product.image }} style={styles.image} />
    <View style={styles.content}>
      <Text style={styles.title}>{product.name}</Text>
      <Text>Company: {product.company}</Text>
      <Text>Category: {product.category}</Text>
      <Text>Price: ${product.price}</Text>
      <Text>Rating: {product.rating} stars</Text>
      <Text>Discount: {product.discount}%</Text>
      <Text>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 16
  },
  content: {
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  }
});

export default ProductDetails;
