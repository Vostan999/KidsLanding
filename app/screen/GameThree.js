import React, {useState} from "react";
import {ScrollView} from "react-native";
import {GContent} from "../styles/gContent/gContent";
import HeaderZooziez from "../component/headerZooziez/HeaderZooziez";
import Cloud from "../component/cloud/Cloud";
import Leaf from "../component/leaf/Leaf";
import CheckBox from "@react-native-community/checkbox";

export default function GameThree() {
    const [checked,setChecked] = useState(false)
    return (
        <ScrollView contentContainerStyle={GContent.ScroolViewALl}>
            <HeaderZooziez/>
            <Cloud
            textOne={"How can you be"}
            textTwo={"Generous"}
            textThree={"to your friends?"}
            />
            <CheckBox
                disabled={false}
                value={checked}
                onValueChange={(newValue) => setChecked(newValue)}
                style={{transform: [{scaleX: 0.9}, {scaleY: 0.9}]}}
                tintColors={{true: '#F19100', false: '#9E724E'}}

            />
            <Leaf/>
        </ScrollView>
    )
}
