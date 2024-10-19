import React, { useEffect, useState } from 'react'
import "./style.css"
import SearchComponents from '../search'
const WeatherApp = () => {
    const[search,setSearch]=useState('');
    const[loading,setLoading]=useState(false);
    const[waetherData,setWeatherData]=useState(null);

    async function fetchWeatherData(parems){
        setLoading(true)
        try {
            const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${parems}&appid=5668d499b857852e7afd8ed933719b51`)

            const data=await response.json();
            console.log(data)
            if(data){
                setWeatherData(data)
                setLoading(false)
                setSearch("")
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    async function hanleSearch(){
        fetchWeatherData(search)
    }

    useEffect(()=>{
        fetchWeatherData('jharkhand')
    },[])

    function getDateData(){
        return new Date().toLocaleDateString('en-us',{
            weekday:'long',
            month:'long',
            day:'numeric',
            year:'numeric'
        })
    }
  return (
    <div>
        <SearchComponents search={search} setSearch={setSearch} handleSearch={hanleSearch}/>
        {
            loading ? <div className="">Loading...</div>: <div className="">
                <h2>{waetherData?.name}</h2>,<span>{waetherData?.sys?.country}</span>
                <h4>{waetherData?.wind?.speed}</h4>

                <p>{waetherData?.weather[0]?.main}</p>
            </div>
        }
        <div className="">
            <span>{getDateData()}</span>
        </div>
        <div className="">
            {waetherData?.main?.temp}
            <p></p>
        </div>
    </div>
  )
}

export default WeatherApp