import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import styles from "./Row.scss"
const API_KEY = "e0cf5e21ab86909a17aa9ca1c8c7a5b4";
const urlStart="https://image.tmdb.org/t/p/original/"
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
//`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}` is one example
setMovies(waitToLoad.data.results)
// console.log(waitToLoad.data.results)
return waitToLoad
} getRequest();
},[requestUrl]);


console.log(movies)
  return (
    <div className="row">
    <h2>{heading}</h2>
    <div className="row__cards">
    {movies.map(movie=>(

      <img className="row__card"src={`${urlStart}${movie.poster_path}`} alt={movie.name}/>))}
    </div>
{/* <h2>{props.heading}</h2> */}

    </div>
  )
}

export default Row;


