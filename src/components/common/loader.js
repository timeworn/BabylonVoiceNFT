import React, {useEffect, useState} from "react";
import { Text, StyleSheet } from 'react-native'
import AnimatedLoader from "react-native-animated-loader";
import loaderJson from "../../assets/animated-loaders/square-loader.json"

export default function Loader({isLoading}) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setVisible(isLoading)
    }, [isLoading])
    return (
        <AnimatedLoader
            visible={visible}
            overlayColor="rgba(255,255,255,0.75)"
            source={loaderJson}
            animationStyle={styles.lottie}
            speed={1}
        >
            <Text>Loading</Text>
        </AnimatedLoader>
    )
}

const styles = StyleSheet.create({
    lottie: {
        width: 100,
        height: 100
    }
});