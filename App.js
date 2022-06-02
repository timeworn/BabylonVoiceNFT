import React from 'react';
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import {MagicContextProvider} from "./src/providers/MagicContext";
import {AuthContextProvider} from "./src/providers/AuthContext";
import {LogBox} from "react-native";

LogBox.ignoreLogs([
    "ViewPropTypes will be removed",
    "ColorPropType will be removed",
])

export default function App() {
    return (
        <MagicContextProvider>
            <AuthContextProvider>
                <MainStackNavigator/>
            </AuthContextProvider>
        </MagicContextProvider>
    );
};
