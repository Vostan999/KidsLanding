import React, {useState, useEffect} from "react"
import {TouchableOpacity, Text} from "react-native"
import CheckBox from "@react-native-community/checkbox";

export default function GameTigerOneMap(props) {

    const [checked, setChecked] = useState(false)
    const [color, setColor] = useState("#FFE3BA")
    const [width, setWidth] = useState(1)

    const handle = () => {
        if (props.item.true == 1 && color !== "green") {
            props.count.push(props.item)
            setChecked(true)
            setWidth(3)
            setColor("green")
            if (props.count.length === 2) {
                props.propsNavigation.navigation.replace("gameTigerTwo")
            }
        } else if (props.item.true == 0) {
            setChecked(true)
            setWidth(3)
            setColor("red")
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
                style={{transform: [{scaleX: 0.9}, {scaleY: 0.9}]}}
                tintColors={{true: '#F19100', false: '#F19100'}}
            />
            <Text>{props.item.answer}</Text>
        </TouchableOpacity>
    )
}

