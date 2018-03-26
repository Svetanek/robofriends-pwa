import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  console.log('SearchBox');
  return (
    <div className='pa2'>
      <label for="search"></label>
      <input
        id='search'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;