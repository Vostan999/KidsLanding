import React, {createContext, useEffect, useState} from "react";
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
                        props.navigation.navigate("zookeeper")
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
