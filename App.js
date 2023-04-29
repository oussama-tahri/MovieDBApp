import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Search from './Components/Search';
import FilmDetail from './Components/FilmDetails'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Search">
                <Stack.Screen name="Search" component={Search}/>
                <Stack.Screen name="FilmDetail" component={FilmDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}