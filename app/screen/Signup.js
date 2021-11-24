import React, {useState} from "react"
import {View, Text, StatusBar, ScrollView, Image} from "react-native"
import {GContent} from "../styles/gContent/gContent";
import Leaf from "../component/leaf/Leaf";
import Input from "../component/input/Input";
import PasswordInput from "../component/passwordInput/PasswordInput";
import {styles} from "../styles/SignUpStyles";
import CheckBox from "@react-native-community/checkbox";
import Button from "../component/button/Button";

export default function Signup() {
    const [checked, setChecked] = useState(false)

    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <StatusBar backgroundColor={"rgb(250, 250, 250)"} barStyle={"dark-content"}/>
            <View style={styles.zooziViewImg}>
                <Image source={require("../assets/image/Zooziez.png")} styles={GContent.zoozieImage}/>
            </View>

            <View style={styles.ViewContainer}>

                <Text style={styles.signUpText}>SIGN UP</Text>
                <Input
                    placeholder={"First name"}
                    marginVertical={5}
                />
                <PasswordInput
                    placeholder={"Last name"}
                    marginVertical={5}
                />
                <Input
                    placeholder={"Email"}
                    marginVertical={5}
                />
                <PasswordInput
                    placeholder={"Password"}
                    marginVertical={5}
                />
                <PasswordInput
                    placeholder={"Repeat password"}
                    marginVertical={5}
                />
                <View style={styles.chechkedView}>
                    <View style={styles.check}>
                        <CheckBox
                            disabled={false}
                            value={checked}
                            onValueChange={(newValue) => setChecked(newValue)}
                            style={{transform: [{scaleX: 0.9}, {scaleY: 0.9}]}}
                            tintColors={{true: '#F19100', false: '#C1C1C1'}}
                        />
                        <Text style={styles.agree}>I agree to the</Text>
                    </View>

                    <Text style={styles.terms}>Terms and Conditions </Text>
                </View>
                <View>
                    <Button
                        title={"Sign Up"}
                        backgroundColor={"#D56638"}
                        color={"#FDFDFD"}
                    />
                    <View style={styles.footerLogin}>
                        <Text style={styles.footerLoginText}>Already have an account? </Text>

                        <Text style={[styles.footerLoginText, {fontWeight: "bold"}]}> Log In</Text>
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
