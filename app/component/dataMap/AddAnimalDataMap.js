import React, {useContext} from "react";
import {Image, Text, TouchableOpacity, StyleSheet, View} from "react-native";
import {ContextValue1} from "../../screen/AddNewAnimal";


export default function AddAnimalDataMap(props) {
    const context = useContext(ContextValue1)

    return (
        <TouchableOpacity
            style={styles.animalView}
            onPress={() => {
                context.navigate("chooseGame")
            }}>
            <View style={styles.container}>
                <Image source={props.item.img} style={{width: 82, height: 124}}/>
                <Text style={styles.animalName}>{props.item.name}</Text>
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
        fontFamily: "ShortStack",
        marginTop: 12
    },
    container: {
        alignItems: "center",
    },

})

