import React from "react";
import {Image, ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {styles} from "../styles/charachter/CharacterStyles";
import Leaf from "../component/leaf/Leaf";
import {GContent} from "../styles/gContent/gContent";


export default function Character(props) {

    return (
        <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
                <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
                <View style={styles.welcomeTextView}>
                    <Text style={styles.welcomeText}>WELCOME</Text>
                    <Text style={styles.to}>To</Text>
                    <Image source={require("../assets/image/Zooziez.png")} style={GContent.zoozieImage}/>
                    <Text style={styles.characterText}>Pick Your Character</Text>
                    <TouchableOpacity
                        style={styles.animalView}
                        onPress={() => {
                            props.navigation.navigate("gameOne")
                        }}>
                        <Image source={require("../assets/image/animal.png")} style={{width: 130, height: 214}}/>
                        <Text style={styles.animalName}>George</Text>
                    </TouchableOpacity>
                </View>
                <Leaf
                    Leaf={require("../assets/image/leaf.png")}
                    leaf4={require("../assets/image/leaf.png")}
                    leaf3={require("../assets/image/leaf.png")}
                />
            </ScrollView>
        </View>
    )
}
