import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import axios from 'axios';

const AllProductsPage = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: 'All',
    company: '',
    rating: '',
    priceRange: '',
    availability: 'All'
  });

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://your-api-endpoint.com/products', { params: filters });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderItem = ({ item }) => (
    <ProductCard product={item} onPress={() => navigation.navigate('ProductDetails', { productId: item.id })} />
  );

  return (
    <View style={styles.container}>
      <ProductFilter filters={filters} setFilters={setFilters} fetchProducts={fetchProducts} />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});

export default AllProductsPage;
