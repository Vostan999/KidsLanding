import React, {useState} from "react";
import {Text, TouchableOpacity,} from "react-native";

export default function GameTwoMap(props) {
    const [color, setColor, View] = useState("#F19100")
    const [width, setwidth] = useState(1)
    const handle = () => {
        if (props.item.true == 1) {
            setColor("green")
            setwidth(3)
            setTimeout(() => {
                props.twoProps.navigation.replace("gameThree")
                console.log("aa")
            }, 1000)
        }
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
                if (props.item.true != 1) {
                    setColor("red")
                    setwidth(3)
                }
                handle()
            }}>
            <Text style={{
                color: "#563C31",
                fontFamily: "PoppinsRegular"
            }}>{props.item.answer}</Text>
        </TouchableOpacity>
    )
}
