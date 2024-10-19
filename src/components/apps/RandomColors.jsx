import React, { useEffect, useState } from 'react'

const RandomColors = () => {
    const [colorType, setColorType] = useState("hex");
    const [color, setColor] = useState("#000000");


    function generateLength(length) {
        return Math.floor(Math.random() * length);
    }
    function handleHexColor() {
        let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];
        let Hexcolor = "#";
        for (let i = 0; i < 6; i++) {
            Hexcolor += hex[generateLength(hex.length)]
        }
        setColor(Hexcolor);
    }
    function handleRgbColor() {
        const r = generateLength(255);
        const g = generateLength(255);
        const b = generateLength(255);
        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(() => {
        if (colorType === 'rgb') handleRgbColor();
        else handleHexColor();
    }, [colorType])
    return (
        <div style={{ width: '100vw', height: '40vh', background: color }}>
            <div className="">
                <button onClick={() => setColorType("hex")}>HEX</button>
                <button onClick={() => setColorType("rgb")}>RGB</button>
                <button onClick={colorType === 'hex' ? handleHexColor : handleRgbColor}>COLOR GENERATE</button>
            </div>
            <div className="" style={{ color: '#fff', fontSize: '30px' }}>
                {
                    colorType === 'hex' ? "HEX COLOR" : "RGB COLOR"
                }
                <h3>{color}</h3>
            </div>
        </div>
    )
}

export default RandomColors