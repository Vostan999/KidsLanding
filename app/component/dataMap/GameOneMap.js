import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";

export default function GameOneMap() {
    const [text, setText] = useState("")

    return (
        <TextInput
            style={styles.inputOne}
            onChangeText={(text) => setText({text})}
            maxLength={1}
        />
    )
}

const styles = StyleSheet.create({

    inputOne: {
        height: 52,
        borderColor: '#F19100',
        width: 35,
        borderWidth: 1,
        alignSelf: "center",
        textAlign: "center",
        borderRadius: 6,
        marginRight: 14,
        fontFamily: "ShortStack",
        color: "#D56638",
        fontSize: 18
    },
})
