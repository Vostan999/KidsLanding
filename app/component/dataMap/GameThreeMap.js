import React, {useState, useEffect} from "react"
import {StyleSheet, TouchableOpacity, Text} from "react-native"
import CheckBox from "@react-native-community/checkbox";

export default function GameThreeMap(props) {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        if (checked) {
            props.propsNavigation.navigation.navigate("good")
        }
    }, [checked])
    return (
        <TouchableOpacity
            style={styles.checkView}
            onPress={() => {
                setChecked(!checked)
            }}
        >
            <CheckBox
                disabled={false}
                value={checked}
                onValueChange={(newValue) => setChecked(newValue)}
                style={{transform: [{scaleX: 0.9}, {scaleY: 0.9}]}}
                tintColors={{true: '#F19100', false: '#F19100'}}
            />
            <Text>{props.item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    checkView: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#FFE3BA",
        borderRadius: 6,
        marginHorizontal: 25,
        height: 45,
        marginBottom: 10
    }
})
