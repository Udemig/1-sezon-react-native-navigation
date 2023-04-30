import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/stackScreens/HomeScreen';
import CategoriesScreen from '../screens/stackScreens/CategoriesScreen';
import ProfileScreen from '../screens/stackScreens/ProfileScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'blue'},
        headerTintColor: '#fff',
      }}
      initialRouteName="StackHome">
      <Stack.Screen
        options={{title: 'Anasayfa'}}
        name="StackHome"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{title: 'Kategoriler'}}
        name="StackCategories"
        component={CategoriesScreen}
      />
      <Stack.Screen
        options={{title: 'Profil'}}
        name="StackProfile"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
