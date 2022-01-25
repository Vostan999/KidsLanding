import React, {createContext, useEffect, useState} from "react";
import {Image, ScrollView, StatusBar, Text, TouchableOpacity, View, Linking} from "react-native";
import {styles} from "../styles/goodStyles/GoodStyles"
import Leaf from "../component/leaf/Leaf";
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Button from "../component/button/Button";

export const ContextValue = createContext()
export default function Good(props) {

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar
                backgroundColor={"white"}
                barStyle={"dark-content"}
            />
                <View>
                    <HeaderZooziez
                        propsNavigation={props.navigation}
                    />
                    <Text style={styles.welcomeText}>CONGRATULATIONS</Text>
                    <Text style={styles.characterText}> you’ve mastered the value of being trustworthy!</Text>
                    <Button
                        title={"GOOD"}
                        borderWidth={1}
                        marginVertical={20}
                        borderColor={"#D56638"}
                        color={"#D56638"}
                        marginHorizontal={40}
                        onPress={() => {
                            props.navigation.navigate("chooseGame")
                        }}
                    />
                </View>

            <Leaf/>
        </ScrollView>
    )
}
