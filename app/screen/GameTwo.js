import React, {useEffect, useState} from "react";
import {ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Leaf from "../component/leaf/Leaf";
import Cloud from "../component/cloud/Cloud";
import {GContent} from "../styles/gContent/gContent";
import {styles} from "../styles/gameTwoStyles/GameTwoStyles";
import {GameTwoDataFunc} from "../component/data/Data";
import Back from "../component/back/Back";
import axiosInstance from "../networking/axiosinstance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../component/loading/Loading";


export default function GameTwo(props) {
    const [data, setData] = useState([{}])
    const [question, setQuestion] = useState("")
    const [characterImage, setCharacterImage] = useState()
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        handle()
    }, [])

    const handle = async () => {
        setLoading(true)
        const id = await idAnimal()
        try {
            const response = await axiosInstance.get(`/questionsingle/${id}`)
            setCharacterImage(response.data.character.img)
            console.log(response.data)
            setQuestion(response.data.question.question)
            setData([...response.data.question.answers])
            setLoading(false)
        } catch (e) {
            console.log(e.message)
            setLoading(false)
        }
    }

    let idAnimal = async () => {
        try {
            let data = await AsyncStorage.getItem("animalId");
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <View style={styles.allView}>
                <Back navigationProps={props.navigation}/>
                <Cloud
                    characterImage={characterImage}
                    textOne={question}
                    textTwo={"Generous?"}
                />
                <GameTwoDataFunc twoProps={props} data={data}/>
            </View>
            <Leaf
                leaf4={require("../assets/image/leaf.png")}
                leaf3={require("../assets/image/leaf.png")}
            />
            <Loading  loading={loading}/>
        </ScrollView>
    )
}
