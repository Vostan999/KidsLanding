import React, {useState} from "react";
import {ScrollView, StatusBar, TextInput, View} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import Cloud from "../component/cloud/Cloud";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Leaf from "../component/leaf/Leaf";
import {styles} from "../styles/gameOne/GameOne";
import {GameOneDataFunc} from "../component/data/Data";

export default function GameOne() {


    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"rgb(250, 250, 250)"} barStyle={"dark-content"}/>
            <HeaderZooziez/>
            <Cloud
                textOne={"Spell"}
                textTwo={"GENEROUS"}
            />
            <View style={styles.oneInputStyles}>
            <GameOneDataFunc />
            </View>
            <Leaf
            leaf4={require("../assets/image/leaf.png")}
            leaf3={require("../assets/image/leaf.png")}
            />
        </ScrollView>
    )
}
