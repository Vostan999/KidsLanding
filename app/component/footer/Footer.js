import React from "react";
import {Image, Text, View, StyleSheet, TouchableOpacity} from "react-native";

export default function Footer(props) {

    const handle = () => {
            props.NavigationProps.navigation.navigate(`${props.text}`, {
                name: props.name,
                baby: props.baby,
                skinColor: props.skinColor,
                hairColor: props.hairColor,
                shirtShoes: props.shirtShoes,
                trouserShoes: props.trouserShoes,
                botas: props.botas,
                accessories: props.accessories,
                mini: props.mini
            })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.childView}>
                <Image source={require("../../assets/image/CaretDoubleleft.png")} style={styles.iconImage}/>
                <Text
                    style={styles.containerText}
                    onPress={() => {
                        props.NavigationProps.navigation.goBack()
                    }}
                >Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.childView}
                onPress={() => {
                    handle()
                }}
            >
                <Text style={[styles.containerText, {color: "#000000"}]}>Next</Text>
                <Image source={require("../../assets/image/CaretDoubleRight.png")} style={styles.iconImage}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 35,
        justifyContent: "space-between",
        marginLeft: 24,
        marginRight: 28,


    },
    iconImage: {
        width: 24,
        height: 24
    },
    childView: {
        flexDirection: "row",
        alignItems: "center",
    },
    containerText: {
        color: "#5B5B5B",
        fontSize: 18,
        fontFamily: "MochiyPopPOne-Regular",
    }
})
