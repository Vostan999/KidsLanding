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
        marginTop:82
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

})
