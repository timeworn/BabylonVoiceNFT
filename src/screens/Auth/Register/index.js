import React from "react";
import {View, Text} from 'react-native';

export default function Register(props) {
    const {navigation} = props
    return (
        <View>
            <View>
                <Text style={{color: 'red'}}
                      onPress={() => navigation.navigate('Home')}>
                    Register Screen - to Home Screen
                </Text>
            </View>
        </View>
    )
}