import React from "react"
import {TouchableOpacity, Image} from "react-native"

export default function TrouserDataBoyMap(props) {

    return (
        <TouchableOpacity
            style={[
                {
                    borderWidth: props.activeIndex === props.index ? 2 : 1,
                    borderColor: props.activeIndex === props.index ? "#FFE3BA" : "#DADADA",
                    height: 92,
                    width: 67,
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 8,
                },
            ]}
            onPress={() => {
                props.widthBorder(props.index)
                props.trouserShoesMap(props.item.footerShoes)
            }}
        >
            <Image source={props.item.img}/>

        </TouchableOpacity>
    )
}