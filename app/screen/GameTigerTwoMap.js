import React, {useState, useEffect} from "react"
import {TouchableOpacity, Text, Image, View} from "react-native"

export default function GameTigerTwoMap(props) {

    const [checked, setChecked] = useState(false)
    const [color, setColor] = useState("#FFE3BA")
    const [width, setWidth] = useState(1)

    const handle = () => {
        if (props.item.true == 1 && color !== "green") {
            setChecked(true)
            setWidth(3)
            setColor("green")
            if (props.text) {
                    props.propsNavigation.navigation.replace("good")
            } else {
                    props.propsNavigation.navigation.replace("gameTigerThree")
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
            <View>
                {checked ?
                    <View style={{
                        position: "relative",
                        marginLeft: 11
                    }}>
                        <Image source={require("../assets/image/noChecked.png")}/>
                        <Image source={require("../assets/image/checked.png")}
                               style={{
                                   position: "absolute",
                                   alignSelf: "center",
                                   bottom: 4
                               }}/>
                    </View>
                    :
                    <Image source={require("../assets/image/noChecked.png")}
                           style={{
                               marginLeft: 11
                           }}/>}
            </View>
            <Image source={{uri:props.item.answer}} style={{
                marginLeft: 30,
                width:30,
                height:30
            }}/>
        </TouchableOpacity>
    )
}

