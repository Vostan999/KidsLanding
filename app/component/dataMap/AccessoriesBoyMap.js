import React, {useState} from "react";
import {Image, Text, TouchableOpacity, StyleSheet} from "react-native";


export default function AccessoriesBoyMap(props) {
    const [activeIndex, setActiveIndex] = useState(0)
    const widthBorder = (item) => {
        setActiveIndex(item)
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
                     widthBorder(props.index)
                    props.accessoriesNameFunc(props.item.name)
                    props.accessoriesFunc(props.item.accessories)
            }}
        >
            <Image source={props.item.img}/>

        </TouchableOpacity>
    )
}
