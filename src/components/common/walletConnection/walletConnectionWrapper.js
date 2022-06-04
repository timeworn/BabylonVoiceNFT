import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import * as Colors from "../../../styles/colors";
import MetamaskSVG from "../../../assets/images/svg/metamask.svg";
import PhantomSVG from "../../../assets/images/svg/phantom.svg";
import NearSVG from "../../../assets/images/svg/near.svg";

export default function WalletConnectionWrapper(info) {

    const renderSwitch = (param) => {
        switch (param.id) {
            case 0:
                return <MetamaskSVG width={30} height={30}/>;
            case 1:
                return <PhantomSVG width={28} height={28}/>;
            case 2:
                return <NearSVG width={28} height={28}/>;
            default:
                return <MetamaskSVG width={28} height={28}/>;
        }
    }

    const handleConnect = (link) => {

    }

    return (
        <TouchableOpacity onPress={handleConnect(info.data.walletName)}>
            <View style={styles.container}>
                <View style={styles.main}>
                    {renderSwitch(info.data)}
                    <Text style={styles.walletName}>{info.data.walletName}</Text>
                </View>
                {info.data.isForSolana && <View>
                    <Text style={styles.walletName}>solana</Text>
                </View>}
            </View>
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: Colors.LightViolet,
        borderOpacity: 0.4,
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        boxShadow: 'rgb(4 17 29 / 25%) 0px 0px 8px 0px'
    },
    main: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    walletName: {
        marginLeft: 10
    },
    svgIcon: {
        width: 22,
        height: 22,
        margin: 3,
        padding: 3
    }
})