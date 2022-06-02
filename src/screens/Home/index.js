import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';
import * as Colors from "../../styles/colors";

export default function Home(props) {
    const {navigation} = props
    return (
        <View style={styles.container}>
            <Image
                style={styles.appLogo}
                source={require('../../assets/images/appLogo.png')}
            />
            <Text style={styles.appName}>BABYLON VOICE</Text>
            <View style={styles.registerLink}>
                <Text style={styles.grayText}>
                    New to Babylon Voice?
                </Text>
                <Text style={styles.linkText}
                      onPress={() => navigation.navigate('Onboarding')}>
                    Register
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    appName: {
        fontSize: 32,
        fontWeight: '600',
        fontFamily: 'Poppins',
        color: Colors.CodeGray
    },
    appLogo: {
        width: 144,
        height: 144
    },
    registerLink: {
        position: 'absolute',
        bottom: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    grayText: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.Violet,
        opacity: 0.4
    },
    linkText: {
        color: Colors.Heliotrop,
        marginLeft: 5
    },
})