import React, {useContext, useEffect} from "react";
import {Image, Text, TouchableOpacity, StyleSheet, View} from "react-native";
import {ContextValue1} from "../../screen/AddNewAnimal";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function AddAnimalDataMap(props) {

    const context = useContext(ContextValue1)

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

    useEffect(() => {
        handle()
    }, [])

    return (
        <TouchableOpacity
            style={styles.animalView}
            onPress={() => {
                animalId(props.item.id)
                context.navigate("chooseGame")
            }}>
            <View style={styles.container}>
                <Image
                    source={{uri: "https://2003.freelancedeveloper.site/" + props.item.img}}
                    style={{width: 150, height: 150, resizeMode: "contain"}}
                />
                <Text style={styles.animalName}>{props.item.title}</Text>
            </View>
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
        fontFamily: "MochiyPopPOne-Regular",
        marginTop: 12
    },
    container: {
        alignItems: "center",
    },

})

