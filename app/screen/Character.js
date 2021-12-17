import React, {createContext, useEffect, useState} from "react";
import {Image, ScrollView, StatusBar, Text, TouchableOpacity, View, Linking} from "react-native";
import {styles} from "../styles/charachter/CharacterStyles";
import Leaf from "../component/leaf/Leaf";
import {GContent} from "../styles/gContent/gContent";
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {AnimalDataFunc} from "../component/data/Data";
import axiosInstance from "../networking/axiosinstance";

export const ContextValue = createContext()
export default function Character(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        handle()
    }, [])

    const handle = async () => {
        try {
            const response = await axiosInstance.get("/characters")
            setData(response.data.characters)
        } catch (e) {
            console.log(e.response)
        }
    }

    return (
        <ContextValue.Provider value={props.navigation}>
            <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
                <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
                <View style={styles.welcomeTextView}>
                    <Text style={styles.welcomeText}>WELCOME</Text>
                    <Text style={styles.to}>To</Text>
                    <Image source={require("../assets/image/Zooziez.png")} style={GContent.zoozieImage}/>
                    <Text style={styles.characterText}>Pick Your Character</Text>
                    <View style={styles.animalViewTillyGeorge}>
                        <AnimalDataFunc data={data}/>
                    </View>
                </View>
                <Leaf
                    Leaf={require("../assets/image/leaf.png")}
                    leaf4={require("../assets/image/leaf.png")}
                    leaf3={require("../assets/image/leaf.png")}
                />
            </ScrollView>
        </ContextValue.Provider>

    )
}
