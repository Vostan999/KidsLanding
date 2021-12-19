import React, {useState} from "react"
import {Image, ScrollView, StatusBar, Text, View} from "react-native"
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import {styles} from "../styles/shoes/ShoesStyles";
import {ShirtDataBoyFunc, ShirtDataFunc, TrouserDataBoyFunc, TrouserDataFunc} from "../component/data/Data";
import Leaf from "../component/leaf/Leaf";
import Footer from "../component/footer/Footer";
import PuzzleBaby from "../component/puzzlebaby/PuzzleBaby";

export default function (props) {
    const [shirtShoes, setShirtShoes] = useState()
    const skinColor = props.route.params.skinColor
    const name = props.route.params.name
    const baby = props.route.params.baby
    const hairColor = props.route.params.hairColor
    const botas = props.route.params.botas

    let shirtShoesMap = (item) => {
        setShirtShoes(item)
    }
    const [trouserShoes, setTrouserShoes] = useState()
    let trouserShoesMap = (item) => {
        setTrouserShoes(item)
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
            <View style={styles.colorView}>
                <Text style={styles.text}>Choose Clothing</Text>
                <ScrollView horizontal contentContainerStyle={styles.shoesView}>
                    {baby === "boy" ?
                    <ShirtDataBoyFunc
                        shirtShoesMap={shirtShoesMap}
                    />
                        :
                        <ShirtDataFunc
                            shirtShoesMap={shirtShoesMap}
                        />
                    }
                </ScrollView>
            </View>
            <View style={[styles.colorView, styles.colorView2]}>
                <ScrollView horizontal contentContainerStyle={styles.shoesView}>
                    {baby === "boy" ?
                        <TrouserDataBoyFunc
                            trouserShoesMap={trouserShoesMap}
                        />
                        :
                        <TrouserDataFunc
                            trouserShoesMap={trouserShoesMap}
                        />
                    }
                </ScrollView>
            </View>
            <Footer
                NavigationProps={props}
                text={"accessories"}
                name={name}
                baby={baby}
                hairColor={hairColor}
                skinColor={skinColor}
                shirtShoes={shirtShoes}
                trouserShoes={trouserShoes}
            />
            <Leaf/>
        </ScrollView>
    )
}
