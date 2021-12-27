import React, {useState} from "react"
import { ScrollView, StatusBar, Text, View} from "react-native"
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import {styles} from "../styles/shoes/ShoesStyles";
import {ShirtDataBoyFunc, ShirtDataFunc, TrouserDataBoyFunc, TrouserDataFunc} from "../component/data/Data";
import Leaf from "../component/leaf/Leaf";
import Footer from "../component/footer/Footer";
import PuzzleBaby from "../component/puzzlebaby/PuzzleBaby";

export default function (props) {
    const [shirtShoes, setShirtShoes] = useState(props.route.params.shirtShoes ? props.route.params.shirtShoes : null)
    const [trouserShoes, setTrouserShoes] = useState(props.route.params.trouserShoes ? props.route.params.trouserShoes : null)
    const skinColor = props.route.params.skinColor
    const name = props.route.params.name
    const baby = props.route.params.baby
    const hairColor = props.route.params.hairColor
    const botas = props.route.params.botas
    const accessories = props.route.params.accessories
    const accessoriesName = props.route.params.accessoriesName

    let shirtShoesMap = (item) => {
        setShirtShoes(item)
    }

    let trouserShoesMap = (item) => {
        setTrouserShoes(item)
    }

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <HeaderZooziez propsNavigation={props.navigation}/>
            <Text style={styles.textHello}>Hello, {name}</Text>
            <PuzzleBaby
                shirtShoes={shirtShoes}
                trouserShoes={trouserShoes}
                skinColor={skinColor}
                baby={baby}
                hairColor={hairColor}
                botas={botas}
                accessoriesName={accessoriesName}
                accessories={accessories}
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
                            baby={baby}
                        />
                        :
                        <TrouserDataFunc
                            trouserShoesMap={trouserShoesMap}
                            baby={baby}
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
                accessories={accessories}
                accessoriesName={accessoriesName}
            />
            <Leaf/>
        </ScrollView>
    )
}
