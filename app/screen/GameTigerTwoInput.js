import React, {useState, useRef, useEffect} from "react";
import {ScrollView, StatusBar, View,KeyboardAvoidingView} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import Cloud from "../component/cloud/Cloud";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Leaf from "../component/leaf/Leaf";
import {styles} from "../styles/gameOne/GameOne";
import CodeInput from 'react-native-code-input';
import Back from "../component/back/Back";
import Loading from "../component/loading/Loading";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default function GameTigerTwoInput(props) {
    const [_onFinishCheckingCode1, set_onFinishCheckingCode1] = useState("")
    const ref = useRef(_onFinishCheckingCode1)
    const [loading, setLoading] = useState(false)
    const data = props.route.params.data
    const dataquestion = props.route.params.data[1]
    const [color, setColor] = useState('#F19100')

    useEffect(() => {
        if (_onFinishCheckingCode1) {
            if (_onFinishCheckingCode1.toLowerCase() === dataquestion.key.toLowerCase()) {
                setColor('green')
                props.navigation.replace("gameTigerThreeInput", {data: data})
            } else if (_onFinishCheckingCode1.toLowerCase() !== dataquestion.key.toLowerCase()){
                setColor('red')
            }
        }
    }, [_onFinishCheckingCode1])

    return (
      <KeyboardAwareScrollView  style={GContent.ViewInput}>
      <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
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
                textTwo={dataquestion.key}
                characterImage={Object.keys(dataquestion).length ? dataquestion.img : null}
            />
            <View style={styles.codeInputView}>
                <CodeInput
                    ref={ref}
                    keyboardType={"default"}
                    activeColor='#F19100'
                    inputPosition='center'
                    onFulfill={(code) => set_onFinishCheckingCode1(code)}
                    codeLength={Object.keys(dataquestion).length ? dataquestion.key.length : ""}
                    codeInputStyle={{
                        borderWidth: 1,
                        borderColor: color,
                        borderRadius: 6,
                        color: '#D56638',
                        fontSize: 18,
                        fontFamily: "MochiyPopPOne-Regular",
                        width: 25,
                        height: 40,
                        backgroundColor: "#FFFFFF"
                    }}/>
            </View>
            <Leaf
                leaf4={require("../assets/image/leaf.png")}
                leaf3={require("../assets/image/leaf.png")}
            />
            <Loading loading={loading}/>
        </ScrollView>
      </KeyboardAwareScrollView>
    )
}
