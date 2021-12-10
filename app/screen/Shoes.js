import React, {useState} from "react"
import {Image, ScrollView, StatusBar, Text, View} from "react-native"
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import {styles} from "../styles/shoes/ShoesStyles";
import {ShirtDataFunc, TrouserDataFunc} from "../component/data/Data";
import Leaf from "../component/leaf/Leaf";
import Footer from "../component/footer/Footer";
import HeaderBaby from "../svg/newBabyPuzzle/HeaderBaby";
import Knee from "../svg/newBabyPuzzle/Knee";
import Foot from "../svg/newBabyPuzzle/Foot";
import Middle from "../svg/newBabyPuzzle/Middle";

export default function (props) {
    const [shirtShoes, setShirtShoes] = useState()
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
            <Text style={styles.textHello}>Hello, Zuzie</Text>
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <HeaderBaby/>
                <View style={{alignItems:'center'}}>
                        <Middle shirtShoes={shirtShoes} />
                    <View style={{position:'absolute',alignSelf:'center',zIndex:2,top:4}}>
                        <Image source={shirtShoes}/>
                    </View>
                        <Knee trouserShoes={trouserShoes} style={{}}/>
                    <View style={{alignSelf: 'center', position: 'absolute', top: 50, zIndex: 1}}>
                        <Image source={trouserShoes}/>
                    </View>
                </View>
                <View style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
                    <Foot/>
                </View>
            </View>
            <View style={styles.colorView}>
                <Text style={styles.text}>Choose Clothing</Text>
                <ScrollView horizontal contentContainerStyle={styles.shoesView}>
                    <ShirtDataFunc
                        shirtShoesMap={shirtShoesMap}
                    />
                </ScrollView>
            </View>
            <View style={[styles.colorView, styles.colorView2]}>
                <ScrollView horizontal contentContainerStyle={styles.shoesView}>
                    <TrouserDataFunc
                        trouserShoesMap={trouserShoesMap}
                    />
                </ScrollView>
            </View>
            <Footer
                NavigationProps={props}
                text={"accessories"}

            />
            <Leaf/>
        </ScrollView>
    )
}
