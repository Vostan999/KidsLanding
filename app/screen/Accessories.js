import React, {useState} from "react";
import {Image, ScrollView, StatusBar, Text, View} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Footer from "../component/footer/Footer";
import Leaf from "../component/leaf/Leaf";
import {styles} from "../styles/accessoriesStyles/AccessoriesStyles";
import {AccessoriesDataBoyFunc, AccessoriesDataFunc, BotasDataBoyFunc, BotasDataFunc} from "../component/data/Data";
import HeaderBaby from "../svg/newBabyPuzzle/HeaderBaby";
import Middle from "../svg/newBabyPuzzle/Middle";
import Knee from "../svg/newBabyPuzzle/Knee";
import Foot from "../svg/newBabyPuzzle/Foot";
import PuzzleBaby from "../component/puzzlebaby/PuzzleBaby";


export default function Accessories(props) {
    const [botas, setBotas] = useState()
    const name = props.route.params.name
    const baby = props.route.params.baby
    const hairColor = props.route.params.hairColor
    const skinColor = props.route.params.skinColor
    const shirtShoes = props.route.params.shirtShoes
    const trouserShoes = props.route.params.trouserShoes

    let botasFunc = (item) => {
        setBotas(item)
    }

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <HeaderZooziez/>
            <Text style={styles.textHello}>Hello, {name}</Text>
            <PuzzleBaby
                shirtShoes={shirtShoes}
                trouserShoes={trouserShoes}
                skinColor={skinColor}
                baby={baby}
                hairColor={hairColor}
                botas={botas}
            />
            <View style={[styles.boatasView, {marginTop: 25}]}>
                <Text style={styles.scrolText}>Choose Clothing</Text>
                <ScrollView horizontal contentContainerStyle={styles.shoesView}>
                    {baby === "boy" ?
                    <BotasDataBoyFunc
                        botasFunc={botasFunc}
                    />
                        :
                        <BotasDataFunc
                            botasFunc={botasFunc}
                        />
                    }

                </ScrollView>
            </View>
            <View style={styles.boatasView}>
                <Text style={styles.scrolText}>Choose Accessories</Text>
                <ScrollView horizontal contentContainerStyle={styles.shoesView}>
                    {baby === "boy" ?
                    <AccessoriesDataBoyFunc />
                        :
                        <AccessoriesDataFunc/>
                    }

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
