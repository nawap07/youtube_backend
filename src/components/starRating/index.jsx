import React, { useState } from 'react'
import "./style.css"
import { FaStar } from "react-icons/fa"
const StarRating = ({ noOfStars = 5 }) => {
    const[rating,setRating]=useState(0);
    const[hover,setHover]=useState(0);

    function handleClicks(getCurrentIndex) {
        setRating(getCurrentIndex)

    }
    function hanleMouseEvent(getCurrentIndex) {
        setHover(getCurrentIndex);

    }
    function hanleMouseLeave() {
        setHover(rating);

    }
    return (
        <div>
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1;
                    return <FaStar
                    className={index<=(rating || hover) ? 'active':'inactive'}
                        key={index}
                        onClick={() => handleClicks(index)}
                        onMouseEnter={() => hanleMouseEvent(index)}
                        onMouseLeave={() => hanleMouseLeave()}
                        size={40}
                    />
                })
            }
        </div>
    )
}

export default StarRating