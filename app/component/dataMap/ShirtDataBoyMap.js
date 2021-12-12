import React from "react"
import {TouchableOpacity, Image, StyleSheet} from "react-native"

export default function ShirtDataBoyMap(props) {


    return (
        <TouchableOpacity
            onPress={()=>{
                props.widthBorder(props.index)
                props.shirtShoesMap(props.item.shoes)

            }}
            style={[{
                borderWidth: props.activeIndex ===props.index ? 2: 1,
                borderColor: props.activeIndex ===props.index ? "#FFE3BA": "#DADADA",
                height: 92,
                width: 67,
                alignItems: "center",
                justifyContent: "center",
                marginHorizontal: 4,
            },]}>
            <Image source={props.item.img}/>
        </TouchableOpacity>
    )
}