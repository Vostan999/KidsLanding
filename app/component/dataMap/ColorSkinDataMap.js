import React, {useState} from "react"
import {View, Text, TouchableOpacity} from "react-native"

export default function ColorSkinDataMap(props) {
    const [activeIndex, setActiveIndex] = useState(-1)


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
                    activeIndex === props.index ? { borderWidth: 2  } : null
                ]}
                onPress={() => {
                    setActiveIndex(props.index)
                    props.skinColorFunc(props.item.color)

                }}>
            </TouchableOpacity>
        </View>
    )
}
