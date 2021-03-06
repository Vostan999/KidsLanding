import React, {useState} from "react";
import {Image, Platform, ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import Input from "../component/input/Input";
import {styles} from "../styles/loginStyles/LoginStyles";
import PasswordInput from "../component/passwordInput/PasswordInput";
import Button from "../component/button/Button";
import CheckBox from '@react-native-community/checkbox';
import Leaf from "../component/leaf/Leaf";
import {GContent} from "../styles/gContent/gContent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {passwordValidate, validateEmail} from "../component/validate/Validate";
import axiosInstance from "../networking/axiosinstance";
import {useDispatch} from "react-redux";
import Loading from "../component/loading/Loading";

export default function Login(props) {
    const [isSelected, setIsSelected] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailText, setEmailText] = useState("")
    const [passwordText, setPasswordText] = useState("")
    const [registration, setRegistration] = useState("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('token', value)
        } catch (e) {
            console.log(e)
        }
    }

    const storeKeep = async () => {
        try {
            await AsyncStorage.setItem('keep', JSON.stringify(isSelected))
        } catch (e) {
            console.log(e)
        }
    }

    const validateFunction = () => {
        if (validateEmail(email) && passwordValidate.test(password)) {
            handle()
        }
        if (!validateEmail(email)) {
            setEmailText("The email you’ve entered is incorrect.")
        }
        if (!passwordValidate.test(password)) {
            setPasswordText("The password you’ve entered is incorrect.")
        }
    }
    const handle = async () => {
        setLoading(true)
        try {
            const data = {
                "email": email,
                "password": password
            }
            const response = await axiosInstance.post("/login", data)
            console.log(response);
            dispatch({
                type: "SET_CUSTOMER",
                payload: email.toLowerCase()
            })
            await storeKeep()
            await storeData(response.data.token)
            setLoading(false)
            props.navigation.replace("addNewAnimal")
        } catch (e) {
            console.log(e);
            setRegistration(e.response.data.error)
            setLoading(false)
        }
    }
    return (
        <ScrollView contentContainerStyle={[GContent.ScroolViewALl,{justifyContent:"space-between"}]}>
            <View>
                <StatusBar
                    backgroundColor={"white"}
                    barStyle={"dark-content"}/>
                <View style={styles.headerView}>
                    <View style={styles.zoziView}>
                        <Image
                            source={require("../assets/image/Zooziez.png")}
                            style={GContent.zoozieImage}
                        />
                    </View>
                    <Text style={styles.loginText}>LOG IN</Text>
                    <Input
                        placeholder={"Email"}
                        onChangeText={(evt) => {
                            setEmail(evt)
                            setEmailText("")
                        }}/>
                    <Text style={GContent.validateTextStyles}>{emailText}</Text>
                    <PasswordInput
                        placeholder={"Password"}
                        onChangeText={(evt) => {
                            setPassword(evt)
                            setPasswordText("")
                        }}/>
                    <Text style={GContent.validateTextStyles}>{passwordText}</Text>
                    <View style={styles.signupView}>
                        <View style={styles.checkBoxView}>
                            <CheckBox
                                disabled={false}
                                value={isSelected}
                                onValueChange={(newValue) => setIsSelected(newValue)}
                                style={{transform: [{scaleX: Platform.OS === "ios"? 0.7 :0.9}, {scaleY: Platform.OS === "ios"? 0.7 :0.9}]}}
                                tintColors={{true: '#F19100', false: '#9E724E'}}
                                onTintColor='#F19100'
                                onFillColor='#F19100'
                                onCheckColor='white'
                            />
                            <Text style={styles.signupTextKeep}>Keep Me Logged In</Text>
                        </View>
                    </View>
                    <Text style={GContent.validateTextStyles}>{registration}</Text>
                </View>

            </View>
            <View style={styles.loginView}>
                <Button
                    title={"LOG IN"}
                    backgroundColor={"#D56638"}
                    color={"#FDFDFD"}
                    onPress={() => {
                        validateFunction()
                    }}
                />
                <View style={styles.underView}>
                    <Text style={styles.loginTextSign}>New account? </Text>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate("signUp")
                    }}>
                        <Text style={[styles.loginTextSign, {fontWeight: "bold"}]}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Leaf
                leaf4={require("../assets/image/leaf.png")}
                leaf3={require("../assets/image/leaf.png")}
            />
            <Loading loading={loading}/>
        </ScrollView>
    )
}
