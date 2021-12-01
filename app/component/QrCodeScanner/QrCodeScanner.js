import QRCodeScanner from "react-native-qrcode-scanner";
import {RNCamera} from "react-native-camera";
import {Linking, Text, TouchableOpacity, StyleSheet} from "react-native";
import React from "react";


export default function QrCodeScanner(props) {
    const onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
    }

    return (

        <QRCodeScanner
            onRead={onSuccess}
            flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
                <Text style={styles.centerText}>
                    Go to{' '}
                    <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                    your computer and scan the QR code.
                </Text>
            }
            bottomContent={
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                    style={styles.buttonTouchable}>
                    <Text style={styles.buttonText}>OK. Got it!</Text>
                </TouchableOpacity>
            }
        />
    )
}
const styles = StyleSheet.create({
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: '#D56638'
    },
    buttonTouchable: {
        padding: 16
    }
})
