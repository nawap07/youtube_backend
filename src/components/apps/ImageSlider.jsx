import React, { useEffect, useState } from 'react'

const ImageSlider = ({ url, limit }) => {
    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [curentInex, setCurrentIndex] = useState(0);

    async function fetcDatas(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
            const data = await response.json();
            if (data) {
                setImage(data);
                setLoading(false)
            }

        } catch (error) {
            setError(error.message);
            setLoading(false)
        }
    }
    useEffect(() => {
        if (url !== '') fetcDatas(url);
    }, [url])

    console.log(image);
    

    if (loading) return <div className="">Loading....</div>
    if (error !== null) return <div className="">Error occure {error}</div>
    return (
        <div> 
            {
                image && image.length ?image.map((img)=>(
                    <img key={img.id} src={img.download_url} alt={img.author} style={{width:'200px' , height:'200px'}}/>
                )) :null
            }
        </div>
    )
}

export default ImageSlider