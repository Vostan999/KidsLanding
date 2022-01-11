import {StyleSheet} from "react-native"
import {GContent} from "../gContent/gContent";

export const styles = StyleSheet.create({
    ScroolView: GContent.ScroolViewALl,
    welcomeText: {
        fontSize: 24,
        color: "#D56638",
        fontFamily: "MochiyPopPOne-Regular",
        textAlign: "center",
        marginVertical: 10
    },
    characterText: {
        color: "#9E724E",
        textAlign: "center",
        marginTop: 55,
        fontFamily: "Poppins-Regular",
        fontWeight: "bold",
    },
    welcomeTextView: {
        alignItems: "center",
        marginTop: 82
    },
    zooziez: {
        width: 110,
        height: 41
    },

    centerText: {

        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    contText:{
        fontFamily: "Poppins-Regular",
        fontSize:14,
        color:"#9E724E",
        textAlign:'center'
    },
    container:{
        justifyContent:"space-between"
        ,flex:1
    }
})
