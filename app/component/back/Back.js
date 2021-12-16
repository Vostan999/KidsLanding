import React from "react"
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";


export default function Back(props) {
return(
    <TouchableOpacity style={styles.backView}
                      onPress={() =>{
                          props.navigationProps.goBack()
                      }}

    >
        <Image source={require("../../assets/image/back.png")} style={styles.backImage}/>
        <Text style={styles.backText}>BACK</Text>
    </TouchableOpacity>
)
}
const styles = StyleSheet.create({
    backView:{
        flexDirection: "row",
        alignItems:"center",
        lineWidth: 100,
        marginBottom: 40
    },
    backImage:{
        width:7.5,
        height:15,
        marginLeft:27,
        marginRight:17
    },
    backText:{
        color:"#9E724E"
    }
})
