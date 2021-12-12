import React, {useState} from "react"
import {View, Text, TouchableOpacity} from "react-native"

export default function ColorSkinBoyDataMap(props) {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
        }}>
            <TouchableOpacity
                style={[{
                    width: 68,
                    height: 68,
                    backgroundColor: props.item.color,
                    borderRadius: 100,
                    borderColor: "#F19100",
                },
                    props.activeIndex === props.index ? { borderWidth: 2  } : null
                ]}
                onPress={() => {
                    props.widthBorder(props.index)
                    props.skinColorFunc(props.item.color)

                }}>
            </TouchableOpacity>
        </View>
    )
}