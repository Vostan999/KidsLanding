import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import FirstPage from "../screen/FirstPage";
import Login from "../screen/Login";
import Character from "../screen/Character";
import GameOne from "../screen/GameOne";
import GameTwo from "../screen/GameTwo";
import GameThree from "../screen/GameThree";

export default function StackNavigation() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name={"gameThree"} component={GameThree} />
            <Stack.Screen name={"gameOne"} component={GameOne}/>
            <Stack.Screen name={"gameTwo"} component={GameTwo} />
            <Stack.Screen name={"login"} component={Login}/>
            <Stack.Screen name={"firstPage"} component={FirstPage}/>
            <Stack.Screen name={"character"} component={Character}/>
        </Stack.Navigator>
    )
}
