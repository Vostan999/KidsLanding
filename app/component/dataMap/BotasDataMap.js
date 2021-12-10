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
                    marginHorizontal: 7.5,
                    marginVertical: 15,
                }
            }
            onPress={() => {
                props.widthBorder(props.index)
                // props.botasFunc(props.item.botas)

            }}>
            <Image source={props.item.img}/>

        </TouchableOpacity>
    )
}
