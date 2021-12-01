import React, {createContext} from "react";
import {Image, ScrollView, StatusBar, Text, TouchableOpacity, View, Linking} from "react-native";
import {styles} from "../styles/charachter/CharacterStyles";
import Leaf from "../component/leaf/Leaf";
import {GContent} from "../styles/gContent/gContent";
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {AnimalDataFunc} from "../component/data/Data";

export const ContextValue = createContext()
export default function Character(props) {

    return (
        <ContextValue.Provider value={props.navigation}>
            <View style={{flex: 1}}>
                <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
                    <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
                    <View style={styles.welcomeTextView}>
                        <Text style={styles.welcomeText}>WELCOME</Text>
                        <Text style={styles.to}>To</Text>
                        <Image source={require("../assets/image/Zooziez.png")} style={GContent.zoozieImage}/>
                        <Text style={styles.characterText}>Pick Your Character</Text>
                        <View style={styles.animalViewTillyGeorge}>
                            <AnimalDataFunc/>
                        </View>
                    </View>
                    <Leaf
                        Leaf={require("../assets/image/leaf.png")}
                        leaf4={require("../assets/image/leaf.png")}
                        leaf3={require("../assets/image/leaf.png")}
                    />
                </ScrollView>
            </View>
        </ContextValue.Provider>

    )
}
