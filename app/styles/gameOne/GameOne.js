import React from "react";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    oneInputStyles: {
        flexDirection: "row",
    },
    codeInputView:{
        marginBottom:110,
        paddingHorizontal:10
    },
    root: { padding: 20},
    title: {textAlign: 'center', fontSize: 30,color:'#D56638',    fontFamily: "MochiyPopPOne-Regular"},
    codeFieldRoot: {marginTop: 20,marginHorizontal:10},
    cell: {
        width: 35,
        height: 52,
        backgroundColor: "#FFFFFF",
        borderRadius:10,
        fontSize: 18,
        borderWidth: 1.5,
        borderColor: '#F19100',
        textAlign: 'center',
        fontFamily: "MochiyPopPOne-Regular",
        color:'#D56638',
        padding:10
    }
})
