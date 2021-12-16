import React, {useState} from "react";
import {ScrollView, StatusBar,View} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Cloud from "../component/cloud/Cloud";
import {GameThreeDataFunc} from "../component/data/Data";
import Leaf from "../component/leaf/Leaf";
import {styles} from "../styles/gameThreeStyles/GameThreeStyles";
import Back from "../component/back/Back";
export default function GameThree(props) {

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <View style={styles.threeView}>
                <HeaderZooziez/>
                <Back navigationProps={props.navigation}/>
                <Cloud
                    textOne={"How can you be"}
                    textTwo={"Generous"}
                    textThree={"to your friends?"}
                />
                <GameThreeDataFunc propsNavigation={props}/>
                <Leaf
                    leaf3={require("../assets/image/leaf.png")}
                />
            </View>

        </ScrollView>
    )
}
