import React, {useState} from "react"
import {ScrollView, StatusBar, Text, View} from "react-native"
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import {styles} from "../styles/shoes/ShoesStyles";
import {ShirtDataFunc, TrouserDataFunc} from "../component/data/Data";
import Leaf from "../component/leaf/Leaf";
import Footer from "../component/footer/Footer";
import HeaderBaby from "../svg/newBabyPuzzle/HeaderBaby";
import Knee from "../svg/newBabyPuzzle/Knee";
import FootRight from "../svg/newBabyPuzzle/FootRight";
import FootLeft from "../svg/newBabyPuzzle/FootLeft";
import Middle from "../svg/newBabyPuzzle/Middle";

export default function (props) {
    const [shirtShoes, setShirtShoes] = useState()
    let shirtShoesMap = (item) => {
        setShirtShoes(item)
    }
    const [trouserShoes,setTrouserShoes] = useState()
    let trouserShoesMap = (item) => {
        setTrouserShoes(item)
    }
    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <HeaderZooziez/>
            <Text style={styles.textHello}>Hello, Zuzie</Text>
            <View style={{justifyContent: "center", alignItems: "center",position:"relative"}}>
                <HeaderBaby/>
                <View style={{position:"relative",zIndex:100}}>
                    <Middle shirtShoes={shirtShoes}/>
                </View>
                    <View style={{position:"relative"}}>
                        <Knee trouserShoes={trouserShoes}/>
                    </View>
                <View style={{flexDirection: "row"}}>
                    <FootLeft/>
                    <FootRight/>
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
