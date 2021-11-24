import React from "react"
import {View, Text, ScrollView, StatusBar, Image} from "react-native"
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import {styles} from "../styles/shoes/ShoesStyles";
import {ShirtDataFunc,TrouserDataFunc} from "../component/data/Data";
import Leaf from "../component/leaf/Leaf";
import Footer from "../component/footer/Footer";

export default function (props) {
    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <HeaderZooziez/>
            <View style={styles.container}>
                <Text style={styles.textHello}>Hello, Zuzie</Text>
                <Image source={require("../assets/image/unionShoes.png")} style={styles.baby}/>
            </View>
            <View style={styles.colorView}>
                <Text style={styles.text}>Choose Clothing</Text>
                <ScrollView horizontal contentContainerStyle={styles.shoesView}>
                    <ShirtDataFunc />
                </ScrollView>
            </View>
            <View style={[styles.colorView,styles.colorView2 ]}>
                <ScrollView horizontal contentContainerStyle={styles.shoesView}>
                <TrouserDataFunc />
                </ScrollView>
            </View>
            <Footer  NavigationProps={props} text={"zookeeperName"}/>
            <Leaf />
        </ScrollView>
    )
}
