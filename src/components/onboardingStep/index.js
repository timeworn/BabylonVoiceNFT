import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import * as Colors from "../../styles/colors";

export default function OnboardingStep(props) {
    return (
        <View>
            <Image source={props.item.captionImg}/>
            <LinearGradient
                colors={['#F92BFA', '#0C0CF8']}
                start={{x: 0.0, y: 1.0}}
                end={{x: 1.0, y: 1.0}}
                style={styles.gradient(true)}
            >
                <Text style={styles.stageText}>{props.stage + 1}
                    <Text style={styles.ofText}> of 3</Text>
                </Text>
            </LinearGradient>
            <View style={styles.title}>
                <Text style={styles.welcomeText}>Welcome to</Text>
                <Text style={styles.mainTitle}>{props.item.title1.toUpperCase()}
                    <Text style={styles.subTitle}> {props.item.title2.toUpperCase()}</Text>
                </Text>
            </View>
            <View style={styles.comment}>
                <Text>{props.item.comment}</Text>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    gradient: (enabled) => {
        const opacityVal = enabled ? 1 : 0.3;
        return {
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            opacity: opacityVal,
            height: 24,
            marginTop: 16,
            marginBottom: 12,
            width: 54
        }
    },
    stageText: {
        fontSize: 12,
        fontWeight: '600',
        color: 'white'
    },
    ofText: {
      color: 'gray'
    },
    title: {
        fontWeight: '600',
    },
    welcomeText: {
        color: Colors.Violet,
        fontSize: 24,
    },
    mainTitle: {
        fontSize: 40,
        color: Colors.Heliotrop
    },
    subTitle: {
      color: Colors.CornFlowerBlue
    },
    comment: {
        fontSize: 14,
        fontWeight: 400,
        color: Colors.Violet,
        opacity: 0.4,
        marginTop: 24,
        marginBottom: 70
    },
    stepStage: {
        borderRadius: 12,
        height: 24
    }
})