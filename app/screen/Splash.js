import React, {useEffect} from "react";
import {Image, View, ScrollView, StyleSheet} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import Leaf from "../component/leaf/Leaf";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Splash(props) {
    useEffect(() => {
            handle()
    }, [])

    let getToken = async () => {
        try {
            let data = await AsyncStorage.getItem("token");
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    const handle = async () => {
        let token = await getToken()
        if (token) {
            props.navigation.replace("addNewAnimal")
        } else if (!token) {
            props.navigation.replace("firstPage")
        } else {
            props.navigation.replace("firstPage")
        }
    }

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <View style={styles.container}>
                <Image source={require("../assets/image/Zooziez.png")}/>
            </View>
            <Leaf
                leaf4={require("../assets/image/leaf.png")}
                leaf3={require("../assets/image/leaf.png")}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
