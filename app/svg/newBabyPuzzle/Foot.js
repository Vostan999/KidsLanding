import React from "react";
import {View, Image} from "react-native";
import Svg, {Path} from "react-native-svg";


export default function Foot(props) {

    return (
        <View style={{flexDirection: "row", position: "relative", marginLeft: 1.5, marginTop: -0.5}}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="62" height="6" viewBox="0 0 62 6" fill="none">
                <Path
                    d="M34.9013 5.96999C34.9013 5.96999 39.8613 5.96999 50.8113 5.96999C61.7513 5.96999 62.3513 4.23999 59.8913 2.82999C57.4313 1.41999 52.6313 0 52.6313 0H34.3613L34.9013 5.96999Z"
                    fill={`${props.skinColor}`}/>
                <Path
                    d="M8.45138 0C8.45138 0 3.65138 1.41999 1.19138 2.82999C-1.26862 4.24999 -0.66862 5.96999 10.2714 5.96999C21.2114 5.96999 26.1814 5.96999 26.1814 5.96999L26.7214 0H8.45138Z"
                    fill={`${props.skinColor}`}/>
            </Svg>
        </View>
    )
}
