import React from "react";
import GameTwoMap from "../dataMap/GameTwoMap";
import GameOneMap from "../dataMap/GameOneMap";

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
