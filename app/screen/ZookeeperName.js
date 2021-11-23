import React from "react";
import {Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import {styles} from "../styles/zookeeperNameStyles/ZookeeperNameStyles";
import Leaf from "../component/leaf/Leaf";
import Footer from "../component/footer/Footer";


export default function ZookeeperName() {
    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"rgb(250, 250, 250)"} barStyle={"dark-content"}/>

            <HeaderZooziez/>
            <Text style={styles.header}>Create your zookeeper</Text>

                <View style={styles.footerView}>
                    <Image source={require("../assets/image/Union.png")} style={styles.unionImage}/>
                </View>
                <TextInput
                    placeholder={"What is my name?"}
                    placeholderTextColor={"#989898"}
                    style={styles.inputName}
                />
               <Footer />
            <Leaf />
        </ScrollView>
    )
}
