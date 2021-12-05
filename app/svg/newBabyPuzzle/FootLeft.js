import React from "react";
import {View} from "react-native";
import Svg, {Path} from "react-native-svg";
import BotasGirl from "../botasShoes/botasGirl/BotasGirlLeft";
import BotasGirlLeft from "../botasShoes/botasGirl/BotasGirlLeft";
import BotasGirlLeft1 from "../botasShoes/botasGirl2/BotasGirlLeft1";


export default function FootLeft(props) {
    return (
        <View style={{marginLeft: 1.7, marginRight: 2.9, marginTop: -.2, flexDirection: "row"}}>
            <Svg width="27" height="6" viewBox="0 0 27 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path
                    d="M8.45138 0C8.45138 0 3.65138 1.41999 1.19138 2.82999C-1.26862 4.24999 -0.66862 5.96999 10.2714 5.96999C21.2114 5.96999 26.1814 5.96999 26.1814 5.96999L26.7214 0H8.45138Z"
                    fill="#FFC8AC"/>
                {/*<BotasGirlLeft />*/}
                {/*<BotasGirlLeft1 />*/}
                {props.BotasLeft}
            </Svg>

        </View>
    )
}