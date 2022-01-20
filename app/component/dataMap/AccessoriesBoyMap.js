import React, {useState} from "react";
import {Image, Text, TouchableOpacity, StyleSheet} from "react-native";


export default function AccessoriesBoyMap(props) {
    const [activeIndex, setActiveIndex] = useState(0)
    const widthBorder = (item) => {
        setActiveIndex(item)
    }
    const handle = (item) => {
        if (!item.state) {
            item.state = true
            const arr = props.accessories
            arr.push(item)
            props.accessoriesFunc(arr)
            widthBorder(props.index)
        }
    }
    return (
        <TouchableOpacity
            style={[
                {
                    borderWidth: activeIndex === props.index ? 2 : 1,
                    borderColor: activeIndex === props.index ? "#FFE3BA" : "#DADADA",
                    height: 86,
                    width: 59,
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 15,
                    marginVertical: 15
                }
            ]}
            onPress={() => {
                handle(props.item)
            }}
        >
            <Image source={props.item.img}/>

        </TouchableOpacity>
    )
}
