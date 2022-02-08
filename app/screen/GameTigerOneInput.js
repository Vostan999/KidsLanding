import React, {useState, useRef, useEffect} from "react";
import {ScrollView, StatusBar, View, KeyboardAvoidingView,Text} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import Cloud from "../component/cloud/Cloud";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Leaf from "../component/leaf/Leaf";
import {styles} from "../styles/gameOne/GameOne";
import Back from "../component/back/Back";
import axiosInstance from "../networking/axiosinstance";
import Loading from "../component/loading/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';



export default function GameTigerOneInput(props) {
    const [_onFinishCheckingCode1, set_onFinishCheckingCode1] = useState("")
    const ref = useRef(_onFinishCheckingCode1)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [params, setParams] = useState([])
    const [color, setColor] = useState('#F19100')
  const ref1 = useBlurOnFulfill({value:_onFinishCheckingCode1, cellCount: Object.keys(data).length ? data.key.length : 0});

    useEffect(() => {
        handle()
    }, [])

    useEffect(() => {
            if (_onFinishCheckingCode1 && data.key.length === _onFinishCheckingCode1.length) {
                if (_onFinishCheckingCode1.toLowerCase() === data.key.toLowerCase()) {
                    setColor('green')
                    props.navigation.replace("gameTigerTwoInput", {data: params})
                } else if (_onFinishCheckingCode1.toLowerCase() !== data.key.toLowerCase()) {
                    setColor('red')
            }
        }
    }, [_onFinishCheckingCode1])

    let idAnimal = async () => {
        try {
            let data = await AsyncStorage.getItem("animalId");
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    const handle = async () => {
        const id = await idAnimal()
        setLoading(true)
        try {
            const response = await axiosInstance.get(`/words/${id}`)
            setData(response.data.words[0])
            setParams(response.data.words)
            setLoading(false)
        } catch (e) {
            console.log(e.message)
            setLoading(false)
        }
    }


  return (
      <KeyboardAwareScrollView style={GContent.ViewInput}>
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
                    textTwo={Object.keys(data).length ? data.key : ""}
                    characterImage={Object.keys(data).length ? data.img : null}
                />
                <View style={styles.codeInputView}>
                  <CodeField
                    ref={ref1}
                    value={_onFinishCheckingCode1}
                    onChangeText={(code) => set_onFinishCheckingCode1(code)}
                    cellCount={Object.keys(data).length ? data.key.length : 0}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="default"
                    textContentType="oneTimeCode"
                    caretHidden={false}
                    renderCell={({index, symbol, isFocused}) => (
                      <Text key={index} style={[styles.cell,{borderColor: color}]}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                      </Text>
                    )}
                  />
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
