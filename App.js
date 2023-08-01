import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/Screens/Home';
import LoginScreen from './src/Screens/Login';
import MealsScreen from './src/Screens/Meals';
import MealScreen from './src/Screens/Meal';
import FoodsScreen from './src/Screens/Foods';
import FoodScreen from './src/Screens/Food';


const Stack = createStackNavigator();

export default function App() {
  const screens = [
    { name: "Login", component: LoginScreen },
    { name: "Home", component: HomeScreen },
    { name: "Meals", component: MealsScreen },
    { name: "Meal", component: MealScreen },
    { name: "Foods", component: FoodsScreen },
    { name: "Food", component: FoodScreen }
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {screens.map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
      <StatusBar style="auto" hidden={true} />
    </NavigationContainer>
  );
}
