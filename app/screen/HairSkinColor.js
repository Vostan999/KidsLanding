import React from "react"
import {View, Text, Image, ScrollView, StatusBar} from "react-native"
import {GContent} from "../styles/gContent/gContent";
import Leaf from "../component/leaf/Leaf";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import {styles} from "../styles/hairSkinColor/HairSkinColorStyles";
import {ColorHairDataFunc, ColorSkinDataFunc} from "../component/data/Data";
import Footer from "../component/footer/Footer";


export default function HairSkinColor(props) {

    return(
        <ScrollView contentContainerStyle={GContent.ScroolViewALl} >
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <HeaderZooziez />
            <View style={styles.container}>
                <Text style={styles.helloText}>Hello, Zuzie</Text>
                <Image source={require("../assets/image/Union.png")} style={styles.imgBaby}/>
            </View>
            <View style={styles.colorView}>
                <Text style={styles.chooseText}>Choose Hair Color</Text>
                <ScrollView horizontal contentContainerStyle={styles.colorContainer}>
                <ColorHairDataFunc />
                </ScrollView>
            </View>
            <View style={styles.colorView}>
                <Text style={styles.chooseText}>Choose Skin Color</Text>
                <ScrollView horizontal contentContainerStyle={styles.colorContainer}>
                    <ColorSkinDataFunc />
                </ScrollView>
            </View>
            <Footer NavigationProps={props}/>
            <Leaf />
        </ScrollView>
    )

}
