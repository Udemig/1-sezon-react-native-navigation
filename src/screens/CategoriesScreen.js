import React from 'react';

import {View, SafeAreaView, Text, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ListProducts from './ListProducts';
import ProductDetail from './ProductDetail';

const Stack=createStackNavigator()

const CategoriesScreen = props => {
    return(
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='ListProducts'>
        <Stack.Screen name='ListProducts' component={ListProducts} />
        <Stack.Screen name='ProductDetail' component={ProductDetail} />
      </Stack.Navigator>
    )
};

export default CategoriesScreen;
