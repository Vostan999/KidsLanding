import React from "react";
import {Image, ScrollView, StatusBar, Text, View} from "react-native";
import Button from "../component/button/Button";
import {styles} from "../styles/firstPageStyles/FirstPagesStyles";
import Leaf from "../component/leaf/Leaf";
import {GContent} from "../styles/gContent/gContent";

export default function FirstPage(props) {


    return (
        <View style={styles.cont}>
            <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
                <View style={styles.firstView}>
                    <StatusBar backgroundColor={"rgb(250, 250, 250)"} barStyle={"dark-content"}/>
                    <Text style={styles.helloText}>Hello</Text>
                    <Text style={styles.descreptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                        ornare ipsum sed est.</Text>
                    <Button
                        title={"Login"}
                        backgroundColor={"#D56638"}
                        color={"#FDFDFD"}
                        marginVertical={10}
                        onPress={() => {
                            props.navigation.navigate("login")
                        }}
                    />
                    <Button
                        title={"Signup"}
                        borderWidth={1}
                        borderColor={"#F19100"}
                        color={"#F19100"}
                    />
                </View>
                <View style={{alignItems: "flex-end", marginTop: -49}}>
                    <Image source={require("../assets/image/animal.png")}/>
                </View>
                <Leaf
                    leaf4={require("../assets/image/leaf.png")}
                />
            </ScrollView>
        </View>

    )
}
