import React, {useState} from "react"
import {View, Text, StatusBar, ScrollView, Image, TouchableOpacity, Platform} from "react-native"
import {GContent} from "../styles/gContent/gContent";
import Leaf from "../component/leaf/Leaf";
import Input from "../component/input/Input";
import PasswordInput from "../component/passwordInput/PasswordInput";
import {styles} from "../styles/SignUpStyles";
import CheckBox from "@react-native-community/checkbox";
import Button from "../component/button/Button";
import {passwordValidate, validateEmail, nameValidation} from "../component/validate/Validate";
import axiosInstance from "../networking/axiosinstance";
import Loading from "../component/loading/Loading";

export default function Signup(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repPassword, setRepPassword] = useState("")
    const [firstNameText, setFirstNameText] = useState("")
    const [lastNameText, setLastNameText] = useState("")
    const [emailText, setEmailText] = useState("")
    const [passwordText, setPasswordText] = useState("")
    const [repPasswordText, setRepPasswordText] = useState("")
    const [visibleLoading, setVisibleLoading] = useState(false)
    const [registration, setRegistration] = useState("")
    const [isSelected, setIsSelected] = useState(false)
    const handle = async () => {
        setVisibleLoading(true)
        try {
            const data = {
                "first_name": firstName,
                "last_name": lastName,
                "email": email,
                "password": password
            }
            const response = await axiosInstance.post(`/register`, data)
            setVisibleLoading(false)
            props.navigation.replace("login")
        } catch (e) {
            setRegistration(e.response.data.message)
            setVisibleLoading(false)
        }
    }

    const ValidateFunction = () => {
        if (validateEmail(email) && nameValidation.test(lastName) && nameValidation.test(firstName) && isSelected && password === repPassword && passwordValidate.test(password) && passwordValidate.test(repPassword)) {
            handle()
        } else {
            setVisibleLoading(false)
        }
        if (!validateEmail(email)) {
            setEmailText("The email you???ve entered is incorrect.")
        }
        if (!nameValidation.test(lastName)) {
            setLastNameText("The last name you???ve entered is incorrect.")
        }
        if (!nameValidation.test(firstName)) {
            setFirstNameText("The first name you???ve entered is incorrect.")
        }
        if (password !== repPassword) {
            setPasswordText("The password you???ve entered is incorrect.")
            setRepPasswordText("The repeat password you???ve entered is incorrect.")
        }
        if (!passwordValidate.test(password)) {
            setPasswordText("The password you???ve entered is incorrect.")
        }
        if (!passwordValidate.test(repPassword)) {
            setRepPasswordText("The repeat password you???ve entered is incorrect.")
        }
    }

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar
                backgroundColor={"white"}
                barStyle={"dark-content"}
            />
            <View style={styles.zooziViewImg}>
                <Image
                    source={require("../assets/image/Zooziez.png")}
                    styles={GContent.zoozieImage}
                />
            </View>
            <View style={styles.ViewContainer}>
                <Text style={styles.signUpText}>SIGN UP</Text>
                <Input
                    placeholder={"First name"}
                    marginTop={14}
                    onChangeText={(evt) => {
                        setFirstName(evt)
                        setFirstNameText("")
                        setRegistration("")
                    }}/>
                <Text style={GContent.validateTextStyles}>{firstNameText}</Text>
                <PasswordInput
                    placeholder={"Last name"}
                    onChangeText={(evt) => {
                        setLastName(evt)
                        setLastNameText("")
                        setRegistration("")
                    }}/>
                <Text style={GContent.validateTextStyles}>{lastNameText}</Text>
                <Input
                    placeholder={"Email"}
                    onChangeText={(evt) => {
                        setEmail(evt)
                        setEmailText("")
                        setRegistration("")
                    }}/>
                <Text style={GContent.validateTextStyles}>{emailText}</Text>
                <PasswordInput
                    placeholder={"Password"}
                    onChangeText={(evt) => {
                        setPassword(evt)
                        setPasswordText("")
                        setRegistration("")
                    }}/>
                <Text style={GContent.validateTextStyles}>{passwordText}</Text>
                <PasswordInput
                    placeholder={"Repeat password"}
                    onChangeText={(evt) => {
                        setRepPassword(evt)
                        setRepPasswordText("")
                        setRegistration("")
                    }}/>
                <Text style={GContent.validateTextStyles}>{repPasswordText}</Text>
                <Text style={[GContent.validateTextStyles, {marginBottom: 20}]}>{registration}</Text>
                <View style={styles.terms}>
                    <CheckBox
                        disabled={false}
                        value={isSelected}
                        onValueChange={(newValue) => setIsSelected(newValue)}
                        style={{transform: [{scaleX: Platform.OS === "ios" ? 0.7 : 0.9}, {scaleY: Platform.OS === "ios" ? 0.7 : 0.9}
                        ]}}
                        tintColors={{true: '#F19100', false: '#9E724E'}}
                        onTintColor='#F19100'
                        onFillColor='#F19100'
                        onCheckColor='white'
                    />
                    <Text style={styles.agreeText}>I agree to the </Text>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate("terms")
                    }}>
                        <Text style={styles.termsText}>Terms and Conditions</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Button
                        title={"Sign Up"}
                        backgroundColor={"#D56638"}
                        marginBottom={11}
                        color={"#FDFDFD"}
                        onPress={() => {
                            ValidateFunction()
                        }}/>
                </View>

            </View>
            <Leaf
                leaf4={require("../assets/image/leaf.png")}
                leaf3={require("../assets/image/leaf.png")}
            />
            <Loading loading={visibleLoading}/>
        </ScrollView>
    )

}
