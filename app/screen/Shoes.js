import React, {useState} from "react"
import {ScrollView, StatusBar, Text, View} from "react-native"
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import {styles} from "../styles/shoes/ShoesStyles";
import {ShirtDataFunc, TrouserDataFunc} from "../component/data/Data";
import Leaf from "../component/leaf/Leaf";
import Footer from "../component/footer/Footer";
import Foot from "../svg/boyPuzzle/Foot";
import MiddleBaby from "../svg/boyPuzzle/MiddleBaby";
import HeaderBaby from "../svg/boyPuzzle/HeaderBaby";


export default function (props) {


    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <HeaderZooziez/>
            <Text style={styles.textHello}>Hello, Zuzie</Text>
            <View style={[styles.container]}>
                <HeaderBaby/>
                <MiddleBaby/>
                <View style={{marginTop: -.4}}>
                    <Foot/>
                </View>
            </View>
            <View style={styles.colorView}>
                <Text style={styles.text}>Choose Clothing</Text>
                <ScrollView horizontal contentContainerStyle={styles.shoesView}>
                    <ShirtDataFunc/>
                </ScrollView>
            </View>
            <View style={[styles.colorView, styles.colorView2]}>
                <ScrollView horizontal contentContainerStyle={styles.shoesView}>
                    <TrouserDataFunc/>
                </ScrollView>
            </View>
            <Footer
                NavigationProps={props}
                text={"accessories"}
            />
            <Leaf/>
        </ScrollView>
    )
}
