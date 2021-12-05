import React, {useState} from "react"
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
import AnimalMap from "../dataMap/AnimalMap";
import MiddleShoesGirl1 from "../../svg/middleShoes/MiddleShoesGirl1";
import MiddleShoesGirl2 from "../../svg/middleShoes/MiddleShoesGirl2";
import BotasGirlLeft1 from "../../svg/botasShoes/botasGirl2/BotasGirlLeft1";
import BotasGirlRight1 from "../../svg/botasShoes/botasGirl2/botasGirlRight1";
import BotasGirlLeft from "../../svg/botasShoes/botasGirl/BotasGirlLeft";
import BotasGirlRight from "../../svg/botasShoes/botasGirl/BotasGirlRight";

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

const animalData = [
    {
        img: require("../../assets/image/animal.png"),
        name: "Tilly",
        QrCodeImg: require("../../assets/image/qrIcon.png")
    },
    {
        img: require("../../assets/image/Tilly.png"),
        name: "George",
        QrCodeImg: require("../../assets/image/qrIcon.png")
    }
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
        color: "#88563D"
    },
    {
        id: 2,
        color: "#411814"
    },
    {
        id: 3,
        color: "#FFEDE3"
    },
]
const ShirtData = [
    {
        id: 1,
        img: require("../../assets/image/shoes1.png"),
        shoes: MiddleShoesGirl2()
    },
    {
        shoes: MiddleShoesGirl1(),
        id: 2,
        img: require("../../assets/image/shoes2.png")
    },


]
const TrouserData = [
    {
        id: 1,
        img: require("../../assets/image/shoes3.png"),
        footerShoes: FotterShoes3()
    },
    {
        id: 2,
        img: require("../../assets/image/shoes4.png"),
        footerShoes: FotterShoes2()
    },
    {
        id: 3,
        img: require("../../assets/image/shoes5.png"),
        footerShoes: FooterShoes1()
    },

]

const BotasData = [
    {
        id: 1,
        img: require("../../assets/image/Botas1.png"),
        left: BotasGirlLeft1(),
        right: BotasGirlRight1()
    },
    {
        id: 2,
        img: require("../../assets/image/Botas2.png"),
        left: BotasGirlLeft(),
        right: BotasGirlRight()
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

export const AnimalDataFunc = () => {
    return (
        animalData.map((item, index) => {
            return (
                <AnimalMap
                    item={item}
                    index={index}
                    key={index}
                />
            )
        })
    )
}


export const AccessoriesDataFunc = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const widthBorder = (item) => {
        setActiveIndex(item)
    }
    return (
        AccessoriesData.map((item, index) => {
            return (
                <AccessoriesDataMap
                    item={item}
                    index={index}
                    key={index}
                    activeIndex={activeIndex}
                    widthBorder={widthBorder}
                />
            )
        })
    )
}


export const BotasDataFunc = (props) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const widthBorder = (item) => {
        setActiveIndex(item)
    }
    return (
        BotasData.map((item, index) => {
            return (
                <BotasDataMap
                    item={item}
                    index={index}
                    key={index}
                    activeIndex={activeIndex}
                    widthBorder={widthBorder}
                    BotasRightMap={props.BotasRightMap}
                    BotasLeftMap={props.BotasLeftMap}
                />
            )
        })
    )
}


export const ShirtDataFunc = (props) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const widthBorder = (item) => {
        setActiveIndex(item)
    }
    return (
        ShirtData.map((item, index) => {
            return (
                <ShirtMap
                    item={item}
                    index={index}
                    key={index}
                    activeIndex={activeIndex}
                    widthBorder={widthBorder}
                    shirtShoesMap={props.shirtShoesMap}
                />
            )
        })
    )
}
export const TrouserDataFunc = (props) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const widthBorder = (item) => {
        setActiveIndex(item)
    }
    return (
        TrouserData.map((item, index) => {
            return (
                <TrouserMap
                    item={item}
                    index={index}
                    key={index}
                    activeIndex={activeIndex}
                    widthBorder={widthBorder}
                    trouserShoesMap={props.trouserShoesMap}
                />
            )
        })
    )
}

export const ColorSkinDataFunc = (props) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const widthBorder = (item) => {
        setActiveIndex(item)
    }

    return (
        ColorSkinData.map((item, index) => {
            return (
                <ColorSkinDataMap
                    item={item}
                    index={index}
                    key={index}
                    skinColorFunc={props.skinColorFunc}
                    widthBorder={widthBorder}
                    activeIndex={activeIndex}
                />
            )
        })
    )
}

export const ColorHairDataFunc = (props) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const widthBorder = (item) => {
        setActiveIndex(item)
    }
    return (
        ColorHairData.map((item, index) => {
            return (
                <ColorHairDataMap
                    item={item}
                    index={index}
                    key={index}
                    setHairColorFunc={props.setHairColorFunc}
                    activeIndex={activeIndex}
                    widthBorder={widthBorder}
                />
            )
        })
    )
}


export const GameTwoDataFunc = (props) => {
    return (
        gameTwoData.map((item, index) => {
            return (
                <GameTwoMap
                    item={item}
                    index={index}
                    key={index}
                    twoProps={props.twoProps}
                />
            )
        })
    )
}

export const GameThreeDataFunc = (props) => {
    return (
        GameThreeData.map((item, index) => {
            return (
                <GameThreeMap
                    item={item}
                    index={index}
                    key={index}
                    propsNavigation={props.propsNavigation}
                />
            )
        })
    )
}
