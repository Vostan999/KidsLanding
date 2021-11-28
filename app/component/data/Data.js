import React from "react"
import GameTwoMap from "../dataMap/GameTwoMap";
import GameOneMap from "../dataMap/GameOneMap";
import GameThreeMap from "../dataMap/GameThreeMap";
import ColorHairDataMap from "../dataMap/ColorHairDataMap";
import ColorSkinDataMap from "../dataMap/ColorSkinDataMap";
import ShirtMap from "../dataMap/ShirtMap";
import TrouserMap from "../dataMap/TrouserMap";
import FotterShoes3 from "../../svg/FotterShoes/FotterShoes3";
import FooterShoes1 from "../../svg/FotterShoes/FooterShoes1";
import FotterShoes2 from "../../svg/FotterShoes/FotterShoes2";
import BotasDataMap from "../dataMap/BotasDataMap";
import AccessoriesDataMap from "../dataMap/accessoriesDataMap";

const gameTwoData = [
    {
        text: "To give because your parents tell you to"
    },
    {
        text: "To give with a happy heart"
    },
    {
        text: "To keep everything for yourself"
    }
]
const gameOneData = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]
const GameThreeData = [
    {
        text: "Share"
    },
    {
        text: "To give with a happy heart"
    },
    {
        text: "To keep everything for yourself"
    },
    {
        text: "Help others"
    },
]

const ColorHairData = [
    {
        id: 1,
        color: "#6C3D3D"
    },
    {
        id: 2,
        color: "#121212"
    },
    {
        id: 3,
        color: "#FBECC7"
    },
    {
        id: 4,
        color: "#FF0505"
    },

]

const ColorSkinData = [
    {
        id: 1,
        color: "#6C3D3D"
    },
    {
        id: 2,
        color: "#121212"
    },
    {
        id: 3,
        color: "#FBECC7"
    },
]
const ShirtData = [
    {
        id: 1,
        img: require("../../assets/image/shoes1.png")
    },
    {
        id: 2,
        img: require("../../assets/image/shoes2.png")
    },


]
const TrouserData = [
    {
        id: 1,
        img: require("../../assets/image/shoes3.png"),
        img2: FooterShoes1

    },
    {
        id: 2,
        img: require("../../assets/image/shoes4.png"),
        img2: FotterShoes2
    },
    {
        id: 3,
        img: require("../../assets/image/shoes5.png"),
        img2: FotterShoes3
    },

]

const BotasData = [
    {
        id: 1,
        img: require("../../assets/image/Botas1.png"),
    },
    {
        id: 2,
        img: require("../../assets/image/Botas2.png"),
    },
]
const AccessoriesData = [
    {
        id: 1,
        img: require("../../assets/image/accessories1.png"),
    },
    {
        id: 2,
        img: require("../../assets/image/accessories2.png"),
    },
    {
        id: 3,
        img: require("../../assets/image/accessories3.png"),
    },
    {
        id: 4,
        img: require("../../assets/image/accessories4.png"),
    },
    {
        id: 5,
        img: require("../../assets/image/accessories5.png"),
    },
]
export const AccessoriesDataFunc = () => {
    return (
        AccessoriesData.map((item, index) => {
            return (
                <AccessoriesDataMap
                    item={item}
                    index={index}
                    key={index}
                />
            )
        })
    )
}


export const BotasDataFunc = () => {
    return (
        BotasData.map((item, index) => {
            return (
                <BotasDataMap
                    item={item}
                    index={index}
                    key={index}
                />
            )
        })
    )
}


export const ShirtDataFunc = () => {
    return (
        ShirtData.map((item, index) => {
            return (
                <ShirtMap
                    item={item}
                    index={index}
                    key={index}
                />
            )
        })
    )
}
export const TrouserDataFunc = () => {
    return (
        TrouserData.map((item, index) => {
            return (
                <TrouserMap
                    item={item}
                    index={index}
                    key={index}
                />
            )
        })
    )
}

export const ColorSkinDataFunc = (props) => {
    return (
        ColorSkinData.map((item, index) => {
            return (
                <ColorSkinDataMap
                    item={item}
                    index={index}
                    key={index}
                    skinColorFunc={props.skinColorFunc}

                />
            )
        })
    )
}

export const ColorHairDataFunc = (props) => {
    return (
        ColorHairData.map((item, index) => {
            return (
                <ColorHairDataMap
                    item={item}
                    index={index}
                    key={index}
                    setHairColorFunc={props.setHairColorFunc}
                />
            )
        })
    )
}

export const GameOneDataFunc = () => {
    return (
        gameOneData.map((item, index) => {
            return (
                <GameOneMap
                    item={item}
                    index={index}
                    key={index}
                />
            )
        })
    )
}

export const GameTwoDataFunc = () => {
    return (
        gameTwoData.map((item, index) => {
            return (
                <GameTwoMap
                    item={item}
                    index={index}
                    key={index}
                />
            )
        })
    )
}

export const GameThreeDataFunc = () => {
    return (
        GameThreeData.map((item, index) => {
            return (
                <GameThreeMap
                    item={item}
                    index={index}
                    key={index}
                />
            )
        })
    )
}
