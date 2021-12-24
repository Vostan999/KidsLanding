import QRCodeScanner from "react-native-qrcode-scanner";
import {RNCamera} from "react-native-camera";
import {Linking, Text, TouchableOpacity, StyleSheet, Vibration, View, StatusBar} from "react-native";
import React from "react";


export default function QrCodeScanner(props) {
    const onSuccess = e => {
        console.log(e);
        /*  Linking.openURL(e.data).then((res)=>{
              Vibration.vibrate()
              console.log(res)
          }).catch(err => {
              console.error('An error occured', err)
              Vibration.vibrate()
          });*/
        Vibration.vibrate()

    }

    return (
        <View>
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

                            // props.navigation.navigate("chooseGame")
                        }}
                        style={styles.buttonTouchable}>
                        <Text style={styles.buttonText}>Click for User!</Text>
                    </TouchableOpacity>
                }
            />
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
        color: '#D56638'
    },
    buttonTouchable: {
        padding: 16
    }
})
