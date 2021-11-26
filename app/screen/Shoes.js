import React from "react"
import {View, Text, ScrollView, StatusBar, Image} from "react-native"
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import {styles} from "../styles/shoes/ShoesStyles";
import {ShirtDataFunc, TrouserDataFunc} from "../component/data/Data";
import Leaf from "../component/leaf/Leaf";
import Footer from "../component/footer/Footer";
import HeaderBaby from "../svg/HeaderBaby";
import MiddleBaby from "../svg/MiddleBaby";
import Foot from "../svg/Foot";

export default function (props) {
    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <HeaderZooziez/>
            <Text style={styles.textHello}>Hello, Zuzie</Text>

            <View style={[styles.container,{height:200,width:"100%"}]}>
                <View style={{position:"absolute",zIndex:0}}>
                    <View style={{marginLeft: 12, marginBottom: -2,zIndex:1}}>
                        <HeaderBaby/>
                    </View>
                    <View style={{zIndex:1}}>
                        <MiddleBaby/>
                    </View>

                    <View style={{marginTop: -3, justifyContent: "center", alignItems: "center"}}>
                        <Foot/>
                    </View>
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
            <Footer NavigationProps={props} text={"zookeeperName"}/>
            <Leaf/>
        </ScrollView>
    )
}
