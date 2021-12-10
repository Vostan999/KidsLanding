import React from "react"
import {View, Text, ScrollView, StatusBar} from "react-native"
import {GContent} from "../styles/gContent/gContent";
import Leaf from "../component/leaf/Leaf";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import {ZooparkFunc} from "../component/data/Data";
import {styles} from "../styles/zooparkStyles/ZooparkStyles";

export default function Zoopark() {
    return (
        <ScrollView style={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <HeaderZooziez/>
            <Text style={styles.hello}>Hello, Zuzie</Text>
            <Text style={styles.myZoopark}>My Zoopark</Text>
            <View style={styles.zooparkMap}>
            <ZooparkFunc/>
            </View>
            <Leaf/>
        </ScrollView>

    )
}
