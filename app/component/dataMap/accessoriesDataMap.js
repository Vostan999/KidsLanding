import React from "react";
import {Image, Text, TouchableOpacity, StyleSheet} from "react-native";


export default function AccessoriesDataMap(props) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {

            }}
        >
            <Image source={props.item.img} />

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: "#DADADA",
        height: 86,
        width: 59,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15,
        marginVertical:15
    }

})
