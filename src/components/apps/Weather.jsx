import React, { useEffect, useState } from 'react'
import Search from './Search'

const Weather = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function handleWeathetData(parems) {
    setLoading(true);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${parems}&appid=5180df8982c7a73614daf1bd0326e314`);
      const data = await response.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  function handleSearch() {
    handleWeathetData(search);
  }
  useEffect(()=>{
    handleWeathetData('London')
  },[])

  console.log(weatherData);
  
  return (
    <div>
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
{
  loading? <div className="">Loading ...</div>: <div className="">
    <h2> City :- {weatherData?.name}</h2>
    <h3>Country :-  {weatherData?.sys?.country}</h3>
    <p>Wather : - {weatherData?.weather[0]?.main}</p>
  </div>
}
    </div>
  )
}

export default Weather