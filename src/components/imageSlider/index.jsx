import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import "./style.css"

const ImageSlider = ({ url, limits = 6 }) => {
    const [imagesData, setImagesData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [stats, setStates] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);

    function hanlePrivous() {
        setStates(stats === 0 ? imagesData.length - 1 : stats - 1)
    }

    function hanlNext() {
        setStates(stats === imagesData.length-1 ? 0 : stats + 1)
    }

    async function fetchImageData(urlImg) {
        try {
            setLoading(true)
            const response = await fetch(`${urlImg}?page=1&limit=${limits}`)
            const data = await response.json();
            if (data) {
                setImagesData(data);
                setLoading(false)
            }

        } catch (error) {
            console.log(error.meggage);
            setLoading(false)
            setErrorMsg("URL IS WRONG")


        }
    }
    useEffect(() => {
        if (url !== '') fetchImageData(url);
    }, [url])
    console.log(imagesData);


    if (loading) return <div>Loading....</div>
    if (errorMsg !== null) {
        return <div>{errorMsg} Something Went Wrong...</div>
    }

     
    return (
        <div className='container'>
            <BsArrowLeftCircleFill className='arrow arrow-left' size={20} onClick={hanlePrivous} />
            {
                imagesData.map((image, index) => (
                    <img key={image.id} src={image?.download_url} alt={image.author}
                        className={stats === index ? "current-image" : "current-image hide-image"}
                    />
                ))
            }
            <BsArrowRightCircleFill size={20} className='arrow arrow-right' onClick={hanlNext} />
            <span className='circle-indictor'>
                {
                    imagesData && imagesData.length ? imagesData.map((_, index) => <button key={index} className={stats === index ? 'current-indicator' : 'current-indicator hide-indicator'} onClick={() => setStates(index)}>

                    </button>) : null
                }
            </span>
        </div>
    )
}

export default ImageSlider