import React, {useState, useRef, useEffect} from "react";
import {ScrollView, StatusBar, Image, View,Text,TouchableOpacity} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import Cloud from "../component/cloud/Cloud";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Leaf from "../component/leaf/Leaf";
import {styles} from "../styles/gameOne/GameOne";

import CodeInput from 'react-native-code-input';
import Back from "../component/back/Back";


export default function GameOne(props) {
    const [_onFinishCheckingCode1, set_onFinishCheckingCode1] = useState("")
    const ref = useRef(_onFinishCheckingCode1)

    useEffect(() => {
        if (_onFinishCheckingCode1) {
                props.navigation.navigate("good",{})
        }
    }, [_onFinishCheckingCode1])

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <HeaderZooziez/>
            <Back navigationProps={props.navigation}/>
            <Cloud
                textOne={"Spell"}
                textTwo={"GENEROUS"}
            />
            <View style={styles.codeInputView}>
                <CodeInput
                    ref={ref}
                    keyboardType={"default"}
                    activeColor='#F19100'
                    autoFocus={true}
                    inputPosition='center'
                    onFulfill={(code) => set_onFinishCheckingCode1(code)}
                    codeLength={8}
                    codeInputStyle={{
                        borderWidth: 1,
                        borderColor: "#F19100",
                        borderRadius: 6,
                        color: '#D56638',
                        fontSize: 18,
                        fontFamily: "ShortStack",
                        width: 35,
                        height: 52,
                        backgroundColor: "#FFFFFF"
                    }}
                />
            </View>

            <Leaf
                leaf4={require("../assets/image/leaf.png")}
                leaf3={require("../assets/image/leaf.png")}
            />
        </ScrollView>
    )
}
