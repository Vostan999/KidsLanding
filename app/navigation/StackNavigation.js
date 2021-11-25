import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import FirstPage from "../screen/FirstPage";
import Login from "../screen/Login";
import Character from "../screen/Character";
import GameOne from "../screen/GameOne";
import GameTwo from "../screen/GameTwo";
import GameThree from "../screen/GameThree";
import Signup from "../screen/Signup";
import Zookeeper from "../screen/Zookeeper";
import ZookeeperName from "../screen/ZookeeperName";
import HairSkinColor from "../screen/HairSkinColor";
import Shoes from "../screen/Shoes";
export default function StackNavigation() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name={"hairSkinColor"} component={HairSkinColor}/>
            <Stack.Screen name={"zookeeper"} component={Zookeeper}/>
            <Stack.Screen name={"zookeeperName"} component={ZookeeperName}/>
            <Stack.Screen name={"shoes"} component={Shoes}/>
            <Stack.Screen name={"gameThree"} component={GameThree}/>
            <Stack.Screen name={"gameTwo"} component={GameTwo}/>
            <Stack.Screen name={"gameOne"} component={GameOne}/>
            <Stack.Screen name={"character"} component={Character}/>
            <Stack.Screen name={"login"} component={Login}/>
            <Stack.Screen name={"firstPage"} component={FirstPage}/>
            <Stack.Screen name={"signUp"} component={Signup}/>
        </Stack.Navigator>
    )
}
