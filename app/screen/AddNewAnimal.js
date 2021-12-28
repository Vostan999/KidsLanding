import React, {createContext} from "react";
import {Image, ScrollView, StatusBar, Text, TouchableOpacity, View, Linking} from "react-native";
import {styles} from "../styles/charachter/CharacterStyles";
import Leaf from "../component/leaf/Leaf";
import {GContent} from "../styles/gContent/gContent";
import {AddAnimalDataFunc} from "../component/data/Data";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ContextValue1 = createContext()
export default function AddNewAnimal(props) {

    const handle = async () => {
        await AsyncStorage.removeItem("token")
        props.navigation.replace("login")
    }

    let babyData = async () => {
        try {
            let data = await AsyncStorage.getItem("svg");
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
               mini:data.mini
            })
        } else if (!data) {
            props.navigation.navigate("zookeeper")
        }
    }

    return (
        <ContextValue1.Provider value={props.navigation}>
            <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
                <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
                <View style={styles.welcomeTextView}>
                    <Text style={styles.welcomeText}>WELCOME</Text>
                    <Text style={styles.to}>To</Text>
                    <Image source={require("../assets/image/Zooziez.png")} style={GContent.zoozieImage}/>
                    <Text style={styles.characterText}>Pick Your Character</Text>
                    <View style={styles.animalViewTillyGeorge}>
                        <AddAnimalDataFunc/>
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
                    <TouchableOpacity onPress={() => {
                        zookeper()
                    }}>
                        <Text style={styles.title1}>MY ZOOKEEPER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate("editPassword")
                    }}>
                        <Text style={styles.title2}>Edit Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        handle()
                    }}>
                        <Text>Log Out</Text>
                    </TouchableOpacity>
                </View>
                <Leaf
                    Leaf={require("../assets/image/leaf.png")}
                    leaf4={require("../assets/image/leaf.png")}
                    leaf3={require("../assets/image/leaf.png")}
                />
            </ScrollView>
        </ContextValue1.Provider>
    )
}
