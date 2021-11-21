import React from "react";
import {Image, StyleSheet} from "react-native";

export default function Leaf(props) {
    return (
        <>
            <Image source={require("../../assets/image/leaf.png")} style={styles.leaf1}/>
            <Image source={require("../../assets/image/leaf.png")} style={styles.leaf2}/>
            <Image source={require("../../assets/image/leaf.png")} style={styles.leaf3}/>
            <Image source={props.leaf4} style={styles.leaf4}/>
            <Image source={props.Leaf} style={styles.leaf5}/>
        </>
    )
}
const styles = StyleSheet.create({
    leaf1: {
        position: "absolute",
        width: 44,
        height: 47,
        left: 18,
        top: 10
    },
    leaf2: {
        position: "absolute",
        width: 30,
        height: 31,
        right: 33,
        top: 100,
        transform: [{rotate: "90deg"}]
    },
    leaf3: {
        position: "absolute",
        width: 44,
        height: 47,
        top: 450.44,
        left: -12,
        transform: [{rotate: "100deg"}]
    },
    leaf4: {
        position: "absolute",
        width: 21.22,
        height: 22.66,
        transform: [{rotate: "60deg"}],
        left: 102,
        bottom: 29
    },
    leaf5: {
        position: "absolute",
        width: 27,
        height: 29,
        right: 0,
        bottom: 220,
    }
})
