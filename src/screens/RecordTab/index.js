import React from "react";
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import {useAuthContext} from "../../providers/AuthContext";

export default function RecordTab(props) {
    const {logOut} = useAuthContext();
    const handleSubmit = () => {
        logOut();
        props.navigation.navigate("Login");
    }
    return (
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
})