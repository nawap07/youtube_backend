 import React from 'react'
 
 const Search = ({search,setSearch,handleSearch}) => {
   return (
     <div> 
      <input
      type='text'
      placeholder='Enter Your city name'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
     </div>
   )
 }
 
 export default Search