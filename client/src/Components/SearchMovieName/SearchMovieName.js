import React from 'react';
import "./SearchMovieName.scss";

const SearchMovieName = ({headingSearch}) => {
	return (
		<div className='headingSearch'>
			<h2>{headingSearch}</h2>
		</div>
	);
};

export default SearchMovieName;