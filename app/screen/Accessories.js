import React, {useState} from "react";
import {Image, ScrollView, StatusBar, Text, View} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Footer from "../component/footer/Footer";
import Leaf from "../component/leaf/Leaf";
import {styles} from "../styles/accessoriesStyles/AccessoriesStyles";
import {AccessoriesDataFunc, BotasDataFunc} from "../component/data/Data";
import HeaderBaby from "../svg/newBabyPuzzle/HeaderBaby";
import Middle from "../svg/newBabyPuzzle/Middle";
import Knee from "../svg/newBabyPuzzle/Knee";
import Foot from "../svg/newBabyPuzzle/Foot";




export default function Accessories(props) {
    const [botas, setBotas] = useState()
    let botasFunc = (item) => {
        setBotas(item)
    }

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <HeaderZooziez/>
            <Text style={styles.textHello}>Hello, Zuzie</Text>
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <HeaderBaby/>
                <View style={{alignItems:'center'}}>
                    <Middle />
                    <View style={{position:'absolute',alignSelf:'center',zIndex:2}}>
                        <Image />
                    </View>
                    <Knee />
                    <View style={{alignSelf: 'center', position: 'absolute', top: 33, zIndex: 1}}>
                        <Image />
                    </View>
                </View>
                <View style={{ justifyContent:"center",}}>
                    <Foot botas={botas}/>
                    <View style={{
                      alignSelf:"center",
                        position:"absolute",


                    }}>
                        <Image  source={botas} style={{}}/>
                    </View>
                </View>
            </View>
            <View style={[styles.boatasView,{marginTop:25}]}>
                <Text style={styles.scrolText}>Choose Clothing</Text>
                <ScrollView horizontal contentContainerStyle={styles.shoesView}>
                <BotasDataFunc
                    botasFunc={botasFunc}
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
