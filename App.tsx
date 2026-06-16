import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailScreen';


const Stack = createNativeStackNavigator();

const linking = {
    prefixes: ["ItalianMeals://"],
    config: {
        screens: {
            Home: "home",
            Dettagli: "details/:id",
        },
    },
}



export default function App() {
    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>



    );
}