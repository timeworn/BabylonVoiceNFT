import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper'
import LinearGradient from "react-native-linear-gradient";
import OnboardingStep from "../../components/onboardingStep";
import {onboardingData} from "../../assets/data/onboardingData";
import * as Colors from "../../styles/colors";

export default function Onboarding(props) {

    const handleNavigateLogin = () => {
        props.navigation.navigate("Login");
    }
    const handleNavigateSignup = () => {
        props.navigation.navigate("Register");
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <Swiper height='100%' showsButtons={false}>
                    {onboardingData.map((item, index) => (
                        <OnboardingStep key={index} item={item} stage={index}/>
                    ))}
                </Swiper>
                <TouchableOpacity style={styles.submitBtn} onPress={handleNavigateLogin}>
                    <LinearGradient
                        colors={['#F92BFA', '#0C0CF8']}
                        start={{x: 0.0, y: 1.0}}
                        end={{x: 1.0, y: 1.0}}
                        style={styles.gradient(false)}
                    >
                        <Text style={styles.submitText(false)}>LOGIN</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.lastBtn} onPress={handleNavigateSignup}>
                    <LinearGradient
                        colors={['#F92BFA', '#0C0CF8']}
                        start={{x: 0.0, y: 1.0}}
                        end={{x: 1.0, y: 1.0}}
                        style={styles.gradient(true)}
                    >
                        <Text style={styles.submitText(true)}>SIGN UP</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export const styles = StyleSheet.create({
    submitText: (enabled) => {
      const textVal = enabled ? "white" : Colors.Violet;
      return {
          color: textVal,
      }
    },
    gradient: (enabled) => {
        const opacityVal = enabled ? 1 : 0.3;
        return {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            opacity: opacityVal
        }
    },
    submitBtn: {
        height: 48,
    },
    container: {
        margin: 37,
    },
    lastBtn: {
      marginTop: 24,
      height: 48
    }
})
