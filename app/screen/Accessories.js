import React, {useState} from "react";
import {ScrollView, StatusBar, Text, View} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Footer from "../component/footer/Footer";
import Leaf from "../component/leaf/Leaf";

import {styles} from "../styles/accessoriesStyles/AccessoriesStyles";
import {AccessoriesDataFunc, BotasDataFunc} from "../component/data/Data";
import HeaderBaby from "../svg/newBabyPuzzle/HeaderBaby";
import Middle from "../svg/newBabyPuzzle/Middle";
import Knee from "../svg/newBabyPuzzle/Knee";
import FootLeft from "../svg/newBabyPuzzle/FootLeft";
import FootRight from "../svg/newBabyPuzzle/FootRight";



export default function Accessories(props) {
    const [BotasLeft, setBotasLeft] = useState()
    let BotasLeftMap = (item) => {
        setBotasLeft(item)
    }
    const [BotasRight, setBotasRight] = useState()
    let BotasRightMap = (item) => {
        setBotasRight(item)
    }

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <HeaderZooziez/>
            <Text style={styles.textHello}>Hello, Zuzie</Text>
            <View style={{justifyContent: "center", alignItems: "center",position:"relative"}}>
                <HeaderBaby/>
                <View style={{position:"relative",zIndex:100}}>
                    <Middle/>
                </View>
                <View style={{position:"relative"}}>
                    <Knee />
                </View>
                <View style={{flexDirection: "row"}}>
                    <FootLeft BotasLeft={BotasLeft}/>
                    <FootRight BotasRight={BotasRight}/>
                </View>
            </View>
            <View style={[styles.boatasView,{marginTop:25}]}>
                <Text style={styles.scrolText}>Choose Clothing</Text>
                <ScrollView horizontal contentContainerStyle={styles.shoesView}>
                <BotasDataFunc
                    BotasRightMap={BotasRightMap}
                    BotasLeftMap={BotasLeftMap}
                />
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
