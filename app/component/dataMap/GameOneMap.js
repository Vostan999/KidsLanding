import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";

export default function GameOneMap() {
    const [text, setText] = useState("")
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputOne}
                onChangeText={(text) => setText({text})}
                maxLength={1}
            />
            <View  style={styles.line}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
      position:"relative",
        marginHorizontal:4
    },
    inputOne: {
        height: 52,
        borderColor: '#F19100',
        width: 35,
        borderWidth: 1,
        alignSelf: "center",
        textAlign: "center",
        borderRadius: 6,
        fontFamily: "MochiyPopPOne-Regular",
        color: "#D56638",
        fontSize: 18,
        position: "relative"
    },
    line:{
        borderWidth: 0.5,
        borderColor: "#C4C4C4",
        width: 23,
        position:"absolute",
        bottom:10,
        right:7
    }
})
