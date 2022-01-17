import React from "react";
import {ScrollView,Text,View} from "react-native"
import {GContent} from "../styles/gContent/gContent";
import Leaf from "../component/leaf/Leaf";
import {Image} from "react-native-svg";
import Back from "../component/back/Back";
export default function Terms(props) {

    return(
        <ScrollView style={GContent.ScroolViewALl}>
            <View style={{marginHorizontal:15}}>
            <View style={{marginTop:10}}>
                <Back navigationProps={props.navigation}/>
            </View>
            <Text style={{textAlign:"center",color:"black",fontWeight:"bold",fontSize:20,marginBottom:20}}>Terms and Conditions</Text>
            <Text style={{textAlign:"left",color:"black",fontSize:16,marginBottom:20}}>
                Welcome to the Zooziez Children’s Privacy Policy! This Privacy Policy will tell you about the kinds of information that S’more Toys LLC and its affiliates (collectively " S’more Toys LLC", "we", "us", or "our") collect from children and how we use it or share it. You will know that this Privacy Policy applies when you visit us on a website, mobile application, online service, or on a portion of a site or service, use any online or offline services that we operate, or attend an in-person live event or experience (together we call these our "Services") and this Privacy Policy is made available to you.
            </Text>
<Text style={{textAlign:"left",color:"black",fontSize:16,marginBottom:20}}>
                This Privacy Policy is in accordance with applicable global privacy laws, such as the U.S. Children's Online Privacy Protection Act (also known as COPPA) and outlines our practices regarding information collected from and about children who use our Services. It supplements and is in addition to the S’more Toys LLC general audience Privacy Policy, which should be read alongside this Privacy Policy. If you have questions about our privacy practices as they relate to information we collect about children, see the “Contact Us” section below. If you have questions about the Services to which this Privacy Policy applies, you can contact us at the information provided at the “Contact Us” section below.
</Text>
<Text style={{textAlign:"left",color:"black",fontSize:16,marginBottom:20}}>
                You should always check with your parents or guardians before giving out any information about you, especially before entering information on any website mobile application, or online service.
</Text>
<Text style={{textAlign:"left",color:"black",fontSize:16,marginBottom:20}}>
                If you are a Grownup using our Services – our general audience S’more Toys LLC Privacy Policy, which can be viewed on our website (zooziez.com) applies to our collection and processing of your data (including on the Services where this Children’s Privacy Policy is posted). We encourage families to discuss their household guidelines regarding the online sharing of Personal Information. For more information on what you as a parent or guardian can do to control your child’s access to or use of our Services, please see the “Parental Control and Choices” section of this Privacy Policy.
            </Text>
            </View>
        </ScrollView>
    )

}