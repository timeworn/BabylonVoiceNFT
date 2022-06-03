import React from 'react';
import {View, Dimensions} from 'react-native';
import Modal from "react-native-modal";
import WalletModalContent from "./walletModalContent";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight =
    Platform.OS === "ios"
        ? Dimensions.get("window").height
        : require("react-native-extra-dimensions-android").get(
        "REAL_WINDOW_HEIGHT"
        );

export default function WalletConnectionModal({isVisible, setVisible}) {
    return (
        <View>
            <Modal
                isVisible={isVisible}
                deviceWidth={deviceWidth}
                deviceHeight={deviceHeight}
                onBackdropPress={() => setVisible(false)}
                onSwipeComplete={() => setVisible(false)}
                swipeDirection="right"
                hideModalContentWhileAnimating={true}
                supportedOrientations={['portrait', 'landscape']}
                propagateSwipe
                backdropColor={"black"}
            >
                <WalletModalContent/>
            </Modal>
        </View>
    )
}