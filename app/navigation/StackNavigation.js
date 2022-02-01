import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import FirstPage from "../screen/FirstPage";
import Login from "../screen/Login";
import Character from "../screen/Character";
import GameTwo from "../screen/GameTwo";
import GameThree from "../screen/GameThree";
import Signup from "../screen/Signup";
import Zookeeper from "../screen/Zookeeper";
import ZookeeperName from "../screen/ZookeeperName";
import QrCodeScanner from "../component/QrCodeScanner/QrCodeScanner";
import HairSkinColor from "../screen/HairSkinColor";
import Shoes from "../screen/Shoes";
import Accessories from "../screen/Accessories";
import FinishPage from "../screen/FinishPage";
import ChooseGame from "../screen/ChooseGame";
import Good from "../screen/Good";
import AddNewAnimal from "../screen/AddNewAnimal";
import Splash from "../screen/Splash";
import EditPassword from "../screen/EditPassword";
import GameTigerOneInput from "../screen/GameTigerOneInput";
import GameTigerTwoInput from "../screen/GameTigerTwoInput";
import GameTigerThreeInput from "../screen/GameTigerThreeInput";
import GameTigerOne from "../screen/GameTigerOne";
import GameTigerTwo from "../screen/GameTigerTwo";
import GameTigerThree from "../screen/GameTigerThree";
import GameTigerFor from "../screen/gameTigerFor";
import Terms from "../screen/Terms";

export default function StackNavigation() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name={"splash"} component={Splash}/>
            <Stack.Screen name={"gameTigerOneInput"} component={GameTigerOneInput}/>
            <Stack.Screen name={"chooseGame"} component={ChooseGame}/>
            <Stack.Screen name={"gameTigerTwoInput"} component={GameTigerTwoInput}/>
            <Stack.Screen name={"gameTigerThreeInput"} component={GameTigerThreeInput}/>
            <Stack.Screen name={"gameTigerOne"} component={GameTigerOne}/>
            <Stack.Screen name={"gameTigerTwo"} component={GameTigerTwo}/>
            <Stack.Screen name={"gameTigerThree"} component={GameTigerThree}/>
            <Stack.Screen name={"gameTigerFor"} component={GameTigerFor}/>
            <Stack.Screen name={"gameTwo"} component={GameTwo}/>
            <Stack.Screen name={"gameThree"} component={GameThree}/>
            <Stack.Screen name={"finishPage"} component={FinishPage}/>
            <Stack.Screen name={"addNewAnimal"} component={AddNewAnimal}/>
            <Stack.Screen name={"zookeeper"} component={Zookeeper}/>
            <Stack.Screen name={"login"} component={Login}/>
            <Stack.Screen name={"character"} component={Character}/>
            <Stack.Screen name={"firstPage"} component={FirstPage}/>
            <Stack.Screen name={"editPassword"} component={EditPassword}/>
            <Stack.Screen name={"good"} component={Good}/>
            <Stack.Screen name={"shoes"} component={Shoes}/>
            <Stack.Screen name={"hairSkinColor"} component={HairSkinColor}/>
            <Stack.Screen name={"accessories"} component={Accessories}/>
            <Stack.Screen name={"signUp"} component={Signup}/>
            <Stack.Screen name={"zookeeperName"} component={ZookeeperName}/>
            <Stack.Screen name={"qrCodeScanner"} component={QrCodeScanner}/>
            <Stack.Screen name={"terms"} component={Terms}/>
        </Stack.Navigator>
    )
}
