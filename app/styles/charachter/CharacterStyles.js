import React from "react";
import {StyleSheet} from "react-native";
import {GContent} from "../gContent/gContent";

export const styles = StyleSheet.create({
    ScroolView:GContent.ScroolViewALl,
    zooziezImage:{
        alignItems:"center"
    },
    welcomeText:{
        fontSize:24,
        color:"#D56638",
        fontFamily:"MochiyPopPOne-Regular",
        textAlign: "center"
    },
    characterText:{
        color:"#9E724E",
        textAlign:"center",
        marginTop:55,
       fontFamily:"Poppins-Regular",
        fontWeight:"bold",
    },
    welcomeTextView:{
        marginVertical:20,
    },
    to:{
        fontSize:16,
        color:"#D56638",
        marginVertical:10,
        fontFamily:"MochiyPopPOne-Regular",
        textAlign: "center"
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
        fontFamily: "MochiyPopPOne-Regular",
        marginTop: 12
    },
    container: {
        alignItems: "center",
    },
    title1:{
        fontFamily:"Poppins-Regular",
        color:"#9E724E",
        fontSize:18,
        textTransform:"uppercase",

    },
    title2:{
        fontFamily:"Poppins-Regular",
        color:"#A79A90",
        fontSize:18,
        textTransform:"capitalize",
        textAlign:"center"
    },
    title3:{
        fontFamily:"Poppins-Regular",
        color:"#BCB5AC",
        fontSize:12,
        textTransform:"capitalize",
    },
    backView:{
        marginTop:50
    }
})
