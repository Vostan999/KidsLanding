import React from "react";
import {Text, TouchableOpacity} from "react-native";

export default function Button(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                borderWidth: props.borderWidth,
                borderColor: props.borderColor,
                backgroundColor: props.backgroundColor,
                marginBottom:props.marginBottom,
                height: 50,
                borderRadius: 6,
                justifyContent: "center",
                alignItems: "center",
                marginVertical:props.marginVertical,
                marginHorizontal:props.marginHorizontal,
                zIndex:2
            }}>
            <Text style={{
                color: props.color,
                fontFamily:"PoppinsRegular",
                fontWeight: "bold"
            }}>{props.title}</Text>
        </TouchableOpacity>
    )
}
