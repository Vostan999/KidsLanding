import React, {useState, useRef, useEffect} from "react";
import {ScrollView, StatusBar, View, KeyboardAvoidingView, Text} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import Cloud from "../component/cloud/Cloud";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Leaf from "../component/leaf/Leaf";
import {styles} from "../styles/gameOne/GameOne";
import Back from "../component/back/Back";
import Loading from "../component/loading/Loading";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {CodeField, Cursor, useBlurOnFulfill} from "react-native-confirmation-code-field";

export default function GameTigerTwoInput(props) {
    const [_onFinishCheckingCode1, set_onFinishCheckingCode1] = useState("")
    const [loading, setLoading] = useState(false)
    const data = props.route.params.data
    const dataquestion = props.route.params.data[1]
    const [color, setColor] = useState('#F19100')
    const ref1 = useBlurOnFulfill({
        value: _onFinishCheckingCode1,
        cellCount: Object.keys(dataquestion).length ? dataquestion.key.length : 0
    });

    useEffect(() => {
        if (_onFinishCheckingCode1) {
            if (_onFinishCheckingCode1.toLowerCase() === dataquestion.key.toLowerCase()) {
                setColor('green')
                props.navigation.replace("gameTigerThreeInput", {data: data})
            } else if (_onFinishCheckingCode1.toLowerCase() !== dataquestion.key.toLowerCase()) {
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
                <HeaderZooziez propsNavigation={props.navigation}/>
                <Back navigationProps={props.navigation}/>
                <Cloud
                    textOne={"SPELL"}
                    textTwo={Object.keys(dataquestion).length? dataquestion.key : ""}
                    characterImage={Object.keys(dataquestion).length ? dataquestion.img : null}
                />
                <View style={styles.codeInputView}>
                    <CodeField
                        ref={ref1}
                        value={_onFinishCheckingCode1}
                        onChangeText={(code) => set_onFinishCheckingCode1(code)}
                        cellCount={Object.keys(dataquestion).length ? dataquestion.key.length : 0}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="default"
                        textContentType="oneTimeCode"
                        caretHidden={false}
                        renderCell={({index, symbol, isFocused}) => (
                            <Text
                                key={index}
                                style={[styles.cell,{borderColor: color}]}
                            >
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                </View>
                <Leaf leaf4={require("../assets/image/leaf.png")} leaf3={require("../assets/image/leaf.png")}/>
            </ScrollView>
        </KeyboardAwareScrollView>
    )
}
