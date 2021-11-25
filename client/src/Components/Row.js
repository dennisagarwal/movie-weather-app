import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const API_KEY = "e0cf5e21ab86909a17aa9ca1c8c7a5b4";
// function Row(props) {, we are destructuring in the line below
//passing heading and request  url as props below
function Row({heading,requestUrl}) {
//use of react hook
//setting initial state as movies
const[movies,setMovies]= useState([]);

useEffect(()=>{
  //async function for hooks as axios will take some time to load from third party server
  //fetching request is bringing the data from the url in axios.get()
async function getRequest(){
const waitToLoad= await axios.get(requestUrl);
//"https://api.themoviedb.org/3/trending/all/day?api_key={API_KEY}" is one example
setMovies(waitToLoad.data.results)
console.log(waitToLoad.data.results)
return waitToLoad
} getRequest();
},[requestUrl]);


console.log(movies)
  return (
    <div className="row">
    <div className="row__container">
    {movies.map(movie=>(
      <img src={movie.poster_path} alt={movie.name}/>))}
    </div>
{/* <h2>{props.heading}</h2> */}
<h2>{heading}</h2>
    </div>
  )
}

export default Row;


