import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {useAuthContext} from "../providers/AuthContext";
import {useWalletModalContext} from "../providers/walletModalContext";
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Register from "../screens/Auth/Register";
import RecordTab from "../screens/RecordTab";
import Login from "../screens/Auth/Login";
import Loader from "../components/common/loader";
import WalletConnectionModal from "../components/common/walletConnection/walletConnectionModal";

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
    const {isLoginLoading} = useAuthContext();
    const {isWalletModalVisible, setIsWalletModalVisible} = useWalletModalContext();
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
                    name='Login'
                    component={Login}
                />
                <Stack.Screen
                    name='Register'
                    component={Register}
                />
                <Stack.Screen
                    name='VoiceRecord'
                    component={RecordTab}
                />
            </Stack.Navigator>
            <Loader isLoading={isLoginLoading}/>
            <WalletConnectionModal isVisible={isWalletModalVisible} setVisible={setIsWalletModalVisible}/>
        </NavigationContainer>
    )
}