import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductList from "../screens/ProductList";
import FavorisList from "../screens/FavorisList";
import PanierList from "../screens/PanierList";


/**
 * create object Bottom Tab Navigator
 */

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'ProductList') {
            iconName = 'ios-home'
          } else if (route.name === 'FavorisList') {
            iconName = 'ios-star'
          } else if (route.name === 'PanierList') {
            iconName = 'ios-list'
          }

          // create icon in Bottom Tab Navigator
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      {/* define components use in Bottom Tab Navigator */}  
      <Tab.Screen name="ProductList" component={ProductList} />
      <Tab.Screen name="FavorisList" component={FavorisList} />
      <Tab.Screen name="PanierList" component={PanierList} />
    </Tab.Navigator>
  );
}

export default AppNavigator;