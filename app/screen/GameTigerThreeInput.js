import React, {useState, useRef, useEffect} from "react";
import {ScrollView, StatusBar, View,KeyboardAvoidingView} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import Cloud from "../component/cloud/Cloud";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Leaf from "../component/leaf/Leaf";
import {styles} from "../styles/gameOne/GameOne";
import CodeInput from 'react-native-code-input';
import Back from "../component/back/Back";
import axiosInstance from "../networking/axiosinstance";
import Loading from "../component/loading/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function GameTigerThreeInput(props) {
    const [_onFinishCheckingCode1, set_onFinishCheckingCode1] = useState("")
    const ref = useRef(_onFinishCheckingCode1)
    const [color, setColor] = useState('#F19100')
    const data = props.route.params.data[2]

    useEffect(() => {
        if (_onFinishCheckingCode1) {
            if (_onFinishCheckingCode1.toLowerCase() === data.key.toLowerCase()) {
                setColor('green')
                props.navigation.replace("good")
            } else if (_onFinishCheckingCode1.toLowerCase() !== data.key.toLowerCase()){
                setColor('red')
            }
        }
    }, [_onFinishCheckingCode1])

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>

            <KeyboardAvoidingView>
            <StatusBar
                backgroundColor={"white"}
                barStyle={"dark-content"}
            />
            <HeaderZooziez
                propsNavigation={props.navigation}
            />
            <Back
                navigationProps={props.navigation}
            />
            <Cloud
                textOne={"SPELL"}
                textTwo={data.key ? data.key : ""}
                characterImage={data.img ? data.img : null}
            />
            <View style={styles.codeInputView}>
                <CodeInput
                    ref={ref}
                    keyboardType={"default"}
                    activeColor='#F19100'
                    autoFocus={true}
                    inputPosition='center'
                    onFulfill={(code) => set_onFinishCheckingCode1(code)}
                    codeLength={data.key ? data.key.length : 0}
                    codeInputStyle={{
                        borderWidth: 1,
                        borderColor: color,
                        borderRadius: 6,
                        color: '#D56638',
                        fontSize: 18,
                        fontFamily: "MochiyPopPOne-Regular",
                        width: 35,
                        height: 52,
                        backgroundColor: "#FFFFFF"
                    }}/>
            </View>
            <Leaf
                leaf4={require("../assets/image/leaf.png")}
                leaf3={require("../assets/image/leaf.png")}
            />
            </KeyboardAvoidingView>
        </ScrollView>
    )
}
