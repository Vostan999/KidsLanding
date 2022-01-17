import React, {useEffect} from "react";
import {Image, View, ScrollView, StyleSheet} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import Leaf from "../component/leaf/Leaf";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../networking/axiosinstance";
import {useDispatch} from "react-redux";

export default function Splash(props) {
    const dispatch = useDispatch()

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

    const getKeep = async () => {
        try {
            const value = await AsyncStorage.getItem('keep')
            if (value !== null) {
                return JSON.parse(value)
            }
        } catch (e) {
            return null
        }
    }

    const handle = async () => {
        let token = await getToken()
        let keep = await getKeep()
        if (token && keep) {
            try {
                const response = await axiosInstance.get("/getUser")
                 dispatch({
                     type: "SET_CUSTOMER",
                     payload: response.data.user.email
                 })
                 setTimeout(() => {
                     props.navigation.replace("addNewAnimal")
                 }, 1000)
            } catch (e) {
                console.log(e)
            }
        } else if (!token)  {
            props.navigation.replace("firstPage")
        } else {
            props.navigation.replace("firstPage")
        }
    }

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <View style={styles.container}>
                <Image
                    source={require("../assets/image/Zooziez.png")}
                />
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
