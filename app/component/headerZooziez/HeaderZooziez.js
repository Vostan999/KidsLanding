import React from "react"
import {Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {GContent} from "../../styles/gContent/gContent";


export default function HeaderZooziez() {
    return (
        <View style={styles.headerView}>
            <Text></Text>
            <Image source={require("../../assets/image/Zooziez.png")} style={GContent.zoozieImage}/>
            <TouchableOpacity>
                <Image source={require("../../assets/image/profileIcon.png")} style={styles.imageProfile}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    imageProfile: {
        height: 25,
        width: 25
    },
    headerView: {
        marginTop: 39,
        marginBottom: 29,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 24,
        justifyContent: "space-between"
    },
    headerTwoView: {
        alignItems: "flex-end"
    }
})
