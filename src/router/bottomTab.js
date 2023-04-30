import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProfileStack from './ProfileStack';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTab=()=>{
    return(
        <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor:'#eee'
          }
        }}
        initialRouteName="Home">
        <Tab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  fontSize: focused ? 16 : 14,
                  color: focused ? 'red' : 'gray',
                }}>
                Anasayfa
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'home' : 'home-outline'}
                size={focused ? 24 : 20}
                color={focused ? 'red' : 'gray'}
              />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  fontSize: focused ? 16 : 14,
                  color: focused ? 'red' : 'gray',
                }}>
                Ürünler
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'list-circle' : 'list-circle-outline'}
                size={focused ? 24 : 20}
                color={focused ? 'red' : 'gray'}
              />
            ),
          }}
          name="ProductsStack"
          component={CategoriesScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  fontSize: focused ? 16 : 14,
                  color: focused ? 'red' : 'gray',
                }}>
                Profil
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'person-circle' : 'person-circle-outline'}
                size={focused ? 24 : 20}
                color={focused ? 'red' : 'gray'}
              />
            ),
          }}
          name="ProfileStack"
          component={ProfileStack}
        />
      </Tab.Navigator>
    )
}

export default BottomTab