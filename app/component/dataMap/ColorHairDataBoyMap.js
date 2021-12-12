import React, {useState} from "react"
import {View,  TouchableOpacity} from "react-native"


export default function ColorHairDataBoyMap(props) {

    return (
        <View style={{
            flex: 1,
            alignItems:"center",
            marginHorizontal:10,
        }}>

            <TouchableOpacity
                style={[{
                    width: 68,
                    height: 68,
                    backgroundColor: props.item.color,
                    borderRadius: 100,
                    borderColor:"#F19100",
                },
                    props.activeIndex === props.index ? { borderWidth: 2  } : 1
                ]}
                onPress={() => {
                    props.setHairColorFunc(props.item.color)
                    props.widthBorder(props.index)
                }}>

            </TouchableOpacity>

        </View>
    )
}
