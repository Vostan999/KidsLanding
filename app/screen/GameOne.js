import React, {useState, useRef, useEffect} from "react";
import {ScrollView, StatusBar, Image, View, Text, TouchableOpacity} from "react-native";
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
            if (_onFinishCheckingCode1 === "AAAAAAAA" && _onFinishCheckingCode1.length === 8) {
                setTimeout(() => {
                    props.navigation.replace("good")
                }, 1000)
            }
        }
    }, [_onFinishCheckingCode1])



    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <HeaderZooziez propsNavigation={props.navigation}/>
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
                        borderColor: _onFinishCheckingCode1 === "AAAAAAAA" && _onFinishCheckingCode1.length === 8 ? "#F19100" : "red",
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
