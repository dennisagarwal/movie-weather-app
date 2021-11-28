import React from 'react';

const SearchBox = ({searchValue,setSearchValue}) => {
	return (
		<div className='searchBox'>
			<input
				className='searchBox__input'
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
		</div>
	);
};

export default SearchBox;