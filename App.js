import React from 'react';
import {LogBox} from "react-native";
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import {MagicContextProvider} from "./src/providers/MagicContext";
import {AuthContextProvider} from "./src/providers/AuthContext";
import {WalletContextProvider} from "./src/providers/walletModalContext";

LogBox.ignoreLogs([
    "ViewPropTypes will be removed",
    "ColorPropType will be removed",
])

export default function App() {
    return (
        <MagicContextProvider>
            <AuthContextProvider>
                <WalletContextProvider>
                    <MainStackNavigator/>
                </WalletContextProvider>
            </AuthContextProvider>
        </MagicContextProvider>
    );
};
