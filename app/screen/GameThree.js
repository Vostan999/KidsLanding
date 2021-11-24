import React, {useState} from "react";
import {ScrollView, StatusBar,View} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Cloud from "../component/cloud/Cloud";
import {GameThreeDataFunc} from "../component/data/Data";
import Leaf from "../component/leaf/Leaf";
import {styles} from "../styles/gameThreeStyles/GameThreeStyles";
export default function GameThree() {

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"rgb(250, 250, 250)"} barStyle={"dark-content"}/>
            <View style={styles.threeView}>
                <HeaderZooziez/>
                <Cloud
                    textOne={"How can you be"}
                    textTwo={"Generous"}
                    textThree={"to your friends?"}
                />
                <GameThreeDataFunc />
                <Leaf
                    leaf3={require("../assets/image/leaf.png")}
                />
            </View>

        </ScrollView>
    )
}
