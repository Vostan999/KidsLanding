import React, {useState, useEffect} from "react";
import {ScrollView, StatusBar, View} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Cloud from "../component/cloud/Cloud";
import {GameTigerTwoFunc} from "../component/data/Data";
import Leaf from "../component/leaf/Leaf";
import {styles} from "../styles/gameThreeStyles/GameThreeStyles";
import Back from "../component/back/Back";
import axiosInstance from "../networking/axiosinstance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../component/loading/Loading";

export default function GameTigerThree(props) {

    const [data, setData] = useState([{}])
    const [question, setQuestion] = useState("")
    const [characterImage, setCharacterImage] = useState()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        handle()
    }, [])

    const handle = async () => {
        setLoading(true)
        const id = await idAnimal()
        try {
            const response = await axiosInstance.get(`/questionimage/${id}`)
            setCharacterImage(response.data.character.img)
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
            <View style={styles.threeView}>
                <HeaderZooziez propsNavigation={props.navigation}/>
                <Back navigationProps={props.navigation}/>
                <Cloud
                    textOne={question}
                    textTwo={"Trustworthy?"}
                    characterImage={characterImage}
                />
                <GameTigerTwoFunc
                    propsNavigation={props}
                    data={data}
                    text={"good"}
                />
                <Leaf
                    leaf3={require("../assets/image/leaf.png")}
                />
            </View>
            <Loading loading={loading}/>
        </ScrollView>
    )
}
