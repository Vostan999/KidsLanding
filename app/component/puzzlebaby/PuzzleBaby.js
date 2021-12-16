import React from "react";
import {Image, View} from "react-native";
import HeaderBaby from "../../svg/newBabyPuzzle/HeaderBaby";
import Middle from "../../svg/newBabyPuzzle/Middle";
import Knee from "../../svg/newBabyPuzzle/Knee";
import Foot from "../../svg/newBabyPuzzle/Foot";

export default function PuzzleBaby(props) {
    return(
        <View style={{justifyContent: "center", alignItems: "center"}}>
            <HeaderBaby
            baby={props.baby}
            hairColor={props.hairColor}
            skinColor={props.skinColor}
            />
            <View style={{alignItems:'center'}}>
                <Middle
                    skinColor={props.skinColor}
                    shirtShoes={props.shirtShoes} />
                <View style={{position:'absolute',alignSelf:'center',zIndex:2,top:4}}>
                    <Image source={props.shirtShoes}/>
                </View>
                <Knee
                    trouserShoes={props.trouserShoes}
                    skinColor={props.skinColor}
                />
                <View style={{alignSelf: 'center', position: 'absolute', top: 50, zIndex: 1}}>
                    <Image source={props.trouserShoes}/>
                </View>
            </View>
            <View style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
                <Foot
                    skinColor={props.skinColor}
                />
                <View style={{
                    alignSelf:"center",
                    position:"absolute",
                }}>
                    <Image  source={props.botas} />
                </View>
            </View>
        </View>
    )
}
