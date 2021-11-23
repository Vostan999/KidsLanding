import React from "react";
import {View, Text, ScrollView, Image, TouchableOpacity, StatusBar} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Leaf from "../component/leaf/Leaf";
import {styles} from "../styles/zookeeperStyles/ZookeeperStyles";

export default function Zookeeper(props) {
    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"rgb(250, 250, 250)"} barStyle={"dark-content"}/>
            <HeaderZooziez/>
            <Text style={styles.createZookeeper}>Create your zookeeper</Text>
            <View style={styles.babyView}>
                <TouchableOpacity
                    style={styles.unionView}
                    onPress={() => {
                        props.navigation.navigate("zookeeperName")
                    }}>
                    <Image source={require("../assets/image/Union.png")} style={styles.Union}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.unionView, {borderColor: "#DADADA"}]}
                    onPress={() => {
                        props.navigation.navigate("zookeeperName")
                    }}>
                    <Image source={require("../assets/image/Frame.png")} style={styles.Frame}/>
                </TouchableOpacity>
            </View>
            <Leaf/>
        </ScrollView>
    )
}
