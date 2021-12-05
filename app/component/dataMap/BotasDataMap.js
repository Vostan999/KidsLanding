import React from "react";
import {Image, Text, TouchableOpacity, StyleSheet} from "react-native";


export default function BotasDataMap(props) {
    return (
        <TouchableOpacity
            style={
                {
                    borderWidth: props.activeIndex === props.index ? 2 : 1,
                    borderColor: props.activeIndex === props.index ? "#FFE3BA" : "#DADADA",
                    height: 92,
                    width: 125,
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 15,
                    marginVertical: 15,
                }
            }
            onPress={() => {
                props.widthBorder(props.index)
                props.BotasLeftMap(props.item.left)
                props.BotasRightMap(props.item.right)
            }}>
            <Image source={props.item.img}/>

        </TouchableOpacity>
    )
}
