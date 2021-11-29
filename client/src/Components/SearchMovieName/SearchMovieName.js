import React from 'react';
import "./SearchMovieName.scss";

const SearchMovieName = ({headingSearch}) => {
	return (
		<div className='headingSearch'>
			<h1>{headingSearch}</h1>
		</div>
	);
};

export default SearchMovieName;