import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import WalletConnectionWrapper from "./walletConnectionWrapper";
import {walletConnectionData} from "../../../assets/data/walletConnectionData";
import * as Colors from "../../../styles/colors";

export default function WalletModalContent() {

    const renderItem = ({ item }) => (
        <WalletConnectionWrapper data={item} />
    );

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Connect Wallet</Text>
            <Text style={styles.subTitle}>Enter your email and password to login</Text>
            <FlatList
                data={walletConnectionData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.list}
            />
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 16,    
        padding: 20,
        paddingTop: 30,
        backgroundColor: 'white',
        borderRadius: 16,
    },
    list: {
      marginTop: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        color: Colors.CodeGray,
    },
    subTitle: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: '400',
        color: Colors.Violet,
        opacity: 0.4
    }
})