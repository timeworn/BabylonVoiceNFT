import React from 'react';
import {LogBox} from "react-native";
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import {MagicContextProvider} from "./src/providers/MagicContext";
import {AuthContextProvider} from "./src/providers/AuthContext";
import {Web3SolanaContextProvider} from "./src/providers/Web3SolanaContext";

LogBox.ignoreLogs([
    "ViewPropTypes will be removed",
    "ColorPropType will be removed",
])

export default function App() {
    return (
        <MagicContextProvider>
            <AuthContextProvider>
                <Web3SolanaContextProvider>
                    <MainStackNavigator/>
                </Web3SolanaContextProvider>
            </AuthContextProvider>
        </MagicContextProvider>
    );
};
