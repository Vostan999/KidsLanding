import React from "react";
import {View} from "react-native";
import Svg, {ClipPath, Defs, G, Path, Rect} from "react-native-svg";

export default function HeaderHair1(props) {

    return (
        <View style={{borderWidth: 1, marginLeft: .5, marginTop: -12.5, borderColor: 'transparent',position:"absolute"}}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="89" height="102" viewBox="0 0 87 104" fill="none">
                <G clip-path="url(#clip0_527_2602)">
                    <Path
                        d="M84.5205 57.3301C81.0205 59.0601 77.0305 58.8601 75.0505 56.0701C74.4705 62.7501 72.5805 68.2301 69.2505 71.3401C65.3605 74.9701 60.0805 76.9101 54.4805 77.9101C54.4905 78.4901 54.5105 79.3401 54.5605 80.5401L54.5705 80.7201L54.6205 81.4901C57.7605 81.3901 61.4805 81.0001 65.6305 80.0701C65.1705 82.9601 66.4805 86.0801 68.2505 88.2801C67.5505 89.0001 66.9205 89.8401 66.4705 90.8701C63.7905 96.9701 71.0605 105.23 73.9605 103.45C76.8605 101.67 78.6405 97.0001 79.3705 93.6001C79.9005 91.1501 78.4505 88.8701 76.7605 87.3601C77.8605 85.3801 78.6105 83.0501 79.0205 81.1301C79.5105 78.8601 78.3005 76.7401 76.7805 75.2401C81.3105 71.2201 83.4105 64.9101 84.5205 57.3301Z"
                        fill={`${props.hairColor}`}/>
                    <Path
                        d="M59.7104 7.87997C59.4903 7.90997 59.2704 7.95997 59.0504 7.99997C58.7904 8.04997 58.5403 8.09997 58.2803 8.15997C58.1104 8.04997 57.9503 7.93997 57.7803 7.83997C57.6804 7.76997 57.5803 7.70997 57.4804 7.65997C26.9503 -11.64 -0.21965 9.24997 0.000350299 29.08C0.16035 44.5 8.00035 45.47 8.00035 45.47C8.12035 44.01 8.30035 42.53 8.52035 41.03C38.2104 31.03 43.0504 12.18 43.0504 12.18C43.0504 12.18 48.5404 27.7 73.1804 41.92C73.0104 44.35 72.9104 46.64 73.4004 47.48C73.6304 47.87 74.1204 47.92 74.7504 47.65C74.8704 47.6 75.0004 47.54 75.1303 47.47C76.1804 46.87 77.5303 45.55 78.7604 43.61V43.6C79.1104 43.05 79.4504 42.45 79.7604 41.8C80.7204 39.87 81.5104 37.51 81.8904 34.8C83.2104 34.53 84.6404 34.6 86.1303 35.17H86.1404C87.0804 17.86 75.9104 5.10997 59.7104 7.87997Z"
                        fill={`${props.hairColor}`}/>
                </G>
                <Defs>
                    <ClipPath id="clip0_527_2602">
                        <Rect width="86.2" height="103.7" fill="white"/>
                    </ClipPath>
                </Defs>
            </Svg>
        </View>
    )
}
