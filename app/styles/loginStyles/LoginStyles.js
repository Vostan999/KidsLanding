import React from "react";
import {StyleSheet,Platform} from "react-native";

export const styles = StyleSheet.create({
    zoziView: {
        alignItems: "center",
        marginTop: 56,
        marginBottom: 58
    },
    checkBoxView: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: -6
    },
    signupView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    signupText: {
        color: "#C86933",
        fontSize: 12,
        marginVertical: 7,
        fontFamily: "Poppins-Regular",
    },
    signupTextKeep: {
        color: "#9E724E",
        fontSize: 12,
        fontFamily: "Poppins-Regular",
       marginBottom:Platform.OS === "ios" ? 5 : 0
    },
    loginTextSign: {
        color: "#9E724E",
        fontFamily: "Poppins-Regular",
    },
    underView: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 10
    },
    loginText: {
        fontSize: 24,
        color: "#D56638",
        marginBottom: 23,
        textAlign: "center",
        fontFamily: "MochiyPopPOne-Regular",
    },
    loginView: {
        marginVertical: 20,
        marginHorizontal: 40
    },
    headerView: {
        marginHorizontal: 40
    },
})
