import React, {useState} from "react";
import {Image, ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import Leaf from "../component/leaf/Leaf";
import {styles} from "../styles/forgotStyles/ForgotStyles";
import Input from "../component/input/Input";
import PasswordInput from "../component/passwordInput/PasswordInput";
import Button from "../component/button/Button";
import {passwordValidate} from "../component/validate/Validate";
import axiosInstance from "../networking/axiosinstance";

export default function EditPassword(props) {
    const [oldPass,setOldPass] = useState("")
    const [newPass,setNewPass] = useState("")
    const [repPass,setRepPass] = useState("")
    const [oldPassText,setOldPassText] = useState("")
    const [newPassText,setNewPassText] = useState("")
    const [repPassText,setRepPassText] = useState("")
    const[registration,setRegistration] = useState("")
    const axiosFunc = async () =>{
        try {
        const data = {
            'old_password':oldPass,
            'new_password' :newPass,
            'repeat_password':repPass
        }
        const response = await axiosInstance.post("resetPassword",data)
            response.data.success ? props.navigation.navigate("addNewAnimal") : setRegistration("unnotarized")
        }catch (e) {
            console.log(e)
        }
    }
    const handle = () =>{
        if ( newPass === repPass && passwordValidate.test(newPass) && passwordValidate.test(oldPass) && passwordValidate.test(repPass)) {
           axiosFunc()
        }
        if (!passwordValidate.test(newPass)){
            setNewPassText("The new password you’ve entered is incorrect.")
        }
        if(!passwordValidate.test(oldPass)){
            setOldPassText("The old password you’ve entered is incorrect.")
        }
        if(!passwordValidate.test(repPass)){
            setRepPassText("The repeat password you’ve entered is incorrect.")
        }
        if(newPass !== repPass){
            setRepPassText("The repeat password  old password you’ve entered is incorrect.")
        }
    }

        return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <View>
                <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
                <View style={styles.headerView}>
                    <View style={styles.zoziView}>
                        <Image source={require("../assets/image/Zooziez.png")} style={GContent.zoozieImage}/>
                    </View>
                    <Text style={styles.loginText}>EDIT PASSWORD</Text>
                    <Input
                        placeholder={"Old password"}
                        onChangeText={(evt) => {
                            setOldPass(evt)
                            setOldPassText("")
                            setRegistration("")
                        }}/>
                    <Text style={GContent.validateTextStyles}>{oldPassText}</Text>
                    <Input
                        placeholder={"New password"}
                        onChangeText={(evt) => {
                            setNewPass(evt)
                            setNewPassText("")
                            setRegistration("")
                        }}
                    />
                    <Text style={GContent.validateTextStyles}>{newPassText}</Text>
                    <PasswordInput
                        placeholder={"Repeat password"}
                        onChangeText={(evt) => {
                        setRepPass(evt)
                            setRepPassText("")
                            setRegistration("")
                        }}/>
                    <Text style={GContent.validateTextStyles}>{repPassText}</Text>

                </View>
                <Text style={[GContent.validateTextStyles,{marginLeft:40}]}>{registration}</Text>
                <View style={styles.loginView}>
                    <Button
                        title={"LOG IN"}
                        backgroundColor={"#D56638"}
                        color={"#FDFDFD"}
                        onPress={() => {
                            handle()
                        }}
                    />
                    <View style={styles.deleteViewAccount}>
                        <TouchableOpacity  >
                            <Text style={styles.deleteAccountText}>Delete account</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <Leaf
                leaf4={require("../assets/image/leaf.png")}
                leaf3={require("../assets/image/leaf.png")}
            />
        </ScrollView>
    )
}
