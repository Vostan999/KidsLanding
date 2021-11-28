import React, {useState} from "react"
import {View, Text, Image, ScrollView, StatusBar} from "react-native"
import {GContent} from "../styles/gContent/gContent";
import Leaf from "../component/leaf/Leaf";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import {styles} from "../styles/hairSkinColor/HairSkinColorStyles";
import {ColorHairDataFunc, ColorSkinDataFunc} from "../component/data/Data";
import Footer from "../component/footer/Footer";
import Girl from "../svg/transparentGirl/Girl";
import Login from "./Login";


export default function HairSkinColor(props) {

    const [skinColor, setSkinColor] = useState("")
    const [hairColor, setHairColor] = useState("")

    const skinColorFunc = (item) => {
        setSkinColor(item)
    }
    const setHairColorFunc = (item) => {
        setHairColor(item)
    }

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <HeaderZooziez/>
            <View style={styles.container}>
                <Text style={styles.helloText}>Hello, Zuzie</Text>
                <Girl skinColor={skinColor} hairColor={hairColor}/>
            </View>
            <View style={styles.colorView}>
                <Text style={styles.chooseText}>Choose Hair Color</Text>
                <ScrollView horizontal contentContainerStyle={styles.colorContainer}>
                    <ColorHairDataFunc setHairColorFunc={setHairColorFunc}/>
                </ScrollView>
            </View>
            <View style={styles.colorView}>
                <Text style={styles.chooseText}>Choose Skin Color</Text>
                <ScrollView horizontal contentContainerStyle={styles.colorContainer}>
                    <ColorSkinDataFunc skinColorFunc={skinColorFunc}/>
                </ScrollView>
            </View>
            <Footer
                NavigationProps={props}
                text={"shoes"}
            />
            <Leaf/>
        </ScrollView>
    )

}
