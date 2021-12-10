import QRCodeScanner from "react-native-qrcode-scanner";
import {RNCamera} from "react-native-camera";
import {Linking, Text, TouchableOpacity, StyleSheet,Vibration} from "react-native";
import React from "react";


export default function QrCodeScanner(props) {
    const onSuccess = e => {
        Linking.openURL(`'https://www.facebook.com'`).then((res)=>{
            Vibration.vibrate()
            console.log(res)
        }).catch(err => {
            console.error('An error occured', err)
            Vibration.vibrate()
        });
    }

    return (

        <QRCodeScanner
            onRead={onSuccess}
            flashMode={RNCamera.Constants.FlashMode.torch}
            fadeIn={true}
            showMarker={true}
            cameraType={'back'}
            bottomContent={
                <TouchableOpacity
                    onPress={() => {
                        Vibration.vibrate()
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
