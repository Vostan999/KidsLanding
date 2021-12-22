import React from "react";
import {ScrollView, StatusBar, Text, View, TouchableOpacity} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Leaf from "../component/leaf/Leaf";
import Button from "../component/button/Button";
import {styles} from "../styles/finishPage/FinishPageStyles"
import FinishPageBaby from "../svg/finishPageBaby/FinishPageBaby";
import PuzzleBaby from "../component/puzzlebaby/PuzzleBaby";

export default function FinishPage(props) {
    const baby = props.route.params.baby
    const hairColor = props.route.params.hairColor
    const skinColor = props.route.params.skinColor
    const shirtShoes = props.route.params.shirtShoes
    const trouserShoes = props.route.params.trouserShoes
    const botas = props.route.params.botas
    const accessories = props.route.params.accessories
    const accessoriesName = props.route.params.accessoriesName
    const name = props.route.params.name

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <HeaderZooziez propsNavigation={props.navigation}/>
            <Text style={styles.textHello}>Hello {name}</Text>
            <View style={styles.bigBaby}>
                <PuzzleBaby
                    shirtShoes={shirtShoes}
                    trouserShoes={trouserShoes}
                    skinColor={skinColor}
                    baby={baby}
                    hairColor={hairColor}
                    botas={botas}
                    accessories={accessories}
                    accessoriesName={accessoriesName}
                />
            </View>
            <Button
                title={"EDIT CHARACTER"}
                borderColor={"#F19100"}
                borderWidth={1}
                color={"#F19100"}
                marginHorizontal={40}
                marginVertical={20}
                onPress={() => {
                    props.navigation.navigate("hairSkinColor", {
                        baby: baby,
                        name: name,
                        trouserShoes:trouserShoes,
                        shirtShoes:shirtShoes,
                        botas:botas,
                        accessories:accessories,
                        accessoriesName:accessoriesName
                    })
                }}
            />
            <TouchableOpacity onPress={() => {
                props.navigation.navigate("zookeeper")
            }}>
                <Text style={[styles.zooparkText, {fontSize: 14}]}>RESET ZOOKEEPER</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate("addNewAnimal")
                }}>
                <Text style={styles.zooparkText}>MY ZOOPARK</Text>
            </TouchableOpacity>
            <Leaf/>
        </ScrollView>
    )
}
