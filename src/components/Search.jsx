import React, { useState } from 'react'

const Search = ({onInputChange}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onInputChange(value);
  };
  
  return (
    <div className='z-50 flex justify-center w-full mt-20 text-black bg-white '>
        <input className='h-[20px] w-[80%] md:h-[40px] rounded-md p-4  md:pl-10 border-black border-2 text-base md:text-lg ' onChange={handleInputChange} value={searchValue} placeholder='Enter items to search'/>
    </div>
  )
}

export default Search