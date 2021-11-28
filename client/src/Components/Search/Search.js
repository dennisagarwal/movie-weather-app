import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import SearchBox from "../SearchBox/SearchBox";
import SearchMovieName from "../SearchMovieName/SearchMovieName";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
const API_KeyOMDb = "edf3f73f";

function Search() {

  const [movies, setMovies] = useState([])
  const [searchValue,setSearchValue]=useState("");
  const [trailerUrl, setTrailerUrl] = useState("");

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 8,
  };
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleSearchMovieClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.Title ||
        ""
      )
        .then((url) => {
          console.log(movie?.Title || "hello");
          //https://www.youtube.com/watch?v=_nBlN9yp9R8
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(new URL(url).search);
          console.log(URLSearchParams);
          setTrailerUrl(urlParams.get("v"));
          console.log(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };


  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const _onStateChange = (event) => {
    // event.target.pauseVideo()
  };

  useEffect(() => {
    for (let page=1 ; page<2;page++){
      page++
    }
    //async function for hooks as axios will take some time to load from third party server
    //fetching request is bringing the data from the url in axios.get()
    async function getMovieRequest(searchValue) {

      const waitToLoad = await axios.get( `http://www.omdbapi.com/?s=${searchValue}&apikey=edf3f73f&page=1`);
      //`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}` is one example
     if(waitToLoad.data.Search){
      setMovies(waitToLoad.data.Search);
     }
      console.log(waitToLoad.data.Search)
      return waitToLoad;
    }
    getMovieRequest(searchValue);
  }, [searchValue]);
console.log(movies);
  return (
    <div className="row">
    <SearchMovieName headingSearch='Movies' />
     <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}  />

      <Slider {...settings} className="row__cards">
        {movies.map((movie, index) => (
          <div>
            <img
              key={movie.id}
            className="row__card"
            src={movie.Poster}
            alt="movie"
            onClick={() => handleSearchMovieClick(movie)
            }
            />
          </div>
        ))}
      </Slider>
      {trailerUrl && (
        <Youtube
          videoId={trailerUrl}
          opts={opts}
          onReady={_onReady}
          onStateChange={_onStateChange}
        />
      )}
    </div>
  );
}

export default Search;
