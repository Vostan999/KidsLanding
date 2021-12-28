import React, {useState, useRef, useEffect} from "react";
import {ScrollView, StatusBar, View, } from "react-native";
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


export default function GameTigerOneInput(props) {
    const [_onFinishCheckingCode1, set_onFinishCheckingCode1] = useState("")
    const ref = useRef(_onFinishCheckingCode1)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [lengthTiger,setLengthTiger] = useState(0)

    useEffect(() => {
        if (_onFinishCheckingCode1) {
            if (_onFinishCheckingCode1 === "AAAAAAAA" && _onFinishCheckingCode1.length === 8) {
                    props.navigation.replace("gameTigerTwoInput")
            }
        }
    }, [_onFinishCheckingCode1])

    useEffect(() => {
        handle()
    }, [])

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
            console.log(response)

            // setLengthTiger(response.data.character.question_word)
            // setData(response.data.character)
            setLoading(false)
        } catch (e) {
            console.log(e.message)
            setLoading(false)
        }
    }

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <HeaderZooziez propsNavigation={props.navigation}/>
            <Back navigationProps={props.navigation}/>
            <Cloud
                textOne={data.question_word ? data.question_word : ""}
                textTwo={"GENEROUS"}
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
                    codeLength={lengthTiger.length ?lengthTiger.length : 0}
                    codeInputStyle={{
                        borderWidth: 1,
                        borderColor: _onFinishCheckingCode1 === "AAAAAAAA" && _onFinishCheckingCode1 ? "green" : _onFinishCheckingCode1 ? "red" : "#F19100",
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
            <Loading loading={loading}/>
        </ScrollView>
    )
}
