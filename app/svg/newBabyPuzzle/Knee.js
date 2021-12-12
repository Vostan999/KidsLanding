import React from "react";
import {View, Image} from "react-native";
import Svg, {ClipPath, Defs, G, Path, Rect} from "react-native-svg";


export default function Knee(props) {
    return (
        <View style={{marginTop:-3}}>
                <Svg xmlns="http://www.w3.org/2000/svg" width="49" height="36" viewBox="0 0 49 36" fill="none">
                    <G clip-path="url(#clip0_405_26293)">
                        <Path d="M24 2.41992L20.77 35.9599H2.79L0 0.919922L24 2.41992Z" fill={`${props.skinColor}`}/>
                        <Path d="M47.1 35.95C47.1 35.95 47.1 35.95 47.11 35.96H28.86L26 2.5L49 0L47.1 35.95Z"
                              fill={`${props.skinColor}`}/>
                    </G>
                    <Defs>
                        <ClipPath id="clip0_405_26293">
                            <Rect width="49" height="35.96" fill="white"/>
                        </ClipPath>
                    </Defs>
                </Svg>
        </View>
    )
}
