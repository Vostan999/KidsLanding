import React from "react"
import {TouchableOpacity, Image, StyleSheet} from "react-native"

export default function TrouserMap(props) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={props.item.img}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#DADADA",
        height: 92,
        width: 67,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 8,
    },
})
