import React from "react"
import GameTwoMap from "../dataMap/GameTwoMap";
import GameOneMap from "../dataMap/GameOneMap";
import GameThreeMap from "../dataMap/GameThreeMap";
import ColorHairDataMap from "../dataMap/ColorHairDataMap";
import ColorSkinDataMap from "../dataMap/ColorSkinDataMap";
import ShirtMap from "../dataMap/ShirtMap";
import TrouserMap from "../dataMap/TrouserMap";

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
const  ShirtData= [
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
        img: require("../../assets/image/shoes3.png")
    },
    {
        id: 2,
        img: require("../../assets/image/shoes4.png")
    },
    {
        id: 3,
        img: require("../../assets/image/shoes5.png")
    },

]


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

export const ColorSkinDataFunc = () => {
    return (
        ColorSkinData.map((item, index) => {
            return (
                <ColorSkinDataMap
                    item={item}
                    index={index}
                    key={index}
                />
            )
        })
    )
}

export const ColorHairDataFunc = () => {
    return (
        ColorHairData.map((item, index) => {
            return (
                <ColorHairDataMap
                    item={item}
                    index={index}
                    key={index}
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
