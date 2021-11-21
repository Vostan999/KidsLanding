import React from "react";
import {ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Leaf from "../component/leaf/Leaf";
import Cloud from "../component/cloud/Cloud";
import {GContent} from "../styles/gContent/gContent";
import {styles} from "../styles/gameTwoStyles/GameTwoStyles";
import {GameTwoDataFunc} from "../component/data/Data";


export default function GameTwo() {
    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"rgb(250, 250, 250)"} barStyle={"dark-content"}/>
            <View style={styles.allView}>
                <HeaderZooziez/>
                <Cloud
                    textOne={"What does it mean to be"}
                    textTwo={"Generous?"}
                />
                <GameTwoDataFunc />
            </View>
            <Leaf
                leaf4={require("../assets/image/leaf.png")}
            />
        </ScrollView>
    )
}
