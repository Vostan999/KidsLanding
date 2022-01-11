import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

export default function Cloud(props) {
    return (
        <View style={{marginBottom: 37}}>
            <View style={styles.cloudView}>
                <Image source={require("../../assets/image/cloudImage.png")} style={styles.cloudStyles}/>
                <View style={styles.positionText}>
                    <Text style={styles.spell}>{props.textOne}</Text>
                    <Text style={styles.generousText}>{props.textTwo}</Text>
                    <Text style={styles.spell}>{props.textThree}</Text>
                </View>
            </View>
            <View style={styles.animalView}>
                <Image source={require("../../assets/image/background.png")} style={styles.backImage}/>
                <Image source={{uri: "https://2003.freelancedeveloper.site/" + props.characterImage}}
                       style={styles.animalImg}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cloudStyles: {
        width: 233,
        height: 174,
        position: "relative"
    },
    backImage: {
        height: 224,
        width: 283,
        position: "relative"
    },
    animalImg: {
        width: 250,
        height: 267,
        position: "absolute",
        bottom: 2,
        resizeMode:"contain"
    },
    animalView: {
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    cloudView: {
        alignItems: "center",
        marginRight: 50,
        position: "relative"
    },
    positionText: {
        position: "absolute",
        top: 50,
        alignItems: "center"
    },
    spell: {
        color: "#9E724E",
        fontFamily: "Poppins-Regular",
        maxWidth:200,
    },
    generousText: {
        color: "#D56638",
        fontFamily: "MochiyPopPOne-Regular"
    }
})
