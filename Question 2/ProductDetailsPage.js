import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductDetails from '../components/ProductDetails';
import axios from 'axios';

const ProductDetailsPage = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://your-api-endpoint.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <View style={styles.container}>
      {product ? <ProductDetails product={product} /> : <Text>Loading...</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});

export default ProductDetailsPage;
