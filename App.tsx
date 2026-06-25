import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import Navbar from './components/ui/NavBar';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailScreen';
import LoginScreen from './screens/LoginScreen';


const Stack = createNativeStackNavigator();



export default function App() {
    return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="MealDetails" component={DetailsScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>

        <Navbar />
      </View>
    </NavigationContainer>

    );
}