import React, {useState} from "react";
import {Text, TouchableOpacity, StyleSheet, SafeAreaView, View, TextInput} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import {useAuthContext} from "../../providers/AuthContext";
import * as Colors from "../../styles/colors";

export default function UserSetting(props) {
    const {userData, balance} = useAuthContext();
    const {logOut, handleTransaction} = useAuthContext();
    const [destinationAddress, setDestinationAddress] = useState("");
    const [sendAmount, setSendAmount] = useState("");

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
            <View style={styles.container}>
                <View style={styles.paragraph}>
                    <Text style={styles.subTitle}>Send Transaction</Text>
                    <LinearGradient
                        colors={['#e53dff', '#6171ff']}
                        start={{x: 0.0, y: 1.0}}
                        end={{x: 1.0, y: 1.0}}
                        style={styles.linearGradientStyle}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => setDestinationAddress(value)}
                            value={destinationAddress}
                            placeholder="Destination Address"
                        />
                    </LinearGradient>
                    <LinearGradient
                        colors={['#e53dff', '#6171ff']}
                        start={{x: 0.0, y: 1.0}}
                        end={{x: 1.0, y: 1.0}}
                        style={styles.linearGradientStyle}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => setSendAmount(value)}
                            value={sendAmount}
                            placeholder="Amount in LAMPORTS"
                        />
                    </LinearGradient>
                    <TouchableOpacity style={styles.signTransactionBtn} onPress={handleTransaction(destinationAddress, sendAmount)}>
                        <LinearGradient
                            colors={['#F92BFA', '#0C0CF8']}
                            start={{x: 0.0, y: 1.0}}
                            end={{x: 1.0, y: 1.0}}
                            style={styles.gradient(true)}
                        >
                            <Text style={styles.submitText}>Sign & Send Transaction</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
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
    signTransactionBtn: {
        height: 48,
        marginTop: 24
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
    },
    linearGradientStyle: {
        height: 50,
        borderColor: 'transparent',
        width: '100%',
        opacity: 0.4,
        borderRadius: 16,
        marginVertical: 5
    },
    input: {
        height: 48,
        fontSize: 16,
        borderWidth: 1,
        padding: 10,
        borderRadius: 16,
        borderColor: Colors.LightViolet,
        width: '100%',
    }
})