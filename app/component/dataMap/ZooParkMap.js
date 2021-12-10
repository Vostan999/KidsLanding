import React from "react"
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native"

export default function ZooParkMap(props) {
    return (
            <TouchableOpacity
                style={styles.animalView}
                onPress={() => {
                    // context.navigate("qrCodeScanner")
                    // context.navigate("gameOne")
                }}>

                    <Image source={props.item.img} style={{width: 82, height: 124}}/>
                    <Text style={styles.animalName}>{props.item.name}</Text>

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
        marginVertical:37
    },
    animalName: {
        fontSize: 24,
        color: "#D56638",
        fontFamily: "ShortStack",
        marginTop: 12
    },


})
