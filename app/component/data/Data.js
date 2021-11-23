import React from "react";
import GameTwoMap from "../dataMap/GameTwoMap";
import GameOneMap from "../dataMap/GameOneMap";
import GameThreeMap from "../dataMap/GameThreeMap";

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
        text:"Share"
    },
    {
        text:"To give with a happy heart"
    },
    {
        text:"To keep everything for yourself"
    },
    {
        text:"Help others"
    },
]

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

export const GameThreeDataFunc = () =>{
    return(
        GameThreeData.map((item,index)=>{
            return(
                <GameThreeMap
                item={item}
                index={index}
                key={index}
                />
            )
        })
    )
}
