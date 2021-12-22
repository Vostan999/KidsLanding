import React, {useState, useEffect} from "react"
import {TouchableOpacity, Text} from "react-native"
import CheckBox from "@react-native-community/checkbox";

export default function GameThreeMap(props) {
    const [checked, setChecked] = useState(false)
    const [color, setColor] = useState("#FFE3BA")
    const [width, setwidth] = useState(1)
    const handle = () => {
        if (props.item.true == 1) {
            setColor("green")
            setChecked(!checked)
            setwidth(3)
            setTimeout(() => {
                props.propsNavigation.navigation.navigate("good")
            }, 200)
        } else if (props.item.true != 1) {
            setChecked(!checked)
            setColor("red")
            setwidth(3)
        }
    }

    return (

    <TouchableOpacity
        style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: width,
            borderColor: color,
            borderRadius: 6,
            marginHorizontal: 25,
            height: 45,
            marginBottom: 10
        }}
        onPress={() => {
            handle()
        }}>
        <CheckBox
            disabled={false}
            value={checked}
            onValueChange={(newValue) => setChecked(newValue)}
            style={{transform: [{scaleX: 0.9}, {scaleY: 0.9}]}}
            tintColors={{true: '#F19100', false: '#F19100'}}
        />
        <Text>{props.item.answer}</Text>
    </TouchableOpacity>
)
}


