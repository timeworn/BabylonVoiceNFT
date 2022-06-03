import React from "react";
import {Text, TouchableOpacity, StyleSheet, SafeAreaView, View} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import {useAuthContext} from "../../providers/AuthContext";
import {useWeb3SolanaContext} from "../../providers/Web3SolanaContext";

export default function RecordTab(props) {
    const {userData} = useAuthContext();
    const {balance} = useWeb3SolanaContext();
    const {logOut} = useAuthContext();

    const handleSubmit = () => {
        logOut();
        props.navigation.navigate("Login");
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Text>Current User</Text>
                    <Text>{userData.email}</Text>
                </View>
                <View>
                    <Text>Solana Balance</Text>
                    <Text>{balance} SOL</Text>
                </View>
                <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                    <LinearGradient
                        colors={['#F92BFA', '#0C0CF8']}
                        start={{x: 0.0, y: 1.0}}
                        end={{x: 1.0, y: 1.0}}
                        style={styles.gradient(true)}
                    >
                        <Text style={styles.submitText}>Logout</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
      margin: 37
    },
    gradient: (submitReady) => {
        const opacityVal = submitReady ? 1 : 0.3;
        return {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            opacity: opacityVal
        }
    },
    submitBtn: {
        height: 48
    },
})