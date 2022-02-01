import React, {createContext, useEffect, useState} from "react";
import {Image, ScrollView, StatusBar, Text, View} from "react-native";
import {styles} from "../styles/goodStyles/GoodStyles"
import Leaf from "../component/leaf/Leaf";
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Button from "../component/button/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ContextValue = createContext()
export default function Good(props) {

  const [character,setCharacter] = useState('')

  useEffect(() =>{
    name()
  })



  let name = async () => {
    try {
      let data = await AsyncStorage.getItem(`name`);
      setCharacter(data);
    } catch (error) {
      console.log(error);
    }
  }

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
                    <Text style={styles.characterText}> you’ve mastered the value of being {character}!</Text>
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
