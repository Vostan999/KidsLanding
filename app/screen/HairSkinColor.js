import React, {useState} from "react"
import {View, Text, Image, ScrollView, StatusBar} from "react-native"
import {GContent} from "../styles/gContent/gContent";
import Leaf from "../component/leaf/Leaf";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import {styles} from "../styles/hairSkinColor/HairSkinColorStyles";
import {ColorHairDataBoyFunc, ColorHairDataFunc, ColorSkinDataBoyFunc, ColorSkinDataFunc} from "../component/data/Data";
import Footer from "../component/footer/Footer";
import Girl from "../svg/transparentGirl/Girl";
import Boy from "../svg/transparentGirl/Boy";
import ColorSkinBoyDataMap from "../component/dataMap/ColorSkinBoyDataMap";
import ColorHairDataBoyMap from "../component/dataMap/ColorHairDataBoyMap";


export default function HairSkinColor(props) {
    const baby = props.route.params.baby
    const name = props.route.params.name
    const [skinColor, setSkinColor] = useState("#FFC8AC")
    const [hairColor, setHairColor] = useState("#CC5440")

    const skinColorFunc = (item) => {
        setSkinColor(item)
    }
    const setHairColorFunc = (item) => {
        setHairColor(item)
    }

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <HeaderZooziez/>
            <View style={styles.container}>
                <Text style={styles.helloText}>Hello, {name}</Text>

                <Boy
                    skinColor={skinColor}
                    hairColor={hairColor}
                    baby={baby}
                />
            </View>
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
            />
            <Leaf/>
        </ScrollView>
    )

}
