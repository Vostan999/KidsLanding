import React, {useState} from "react";
import {Text, TouchableOpacity,View} from "react-native";

export default function GameTwoMap(props) {
    const [color, setColor] = useState("#F19100")
    const [width, setWidth] = useState(1)
    const handle = () => {
            props.twoProps.navigation.replace("gameThree")
    }
    return (
        <TouchableOpacity
            style={{
                borderWidth: width,
                borderColor: color,
                height: 45,
                borderRadius: 6,
                justifyContent: "center",
                alignItems: "flex-start",
                paddingLeft: 17,
                marginBottom: 10,
                marginHorizontal: 25
            }}
            onPress={() => {
                if (props.item.true == 1) {
                    setColor("green")
                    setWidth(3)
                    handle()
                }
                if (props.item.true == 0) {
                    setColor("red")
                    setWidth(2)
                }
            }}>
            <Text style={{
                color: "#563C31",
                fontFamily: "PoppinsRegular"
            }}>{props.item.answer}</Text>
        </TouchableOpacity>
    )
}
