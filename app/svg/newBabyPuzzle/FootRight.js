import React from "react";
import {View} from "react-native";
import Svg, {Path} from "react-native-svg";
import BotasGirlRight from "../botasShoes/botasGirl/BotasGirlRight";
import BotasGirlRight1 from "../botasShoes/botasGirl2/botasGirlRight1";


export default function FootRight(props) {
    return (
        <View style={{marginLeft: 4.5, marginRight: -.2, marginTop: -.2}}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="28" height="6" viewBox="0 0 28 6" fill="none">
                <Path
                    d="M0.901325 5.96999C0.901325 5.96999 5.86133 5.96999 16.8113 5.96999C27.7513 5.96999 28.3513 4.23999 25.8913 2.82999C23.4313 1.41999 18.6313 0 18.6313 0H0.361328L0.901325 5.96999Z"
                    fill="#FFC8AC"
                />
                {/*<BotasGirlRight />*/}
                {/*<BotasGirlRight1 />*/}
                {props.BotasRight}
            </Svg>
        </View>
    )
}