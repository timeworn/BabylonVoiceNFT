import React, {useEffect, useState} from "react";
import {TextInput, StyleSheet, View, Text, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useMagicContext} from "../../../providers/MagicContext";

import {socialGroups} from "../../../assets/data/socialData";
import smsIcon from '../../../assets/images/sms.png';
import userIcon from '../../../assets/images/user.png';
import {useAuthContext} from "../../../providers/AuthContext";
import * as Colors from "../../../styles/colors";

export default function Register(props) {
    const {magic} = useMagicContext();
    const {loginWithEmail, token, isRegistered} = useAuthContext();
    const [emailAddress, setEmailAddress] = useState("");
    const [userName, setUserName] = useState("");
    const [submitReady, setSubmitReady] = useState(false);

    const handleSubmit = (event) => {
        if (!submitReady) {
            return
        }
        event.preventDefault()
        loginWithEmail(emailAddress, 1);
    }
    useEffect(() => {
        if (emailAddress && userName) {
            setSubmitReady(true)
        } else {
            setSubmitReady(false)
        }
    }, [emailAddress, userName]);

    useEffect(() => {
        if (token) {
            props.navigation.navigate("UserSetting")
        }
    }, [token]);

    useEffect(() => {
        isRegistered && props.navigation.navigate("Login")
    }, [isRegistered])

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Sign up</Text>
            <View style={styles.socialGroup}>
                {socialGroups.map((item, index) =>
                    <TouchableHighlight
                        key={index}
                        onPress={() => {
                        }}
                        style={styles.socialIconBtn}
                    >
                        <Image source={item.src}/>
                    </TouchableHighlight>
                )}
            </View>
            <View style={styles.separateGroup}>
                <View style={styles.separator}/>
                <Text style={styles.separateText}>Or, register with email...</Text>
                <View style={styles.separator}/>
            </View>
            <View style={styles.inputGroup}>
                <View style={styles.inputHeader}>
                    <Image source={smsIcon}/>
                    <Text style={styles.inputTitle}>Email ID</Text>
                </View>
                <View style={styles.linearContainer}>
                    {!emailAddress ? <TextInput
                        style={styles.input(emailAddress)}
                        onChangeText={(value) => setEmailAddress(value)}
                        value={emailAddress}
                        placeholder="founders@babylonvoice.com"
                    /> : <LinearGradient
                        colors={['#e53dff', '#6171ff']}
                        start={{x: 0.0, y: 1.0}}
                        end={{x: 1.0, y: 1.0}}
                        style={styles.linearGradientStyle}>
                        <TextInput
                            style={styles.input(emailAddress)}
                            onChangeText={(value) => setEmailAddress(value)}
                            value={emailAddress}
                            placeholder="founders@babylonvoice.com"
                        />
                    </LinearGradient>
                    }
                </View>
            </View>
            <View style={styles.inputGroup}>
                <View style={styles.inputHeader}>
                    <Image source={userIcon}/>
                    <Text style={styles.inputTitle}>User name</Text>
                </View>
                <View style={styles.linearContainer}>
                    {userName ? <LinearGradient
                        colors={['#e53dff', '#6171ff']}
                        start={{x: 0.0, y: 1.0}}
                        end={{x: 1.0, y: 1.0}}
                        style={styles.linearGradientStyle}>
                        <TextInput
                            style={styles.input(userName)}
                            onChangeText={(value) => setUserName(value)}
                            value={userName}
                            placeholder="Enter user name"
                        />
                    </LinearGradient> : <TextInput
                        style={styles.input(userName)}
                        onChangeText={(value) => setUserName(value)}
                        value={userName}
                        placeholder="Enter user name"
                    />}
                </View>
            </View>
            <TouchableOpacity style={styles.submitBtn} enabled={submitReady} onPress={handleSubmit}>
                <LinearGradient
                    colors={['#F92BFA', '#0C0CF8']}
                    start={{x: 0.0, y: 1.0}}
                    end={{x: 1.0, y: 1.0}}
                    style={styles.gradient(submitReady)}
                >
                    <Text style={styles.submitText}>SIGN UP</Text>
                </LinearGradient>
            </TouchableOpacity>
            <View style={styles.registerLink}>
                <Text style={styles.grayText}>
                    Already registered?
                </Text>
                <Text style={styles.linkText}
                      onPress={() => props.navigation.navigate('Login')}>
                    Login
                </Text>
            </View>
            <magic.Relayer/>
        </View>
    )
}

const styles = StyleSheet.create({
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
    input: (value) => {
        const borderColorVal = value ? 'transparent' : 'rgba(36, 11, 76, 0.4)';
        return {
            height: 48,
            borderWidth: 1,
            padding: 10,
            borderRadius: 16,
            borderColor: borderColorVal,
            width: '100%',
        }
    },
    container: {
        margin: 37,
        flex: 1,
        justifyContent: 'flex-end',
        height: '100%'
    },
    socialGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 31
    },
    socialIconBtn: {
        width: 75,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(36, 11, 76, 0.4)',
        borderRadius: 16,
    },
    pageTitle: {
        fontSize: 32,
        fontWeight: '600',
        color: Colors.Violet,
        marginBottom: 32
    },
    separator: {
        width: 100,
        marginVertical: 8,
        borderBottomColor: 'rgba(36, 11, 76, 0.4)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        color: Colors.Violet,
        opacity: 0.4
    },
    separateGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 38
    },
    separateText: {
        color: Colors.Violet,
        opacity: 0.4
    },
    inputGroup: {
        marginBottom: 29
    },
    inputHeader: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.Violet,
        opacity: 0.4,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 12
    },
    inputTitle: {
        marginLeft: 5
    },
    linearContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    linearGradientStyle: {
        height: 50,
        borderColor: 'transparent',
        width: '100%',
        opacity: 0.4,
        borderRadius: 16
    },
    childViewStyle: {
        borderColor: 'transparent',
        width: '100%',
        height: 50,
        borderRadius: 16,
    },
    submitText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white'
    },
    registerLink: {
        marginTop: 20,
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
});