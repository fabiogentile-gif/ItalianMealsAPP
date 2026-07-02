import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import * as Linking from "expo-linking";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailScreen';
import LoginScreen from './screens/LoginScreen';
import UserProfileScreen from './screens/UserProfileScreen';

import Navbar from './components/ui/NavBar';

import { FavoritesProvider } from './context/FavoritesContext';
import { AuthProvider } from './context/UserContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();

// const linking = {
//   prefixes: [Linking.createURL("/"), "italianmeals://"],
//   config: {
//     screens: {
//       Auth: {
//         screens: {
//           Login: "login"
//         },
//       },
//       App: {
//         screens: {
//           Home: "meals",
//           Details: "meal/:id",
//         }
//       }

//     },
//   },
// };

const linking = {
  prefixes: [Linking.createURL("/"), "italianmeals://"],
  config: {
    screens: {
      Home: "Meals",
      Details: "Meal/:id",
      Login: "Login",
      UserScreen: "Settings",
    }
  }
};




export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <FavoritesProvider>
          <NavigationContainer linking={linking}>
            <View style={{ flex: 1 }}>
              <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="MealDetails" component={DetailsScreen} options={{ title: "Items" }} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="UserScreen" component={UserProfileScreen} />
              </Stack.Navigator>

              <Navbar />
            </View>
          </NavigationContainer>
        </FavoritesProvider>
      </AuthProvider>
    </SafeAreaProvider>

  );
}