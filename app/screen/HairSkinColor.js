import React, { useState} from "react"
import {View, Text, ScrollView, StatusBar} from "react-native"
import {GContent} from "../styles/gContent/gContent";
import Leaf from "../component/leaf/Leaf";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import {styles} from "../styles/hairSkinColor/HairSkinColorStyles";
import {ColorHairDataBoyFunc, ColorHairDataFunc, ColorSkinDataBoyFunc, ColorSkinDataFunc} from "../component/data/Data";
import Footer from "../component/footer/Footer";
import PuzzleBaby from "../component/puzzlebaby/PuzzleBaby";



export default function HairSkinColor(props) {

    const baby = props.route.params.baby
    const shirtShoes = props.route.params.shirtShoes
    const trouserShoes = props.route.params.trouserShoes
    const botas = props.route.params.botas
    const accessories = props.route.params.accessories
    const name = props.route.params.name
    const mini = props.route.params.mini
    const [skinColor, setSkinColor] = useState(props.route.params.skinColor ? props.route.params.skinColor : "#FFC8AC")
    const [hairColor, setHairColor] = useState(props.route.params.hairColor ? props.route.params.hairColor : "#CC5440")

    const skinColorFunc = (item) => {
        setSkinColor(item)
    }

    const setHairColorFunc = (item) => {
        setHairColor(item)
    }

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar
                backgroundColor={"white"}
                barStyle={"dark-content"}
            />
            <HeaderZooziez
                propsNavigation={props.navigation}
            />
                <Text style={styles.helloText}>Hello, {name}</Text>
            <PuzzleBaby
                accessories={accessories}
                shirtShoes={shirtShoes}
                trouserShoes={trouserShoes}
                skinColor={skinColor}
                baby={baby}
                hairColor={hairColor}
                botas={botas}
                mini={mini}
            />
            <View style={styles.colorView}>
                <Text style={styles.chooseText}>Choose Hair Color</Text>
                <ScrollView horizontal contentContainerStyle={styles.colorContainer}>
                    {baby === "boy" ?
                        <ColorHairDataBoyFunc
                            setHairColorFunc={setHairColorFunc}
                        />
                        :
                        <ColorHairDataFunc
                            setHairColorFunc={setHairColorFunc}
                        />
                    }
                </ScrollView>
            </View>
            <View style={styles.colorView}>
                <Text style={styles.chooseText}>Choose Skin Color</Text>
                <ScrollView horizontal contentContainerStyle={styles.colorContainer}>
                    {baby === "boy" ?
                        <ColorSkinDataBoyFunc
                            skinColorFunc={skinColorFunc}
                        />
                        :
                        <ColorSkinDataFunc
                            skinColorFunc={skinColorFunc}
                        />
                    }
                </ScrollView>
            </View>
            <Footer
                NavigationProps={props}
                text={"shoes"}
                skinColor={skinColor}
                hairColor={hairColor}
                name={name}
                baby={baby}
                shirtShoes={shirtShoes}
                accessories={accessories}
                trouserShoes={trouserShoes}
                botas={botas}
                mini={mini}
            />
            <Leaf/>
        </ScrollView>
    )

}
