import React from "react";
import {Text, TouchableOpacity, StyleSheet, SafeAreaView, View} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import {useAuthContext} from "../../providers/AuthContext";
import * as Colors from "../../styles/colors";

export default function UserSetting(props) {
    const {userData, balance} = useAuthContext();
    const {logOut} = useAuthContext();

    const handleSubmit = () => {
        logOut();
        props.navigation.navigate("Login");
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.paragraph}>
                    <Text style={styles.pageTitle}>User Setting</Text>
                </View>
                <View style={styles.paragraph}>
                    <Text style={styles.subTitle}>Current User</Text>
                    <Text style={styles.paraValue}>{userData.email}</Text>
                </View>
                <View style={styles.paragraph}>
                    <Text style={styles.subTitle}>Solana Address</Text>
                    <Text style={styles.paraValue}>{userData.publicAddress}</Text>
                </View>
                <View style={styles.paragraph}>
                    <Text style={styles.subTitle}>Solana Balance</Text>
                    <Text style={styles.paraValue}>{balance} SOL</Text>
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
    pageTitle: {
        fontSize: 28,
        fontWeight: '600',
        color: Colors.CodeGray,
        alignSelf: 'center'
    },
    paragraph: {
        marginBottom: 20
    },
    subTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.Violet
    },
    paraValue: {
        fontSize: 16
    }
})