import QRCodeScanner from "react-native-qrcode-scanner";
import {RNCamera} from "react-native-camera";
import {Linking, Text, TouchableOpacity, StyleSheet, Vibration, View, StatusBar} from "react-native";
import React from "react";
import axiosInstance from "../../networking/axiosinstance";


export default function QrCodeScanner(props) {
    const onSuccess = async (e) => {

        try {
            const data = {
                "qr": e.data,
                "character_id": props.route.params.id
            }
            const response = await axiosInstance.post('/checkCharacterQr', data)
            response.data.success ?
                props.navigation.replace("addNewAnimal")
                :
                alert("not equal")
            Vibration.vibrate()
        } catch (e) {
            console.log(e.response)
            alert("not equal")
            Vibration.vibrate()
        }
    }

    return (
        <View style={{flex: 1}}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <QRCodeScanner
                onRead={onSuccess}
                flashMode={RNCamera.Constants.FlashMode.torch}
                fadeIn={true}
                showMarker={true}
                cameraType={'back'}
                bottomContent={
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                        style={styles.buttonTouchable}
                    >
                        <Text style={styles.buttonText}>Back!</Text>
                    </TouchableOpacity>
                }/>
        </View>
    )
}

const styles = StyleSheet.create({
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'red'
    },
    buttonTouchable: {
        padding: 16
    }
})
