import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import "../starRating/style.css"
const StarRating = ({ noOfStars = 10 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(index) {
        setRating(index);
    }
    function handleMousvent(index) {
        setHover(index)
    }
    function handleMouseLeave() {
        setHover(rating)
    }
    return (
        <div>
            {
                [...Array(noOfStars)].map((_, index) =>  {
                    index+=1
                    return   
                    <FaStar
                        key={index}
                        onClick={handleClick(index)}
                        onMouseEnter={handleMousvent(index)}
                        onMouseLeave={handleMouseLeave()}
                        className={index <= (rating || hover) ? 'active' : 'inactive'}
                    />
                })
            }
        </div>
    )
}

export default StarRating