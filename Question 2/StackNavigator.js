import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AllProductsPage from '../screens/AllProductsPage';
import ProductDetailsPage from '../screens/ProductDetailsPage';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AllProducts">
        <Stack.Screen name="AllProducts" component={AllProductsPage} options={{ title: 'All Products' }} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsPage} options={{ title: 'Product Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
