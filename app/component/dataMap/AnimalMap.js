import React, {useContext} from "react";
import {Image, Text, TouchableOpacity, StyleSheet, View} from "react-native";
import {ContextValue} from "../../screen/Character";


export default function AnimalMap(props) {
    const context = useContext(ContextValue)
    return (
        <TouchableOpacity
            style={styles.animalView}
            onPress={() => {
                context.navigate("qrCodeScanner")
            }}>
            <View style={styles.container}>
                <Image source={props.item.img} style={{width: 82, height: 124}}/>
                <Text style={styles.animalName}>{props.item.name}</Text>
            </View>
            <Image source={props.item.QrCodeImg} style={styles.iconScanner}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    animalView: {
        borderWidth: 1,
        borderColor: "#E2E2E2",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: 168,
        height: 193,
        marginHorizontal: 5,
        position: "relative"
    },
    animalName: {
        fontSize: 24,
        color: "#D56638",
        fontFamily: "ShortStack",
        marginTop: 12
    },
    container: {
        position: "relative"
    },
    iconScanner: {
        width: 21,
        height: 21,
        position: "absolute",
        right: 15.5,
        top: 15.5
    }
})
//style={{width: 82, height: 124}}
