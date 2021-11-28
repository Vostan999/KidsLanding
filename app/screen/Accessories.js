import React from "react";
import {ScrollView, StatusBar, Text, View} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Footer from "../component/footer/Footer";
import Leaf from "../component/leaf/Leaf";
import HeaderBaby from "../svg/boyPuzzle/HeaderBaby";
import MiddleBaby from "../svg/boyPuzzle/MiddleBaby";
import Foot from "../svg/boyPuzzle/Foot";
import {styles} from "../styles/accessoriesStyles/AccessoriesStyles";
import {AccessoriesDataFunc, BotasDataFunc} from "../component/data/Data";



export default function Accessories(props) {
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
            <View style={[styles.boatasView,{marginTop:25}]}>
                <Text style={styles.scrolText}>Choose Clothing</Text>
                <ScrollView horizontal contentContainerStyle={styles.shoesView}>
                <BotasDataFunc />
                </ScrollView>
            </View>
            <View style={styles.boatasView}>
                <Text style={styles.scrolText}>Choose Accessories</Text>
                <ScrollView horizontal contentContainerStyle={styles.shoesView}>
                <AccessoriesDataFunc />
                </ScrollView>
            </View>

            <Footer
                NavigationProps={props}
                text={"finishPage"}
            />
            <Leaf/>
        </ScrollView>
    )
}
