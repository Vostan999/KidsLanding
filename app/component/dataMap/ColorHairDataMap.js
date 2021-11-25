import React, {useState} from "react"
import {View, Text, TouchableOpacity} from "react-native"


export default function ColorHairDataMap(props) {
    const [width,setWidth] = useState(0)
    return (
        <View style={{
            flex: 1,
            alignItems:"center",
            marginHorizontal:10,
        }}>

            <TouchableOpacity
                style={{
                    width: 68,
                    height: 68,
                    backgroundColor: props.item.color,
                    borderRadius: 100,
                    borderColor:"#F19100",
                     borderWidth:width
                }}
                onPress={() => {
                    props.setHairColorFunc(props.item.color)
                }}>

            </TouchableOpacity>

        </View>
    )
}
