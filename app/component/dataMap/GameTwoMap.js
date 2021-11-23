import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

export default function GameTwoMap(props) {
    return (
        <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerText}>{props.item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    footerButton: {
        borderWidth: 1,
        borderColor: "#F19100",
        height: 45,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 17,
        marginBottom: 10,
        marginHorizontal: 25
    },
    footerText: {
        color: "#563C31",
        fontFamily: "PoppinsRegular"
    },
})
