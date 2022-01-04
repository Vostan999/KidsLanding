import React, {useState} from "react";
import { ScrollView, StatusBar, Text, View} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Footer from "../component/footer/Footer";
import Leaf from "../component/leaf/Leaf";
import {styles} from "../styles/accessoriesStyles/AccessoriesStyles";
import {AccessoriesDataBoyFunc, AccessoriesDataFunc, BotasDataBoyFunc, BotasDataFunc} from "../component/data/Data";
import PuzzleBaby from "../component/puzzlebaby/PuzzleBaby";


export default function Accessories(props) {
    const [botas, setBotas] = useState()
    const [accessories,setAccessoriesFunc] = useState(props.route.params.accessories ? props.route.params.accessories : null)
    const [accessoriesName,setAccessoriesName] = useState(props.route.params.accessoriesName ? props.route.params.accessoriesName : "" )
    const name = props.route.params.name
    const baby = props.route.params.baby
    const hairColor = props.route.params.hairColor
    const skinColor = props.route.params.skinColor
    const shirtShoes = props.route.params.shirtShoes
    const trouserShoes = props.route.params.trouserShoes
    const mini = props.route.params.mini


    let accessoriesNameFunc = (item) => {
        setAccessoriesName(item)
    }

    let botasFunc = (item) => {
        setBotas(item)
    }

    let accessoriesFunc = (item) => {
        setAccessoriesFunc(item)
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
            <Text style={styles.textHello}>Hello, {name}</Text>
            <PuzzleBaby
                accessoriesName={accessoriesName}
                accessories={accessories}
                shirtShoes={shirtShoes}
                trouserShoes={trouserShoes}
                skinColor={skinColor}
                baby={baby}
                hairColor={hairColor}
                botas={botas}
                mini={mini}
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
                    <AccessoriesDataBoyFunc
                        accessoriesFunc={accessoriesFunc}
                        accessoriesNameFunc={accessoriesNameFunc}
                    />
                        :
                        <AccessoriesDataFunc
                            accessoriesFunc={accessoriesFunc}
                            accessoriesNameFunc={accessoriesNameFunc}
                        />
                    }

                </ScrollView>
            </View>
            <Footer
                NavigationProps={props}
                text={"finishPage"}
                name={name}
                baby={baby}
                hairColor={hairColor}
                skinColor={skinColor}
                shirtShoes={shirtShoes}
                trouserShoes={trouserShoes}
                botas={botas}
                accessories={accessories}
                accessoriesName={accessoriesName}
                mini={mini}
            />
            <Leaf/>
        </ScrollView>
    )
}
