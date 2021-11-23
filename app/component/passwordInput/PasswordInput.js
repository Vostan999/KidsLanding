import React, {useState} from "react";
import {Image, TextInput, View, Dimensions, TouchableOpacity} from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function PasswordInput(props) {
    const [state, setState] = useState(true)
    return (
        <View style={{
            borderWidth: 1,
            borderColor: "#F19100",
            flexDirection: "row",
            marginVertical:props.marginVertical,
            borderRadius:6
        }}>
            <TextInput
                placeholder={props.placeholder}
                placeholderTextColor={"#BCB5AC"}
                secureTextEntry={state}
                style={{
                    borderRadius: 4,
                    paddingLeft: 16,
                    fontWeight: props.fontWeight,
                    fontSize: 12,
                    width: windowWidth - 110,
                }}
                onChangeText={props.onChangeText}
            />
            {state ?

                <TouchableOpacity
                    style={{alignItems: "center", justifyContent: "center", height: 20, marginTop: 15}}
                    onPress={() => {
                        setState(!state)
                    }}>
                    <Image source={require("../../assets/image/inputVector.png")} style={{
                        width: 15.67,
                        height: 14.34,
                    }}/>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={{alignItems: "center", justifyContent: "center", height: 20, marginTop: 15}}
                    onPress={() => {
                        setState(!state)
                    }}>
                    <Image source={require("../../assets/image/vectorInActive.png")} style={{
                        width: 15.67,
                        height: 14.34,
                    }}/>
                </TouchableOpacity>
            }
        </View>
    )
}
