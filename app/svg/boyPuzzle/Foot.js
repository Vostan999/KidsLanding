import React from "react";
import Svg, {ClipPath, Defs, G, LinearGradient, Path, Rect, Stop,} from "react-native-svg";
import {View, StyleSheet} from "react-native"


export default function Foot(props) {
    return (
        <View style={{marginTop: -3}}>
            <Svg width="62" height="43" viewBox="0 0 62 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path
                    d="M6 1L8.79088 36.037C8.79088 36.037 4.07885 37.454 1.66393 38.8609C-0.750987 40.2779 -0.161983 41.9941 10.5775 41.9941C21.317 41.9941 26.196 41.9941 26.196 41.9941L30 2.5L6 1Z"
                    fill="#FFC8AC"/>
                <Path
                    d="M55 0.5L53.0944 36.4442C53.0944 36.4442 57.8944 37.8642 60.3544 39.2742C62.8144 40.6942 62.2144 42.4142 51.2744 42.4142C40.3344 42.4142 35.3644 42.4142 35.3644 42.4142L32 3L55 0.5Z"
                    fill="#FFC8AC"/>
            </Svg>
        </View>

    )
}
