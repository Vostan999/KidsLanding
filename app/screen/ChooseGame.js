import React, {createContext, useEffect, useState} from "react";
import {Image, ScrollView, StatusBar, Text, TouchableOpacity, View, Linking} from "react-native";
import {styles} from "../styles/chooseGameStyles/chooseGameStyles";
import Leaf from "../component/leaf/Leaf";
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Button from "../component/button/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../networking/axiosinstance";
import Loading from "../component/loading/Loading";

export const ContextValue = createContext()

export default function ChooseGame(props) {
    const [name,setName] = useState("")
    const [loading,setLoading] = useState(false)

    let babyData = async () => {
        try {
            let data = await AsyncStorage.getItem("svg");
            return JSON.parse(data)
        } catch (error) {
            console.log(error);
        }
    }

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
        setLoading(true)
        const id = await idAnimal()
        try {
            const response = await axiosInstance.get(`/questionmulti/${id}`)
            setLoading(false)
            setName(response.data.character.title)

        } catch (e) {
            console.log(e.message)
            setLoading(false)
        }
    }

    const zookeper = async () => {
        const data = await babyData()
        if (data) {
            props.navigation.navigate("finishPage", {
                baby: data.baby,
                hairColor: data.hairColor,
                skinColor: data.skinColor,
                name: data.name,
                accessories: data.accessories,
                trouserShoes: data.trouserShoes,
                accessoriesName: data.accessoriesName,
                botas: data.botas,
                shirtShoes: data.shirtShoes
            })
        } else if (!data) {
            props.navigation.navigate("zookeeper")
        }
    }

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <View style={styles.container}>
                <View>
                    <HeaderZooziez propsNavigation={props.navigation}/>
                    <Text style={styles.characterText}>Pick Your Character</Text>
                    <Text style={styles.welcomeText}>George`s Games</Text>
                    <Button
                        title={"GAME 1"}
                        borderWidth={1}
                        marginVertical={20}
                        borderColor={"#D56638"}
                        color={"#D56638"}
                        marginHorizontal={40}
                        onPress={() => {
                            name === "George" ?
                            props.navigation.navigate("gameOne")
                                :
                                props.navigation.navigate("gameTigerOneInput")
                        }}
                    />
                    <Button
                        title={"GAME 2"}
                        borderWidth={1}
                        borderColor={"#D56638"}
                        color={"#D56638"}
                        marginHorizontal={40}
                        marginBottom={37}
                        onPress={() => {
                            name === "George" ?
                            props.navigation.navigate("gameTwo")
                                :
                                props.navigation.navigate("gameTigerOne")
                        }}
                    />
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate("addNewAnimal")
                    }}>
                        <Text style={styles.contText}>BACK TO MY ZOOPARK</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => {
                        zookeper()
                    }}>
                        <Text style={styles.contText}>MY ZOOKEEPER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate("editPassword")
                    }}>
                        <Text style={[styles.contText, {marginBottom: 40, marginTop: 27}]}>EDIT SETINGS</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Leaf/>
            <Loading loading={loading}/>
        </ScrollView>
    )
}
