import React, { useState } from 'react'
import data from './components/accordion/data'

const Accordation = () => {
    const [select, setSelect] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [multi, setMulti] = useState([]);

    function handleClickData(id) {
        setSelect(id === select ? null : id);
    }
    function handleAllSelect(id) {
        const copyData = [...multi];
        const findInexNo = copyData.indexOf(id);
        if (findInexNo === -1) {
            copyData.push(id)
        } else {
            copyData.splice(findInexNo, 1);
        }
        setMulti(copyData)
    }
    return (
        <div>
            <button onClick={() => setIsCorrect(!isCorrect)}>Select All</button>
            {
                data && data.length ? data.map((item) => (
                    <div className="" key={item.id}>
                        <div className="" onClick={isCorrect? () => handleAllSelect(item.id) : () => handleClickData(item.id)}>
                            <h3>{item.question}</h3>
                            <span>+</span>
                        </div>
                        <div className="">
                            {
                                select === item.id || multi.indexOf(item.id)!==-1? <p>{item.answer}</p> : null
                            }
                        </div>
                    </div>
                )) : "No Data is found"
            }
        </div>
    )
}

export default Accordation