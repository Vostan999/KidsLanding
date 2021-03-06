import React, {createContext, useEffect, useState} from "react";
import {Image, ScrollView, StatusBar, Text, TouchableOpacity, View, Linking} from "react-native";
import {styles} from "../styles/charachter/CharacterStyles";
import Leaf from "../component/leaf/Leaf";
import {GContent} from "../styles/gContent/gContent";
import {AddAnimalDataFunc} from "../component/data/Data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../networking/axiosinstance";
import Loading from "../component/loading/Loading";
import {useSelector} from "react-redux";
import Button from "../component/button/Button";

export const ContextValue1 = createContext()
export default function AddNewAnimal(props) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const store = useSelector((state) => state.customer)

    useEffect(() => {
        animal()
    }, [])

    const animal = async () => {
        setLoading(true)
        try {
            const response = await axiosInstance.get("getUserCharacters")
            setData(response.data.character)
            setLoading(false)
        } catch (e) {
            console.log(e.response)
            setLoading(false)
        }
    }

    const handle = async () => {
        await AsyncStorage.removeItem("token")
        props.navigation.replace("login")
    }

    let babyData = async () => {
        try {
            let data = await AsyncStorage.getItem(`${store}`);
            return JSON.parse(data)
        } catch (error) {
            console.log(error);
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
                shirtShoes: data.shirtShoes,
                mini: data.mini
            })
        } else if (!data) {
            props.navigation.navigate("zookeeper")
        }
    }

    return (
        <ContextValue1.Provider value={props.navigation}>
            <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
                <StatusBar
                    backgroundColor={"white"}
                    barStyle={"dark-content"}/>
                <View style={styles.welcomeTextView}>
                    <Text style={styles.welcomeText}>WELCOME</Text>
                    <Text style={styles.to}>To</Text>
                    <View style={styles.zooziezImage}>
                        <Image source={require("../assets/image/Zooziez.png")} style={GContent.zoozieImage}/>
                    </View>
                    <Text style={styles.characterText}>Pick Your Character</Text>
                    <View style={styles.animalViewTillyGeorge}>
                        <AddAnimalDataFunc
                            data={data}
                        />
                        <TouchableOpacity
                            style={styles.animalView}
                            onPress={() => {
                                props.navigation.navigate("character")
                            }}>
                            <View style={styles.container}>
                                <Image source={require("../assets/image/qrIcon.png")} style={{width: 24, height: 24}}/>
                                <Text style={styles.animalName}>Add a new animal</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Button
                        title={"MY ZOOKEEPER"}
                        borderWidth={1}
                        borderColor={"#D56638"}
                        color={"#D56638"}
                        marginHorizontal={40}
                        marginVertical={10}
                        onPress={() => {
                            zookeper()
                        }}/>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate("editPassword")
                    }}>
                        <Text style={styles.title2}>Edit Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        handle()
                    }}>
                        <Text style={styles.title2}>Log Out</Text>
                    </TouchableOpacity>
                </View>
                <Leaf
                    Leaf={require("../assets/image/leaf.png")}
                    leaf4={require("../assets/image/leaf.png")}
                    leaf3={require("../assets/image/leaf.png")}
                />
            </ScrollView>
            <Loading loading={loading}/>
        </ContextValue1.Provider>
    )
}
