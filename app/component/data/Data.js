import React, {useState} from "react"
import GameTwoMap from "../dataMap/GameTwoMap";
import GameThreeMap from "../dataMap/GameThreeMap";
import ColorHairDataMap from "../dataMap/ColorHairDataMap";
import ColorSkinDataMap from "../dataMap/ColorSkinDataMap";
import ShirtMap from "../dataMap/ShirtMap";
import TrouserMap from "../dataMap/TrouserMap";
import BotasDataMap from "../dataMap/BotasDataMap";
import AccessoriesDataMap from "../dataMap/accessoriesDataMap";
import AnimalMap from "../dataMap/AnimalMap";
import ZooParkMap from "../dataMap/ZooParkMap";
import ColorSkinBoyDataMap from "../dataMap/ColorSkinBoyDataMap";
import TrouserDataBoyMap from "../dataMap/TrouserDataBoyMap";
import ShirtDataBoyMap from "../dataMap/ShirtDataBoyMap";
import AccessoriesBoyMap from "../dataMap/AccessoriesBoyMap";


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
const ZooparkData = [
    {
        img: require("../../assets/image/animal.png"),
        name: "Tilly",
        QrCodeImg: require("../../assets/image/qrIcon.png")
    },
    {
        img: require("../../assets/image/Tilly.png"),
        name: "George",
        QrCodeImg: require("../../assets/image/qrIcon.png")
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

const ColorHairBoyData = [
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
        color: "#FFD25E"
    },
    {
        id: 4,
        color: "#8B0909"
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
const ColorSkinBoyData = [
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
        color: "#F8DBBB"
    },
]
const ShirtData = [
    {
        id: 1,
        shoes: require("../../assets/image/Shirt/Shirt1.png"),
        img: require("../../assets/image/shoes2.png")
    },
    {
        shoes: require("../../assets/image/Shirt/Shirt2.png"),
        id: 2,
        img: require("../../assets/image/shoes1.png"),
    },
]
const ShirtDataBoy = [
    {
        shoes: require("../../assets/image/ShirtBoy/ShirtBoy.png"),
        id: 2,
        img: require("../../assets/image/ShoesBoy1.png"),
    },
    {
        shoes: require("../../assets/image/ShirtBoy/ShirtBoy1.png"),
        id: 1,
        img: require("../../assets/image/ShoesBoy2.png"),
    },
]
const TrouserData = [
    {
        id: 1,
        img: require("../../assets/image/shoes3.png"),
        footerShoes: require("../../assets/image/Trouser/trouser2.png")
    },
    {

        id: 2,
        img: require("../../assets/image/shoes4.png"),
        footerShoes: require("../../assets/image/Trouser/trouser1.png")
    },
    {
        id: 3,
        img: require("../../assets/image/shoes5.png"),
        footerShoes: require("../../assets/image/Trouser/trouser3.png")
    },
]
const TrouserDataBoy = [
    {
        id: 2,
        img: require("../../assets/image/shoes4.png"),
        footerShoes: require("../../assets/image/Trouser/trouser1.png")
    },
    {
        id: 3,
        img: require("../../assets/image/shoes5.png"),
        footerShoes: require("../../assets/image/Trouser/trouser3.png")
    },
]

const BotasData = [
    // {
    //     id: 1,
    //     img: require("../../assets/image/Botas1.png"),
    //     botas: require("../../assets/image/botas/botas1.png")
    // },
    {
        id: 2,
        img: require("../../assets/image/Botas2.png"),
        botas: require("../../assets/image/botas/botas2.png")
    },
    {
        id: 3,
        img: require("../../assets/image/botas3.png"),
        botas: require("../../assets/image/botas/botas3.png")
    },
]
const BotasBoyData = [
    // {
    //     id: 1,
    //     img: require("../../assets/image/Botas1.png"),
    //     botas: require("../../assets/image/botas/botas1.png")
    // },
    {
        id: 2,
        img: require("../../assets/image/botas3.png"),
        botas: require("../../assets/image/botas/botas3.png")
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
        id: 4,
        img: require("../../assets/image/accessories4.png"),
    },
    {
        id: 5,
        img: require("../../assets/image/accessories5.png"),
    },
]
const AccessoriesDataBoy = [
    {
        id: 1,
        img: require("../../assets/image/AccessoriesBoy/accessoriesBoy1.png"),
    },
    {
        id: 2,
        img: require("../../assets/image/AccessoriesBoy/accessoriesBoy2.png"),
    },

]

export const AnimalDataFunc = (props) => {
    return (
        ZooparkData.map((item, index) => {
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
export const AccessoriesDataBoyFunc = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const widthBorder = (item) => {
        setActiveIndex(item)
    }
    return (
        AccessoriesDataBoy.map((item, index) => {
            return (
                <AccessoriesBoyMap
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

export const ZooparkFunc = () => {
    return (
        ZooparkData.map((item, index) => {
            return (
                <ZooParkMap
                    item={item}
                    index={index}
                    key={index}
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
                    botasFunc={props.botasFunc}
                />
            )
        })
    )
}
export const BotasDataBoyFunc = (props) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const widthBorder = (item) => {
        setActiveIndex(item)
    }
    return (
        BotasBoyData.map((item, index) => {
            return (
                <BotasDataMap
                    item={item}
                    index={index}
                    key={index}
                    activeIndex={activeIndex}
                    widthBorder={widthBorder}
                    botasFunc={props.botasFunc}
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

export const ShirtDataBoyFunc = (props) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const widthBorder = (item) => {
        setActiveIndex(item)
    }
    return (
        ShirtDataBoy.map((item, index) => {
            return (
                <ShirtDataBoyMap
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
export const TrouserDataBoyFunc = (props) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const widthBorder = (item) => {
        setActiveIndex(item)
    }
    return (
        TrouserDataBoy.map((item, index) => {
            return (
                <TrouserDataBoyMap
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
export const ColorSkinDataBoyFunc = (props) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const widthBorder = (item) => {
        setActiveIndex(item)
    }
    return (
        ColorSkinBoyData.map((item, index) => {
            return (
                <ColorSkinBoyDataMap
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
export const ColorHairDataBoyFunc = (props) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const widthBorder = (item) => {
        setActiveIndex(item)
    }
    return (
        ColorHairBoyData.map((item, index) => {
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
