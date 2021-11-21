import React, {useState} from "react";
import {Image, ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import Input from "../component/input/Input";
import {styles} from "../styles/loginStyles/LoginStyles";
import PasswordInput from "../component/passwordInput/PasswordInput";
import Button from "../component/button/Button";
import CheckBox from '@react-native-community/checkbox';
import Leaf from "../component/leaf/Leaf";
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Cloud from "../component/cloud/Cloud";

export default function Login(props) {
    const [checked,setChecked] = useState(false)

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <View >
            <StatusBar backgroundColor={"rgb(250, 250, 250)"} barStyle={"dark-content"}/>
            <View style={styles.headerView}>
                <View style={styles.zoziView}>
                    <Image source={require("../assets/image/Zooziez.png")} style={GContent.zoozieImage}/>
                </View>
                <Text style={styles.loginText}>LOG IN</Text>
                <Input
                    placeholder={"Email"}
                    marginVertical={10}
                />
                <PasswordInput
                    placeholder={"Password"}
                />
                <View style={styles.signupView}>
                    <View style={styles.checkBoxView}>
                        <CheckBox
                            disabled={false}
                            value={checked}
                            onValueChange={(newValue) => setChecked(newValue)}
                            style={{transform: [{scaleX: 0.9}, {scaleY: 0.9}]}}
                            tintColors={{true: '#F19100', false: '#9E724E'}}
                        />
                        <Text style={styles.signupTextKeep}>Keep Me Logged In</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.signupText}>Forgot the password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.loginView}>
                <Button
                    title={"LOG IN"}
                    backgroundColor={"#D56638"}
                    color={"#FDFDFD"}
                    onPress={()=>{
                        props.navigation.navigate("character")
                    }}
                />
                <View style={styles.underView}>
                    <Text style={styles.loginTextSign}>New account? </Text>
                    <TouchableOpacity>
                        <Text style={[styles.loginTextSign,{fontWeight:"bold"}]}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            <Leaf
                leaf4={require("../assets/image/leaf.png")}
            />
        </ScrollView>
    )
}
