import React from "react";
import {StyleSheet} from "react-native";
import {GContent} from "../gContent/gContent";

export const styles = StyleSheet.create({
    ScroolView:GContent.ScroolViewALl,
    welcomeText:{
        fontSize:24,
        color:"#D56638",
        fontFamily:"ShortStack",
    },
    characterText:{
        color:"#9E724E",
        marginBottom:31,
        marginTop:55,
       fontFamily:"PoppinsRegular",
        fontWeight:"bold",
    },
    welcomeTextView:{
        flex:1,
        alignItems:"center",
        marginTop:82
    },
    animalView:{
        borderWidth:1,
        borderColor:"#E2E2E2",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        paddingVertical:50,
        paddingHorizontal: 55,
        marginBottom:183
    },
    to:{
        fontSize:16,
        color:"#D56638",
        marginVertical:10,
        fontFamily:"ShortStack",
    },
    animalName:{
        fontSize:24,
        color:"#D56638",
        fontFamily:"ShortStack",
    },
    zooziez:{
        width: 110,
        height:41
    }
})
