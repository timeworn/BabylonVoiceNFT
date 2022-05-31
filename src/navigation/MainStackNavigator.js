import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Register from "../screens/Auth/Register";

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName='Home'
            >
                <Stack.Screen
                    name='Home'
                    component={Home}
                />
                <Stack.Screen
                    name='Onboarding'
                    component={Onboarding}
                />
                <Stack.Screen
                    name='Register'
                    component={Register}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}