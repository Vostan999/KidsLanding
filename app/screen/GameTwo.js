import React from "react";
import {ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Leaf from "../component/leaf/Leaf";
import Cloud from "../component/cloud/Cloud";
import {GContent} from "../styles/gContent/gContent";
import {styles} from "../styles/gameTwoStyles/GameTwoStyles";
import {GameTwoDataFunc} from "../component/data/Data";
import Back from "../component/back/Back";


export default function GameTwo(props) {
    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>

            <View style={styles.allView}>
                <HeaderZooziez/>
                <Back navigationProps={props.navigation}/>
                <Cloud
                    textOne={"What does it mean to be"}
                    textTwo={"Generous?"}
                />
                <GameTwoDataFunc twoProps={props} />
            </View>
            <Leaf
                leaf4={require("../assets/image/leaf.png")}
                leaf3={require("../assets/image/leaf.png")}
            />
        </ScrollView>
    )
}
