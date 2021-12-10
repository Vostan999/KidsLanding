import React from "react";
import {ScrollView, StatusBar, Text, View,TouchableOpacity} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Leaf from "../component/leaf/Leaf";
import Button from "../component/button/Button";
import {styles} from "../styles/finishPage/FinishPageStyles"
import FinishPageBaby from "../svg/finishPageBaby/FinishPageBaby";

export default function FinishPage(props) {
    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <HeaderZooziez/>
            <Text style={styles.textHello}>Hello Zuzie</Text>
            <View style={styles.bigBaby}>
                <FinishPageBaby/>
            </View>
            <Button
                title={"EDIT CHARACTER"}
                borderColor={"#F19100"}
                borderWidth={1}
                color={"#F19100"}
                marginHorizontal={40}
                marginVertical={20}
            />
            <TouchableOpacity
            onPress={() =>{
                props.navigation.navigate("zoopark")
            }}
            >
                <Text style={styles.zooparkText}>MY ZOOPARK</Text>
            </TouchableOpacity>
            <Leaf/>
        </ScrollView>
    )
}
