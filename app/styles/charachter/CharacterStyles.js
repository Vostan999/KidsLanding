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

        marginTop:55,
       fontFamily:"PoppinsRegular",
        fontWeight:"bold",
    },
    welcomeTextView:{
        alignItems:"center",
        marginVertical:20
    },
    to:{
        fontSize:16,
        color:"#D56638",
        marginVertical:10,
        fontFamily:"ShortStack",
    },

    zooziez:{
        width: 110,
        height:41
    },
    animalViewTillyGeorge:{
        flexDirection:"row",
        justifyContent:"space-around",
        flexWrap:"wrap"
    },
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    animalView: {
        borderWidth: 1,
        borderColor: "#E2E2E2",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: 168,
        height: 193,
        marginHorizontal: 5,
        marginVertical: 37
    },
    animalName: {
        fontSize: 14,
        color: "#D56638",
        fontFamily: "ShortStack",
        marginTop: 12
    },
    container: {
        alignItems: "center",
    },
    title1:{
        fontFamily:"PoppinsRegular",
        color:"#9E724E",
        fontSize:18,
        textTransform:"uppercase",

    },
    title2:{
        fontFamily:"PoppinsRegular",
        color:"#A79A90",
        fontSize:18,
        textTransform:"capitalize",
    },
    title3:{
        fontFamily:"PoppinsRegular",
        color:"#BCB5AC",
        fontSize:12,
        textTransform:"capitalize",
    },
    backView:{
        marginTop:50
    }
})
