import React, {useState} from "react";
import {ScrollView, StatusBar, Text, TextInput, Image, View} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import {styles} from "../styles/zookeeperNameStyles/ZookeeperNameStyles";
import Leaf from "../component/leaf/Leaf";
import Footer from "../component/footer/Footer";

export default function ZookeeperName(props) {
    const [name, setName] = useState("")
    const baby = props.route.params.name

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
            <HeaderZooziez propsNavigation={props.navigation}/>
            <Text style={styles.header}>Create your zookeeper</Text>
            <View style={styles.footerView}>
                {baby === "boy" ?
                    <Image
                        source={require("../assets/image/Frame.png")}
                        style={styles.unionImage}
                    />
                    :
                    <Image
                        source={require("../assets/image/Union.png")}
                        style={styles.unionImage}
                    />
                }
            </View>
            <TextInput
                placeholder={"What is my name?"}
                placeholderTextColor={"#989898"}
                style={styles.inputName}
                onChangeText={(evt) => {
                    setName(evt)
                }}
            />
            <Footer
                NavigationProps={props}
                text={"hairSkinColor"}
                name={name}
                baby={baby}
            />
            <Leaf
                leaf3={require("../assets/image/leaf.png")}
                Leaf={require("../assets/image/leaf.png")}
            />
        </ScrollView>
    )
}
