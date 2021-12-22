import React, {useContext} from "react";
import {Image, Text, TouchableOpacity, StyleSheet, View} from "react-native";
import {ContextValue} from "../../screen/Character";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function AnimalMap(props) {
    const context = useContext(ContextValue)
    const animalId = async (value) => {
        try {
            await AsyncStorage.setItem('animalId', `${value}`)
        } catch (e) {
            console.log(e)
        }
    }

    const handle = async (id) => {
        await animalId(id)
    }

    return (
        <TouchableOpacity
            style={styles.animalView}
            onPress={() => {
                handle(props.item.id)
                context.navigate("qrCodeScanner")

            }}>
            <View style={styles.container}>
                <Image source={{uri: "https://2003.freelancedeveloper.site/" + props.item.img}}
                       style={{width: 82, height: 124}}/>
                <Text style={styles.animalName}>{props.item.title}</Text>
            </View>
            <Image source={require("../../assets/image/qrIcon.png")} style={styles.iconScanner}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    animalView: {
        borderWidth: 1,
        borderColor: "#E2E2E2",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: 168,
        height: 193,
        marginHorizontal: 5,
        marginVertical: 37
    },
    animalName: {
        fontSize: 24,
        color: "#D56638",
        fontFamily: "ShortStack",
        marginTop: 12
    },
    container: {
        alignItems: "center",
    },
    iconScanner: {
        width: 21,
        height: 21,
        position: "absolute",
        right: 15.5,
        top: 15.5
    }
})

