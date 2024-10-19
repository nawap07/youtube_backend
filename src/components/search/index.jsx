import React from 'react'

const SearchComponents = ({search,setSearch,handleSearch}) => {
  return (
    <div className='search-engine'> 
        <input
        type='text'
        className='city-search'
        placeholder='Enter city Name'
        name='search'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        <button className='search-button' onClick={handleSearch}>Search Weather</button>
    </div>
  )
}

export default SearchComponents