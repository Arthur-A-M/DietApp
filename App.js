import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/Screens/Home';
import LoginScreen from './src/Screens/Login';
import MealsScreen from './src/Screens/Meals';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={LoginScreen} />
        <Stack.Screen name="Settings" component={MealsScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" hidden={true} />
    </NavigationContainer>
  );
}
