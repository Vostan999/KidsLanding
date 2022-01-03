import React from "react";
import {TextInput} from "react-native";

export default function Input(props) {
    return (
        <TextInput
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            placeholderTextColor={"#BCB5AC"}
            style={{
                borderWidth: 1,
                borderColor: "#F19100",
                borderRadius: 6,
                marginVertical:props.marginVertical,
                paddingLeft:15,
                fontSize:12,
                fontFamily:"PoppinsRegular",
                marginTop:props.marginTop,
                color:"black"
            }}/>
    )
}
