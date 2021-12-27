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
                    <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
                    <Text style={styles.helloText}>Hello</Text>
                    <Text style={styles.descreptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                        ornare ipsum sed est.</Text>
                    <Button
                        title={"Login"}
                        backgroundColor={"#D56638"}
                        color={"#FDFDFD"}
                        marginVertical={10}
                        onPress={() => {
                            props.navigation.replace("login")
                        }}
                    />
                    <Button
                        title={"Signup"}
                        borderWidth={1}
                        borderColor={"#F19100"}
                        color={"#F19100"}
                        onPress={() => {
                            props.navigation.replace("signUp")
                        }}
                    />
                </View>
                <View style={{alignItems: "flex-end", marginTop: -49}}>
                    <Image source={require("../assets/image/animal.png")}/>
                </View>
                <Leaf
                    leaf4={require("../assets/image/leaf.png")}
                    leaf3={require("../assets/image/leaf.png")}
                />
            </ScrollView>
        </View>

    )
}
