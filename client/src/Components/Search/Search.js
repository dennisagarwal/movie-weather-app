import React from "react";
// import "../Row/Row.scss";
import "./Search.scss";
import { useState } from "react";
import { useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import SearchBox from "../SearchBox/SearchBox";
import SearchMovieName from "../SearchMovieName/SearchMovieName";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import WatchLater from "../WatchLater/WatchLater";
const API_KeyOMDb = "edf3f73f";

function Search() {
  const [movies, setMovies] = useState([]);
  const [watchLaterMovies, setWatchLaterMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [trailerUrl, setTrailerUrl] = useState("");

  // let settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 10,
  //   slidesToScroll: 8,

  // };
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
      movieTrailer(movie?.Title || "")
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
    //async function for hooks as axios will take some time to load from third party server
    //fetching request is bringing the data from the url in axios.get()
    async function getMovieRequest(searchValue) {
      const waitToLoad = await axios.get(
        `http://www.omdbapi.com/?s=${searchValue}&apikey=edf3f73f&page=1`
      );
      //`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}` is one example
      if (waitToLoad.data.Search) {
        setMovies(waitToLoad.data.Search);
      }
      console.log(waitToLoad.data.Search);
      return waitToLoad;
    }
    getMovieRequest(searchValue);
  }, [searchValue]);

  //use effect to keep the local storage movies
useEffect(()=>{
  const watchLaterMovieSaved= JSON.parse(
    localStorage.getItem('watchLaterMovieLocalStorage')
  )
  setWatchLaterMovies(watchLaterMovieSaved)
},[])
//saving watch later movies to local storage in string format
  const localStorageMovie=(items)=>{
    localStorage.setItem('watchLaterMovieLocalStorage',JSON.stringify(items))
  };
  console.log(movies);
// click function to add movie to watch later list
  const handleWatchClick = (movie) => {
    console.log("handleWatchClick")
    console.log(watchLaterMovies)
    const newWatchLater = [...watchLaterMovies, movie];
    setWatchLaterMovies(newWatchLater);
    localStorageMovie(newWatchLater)
  };
// click function to remove movie from watch later list
  const handleRemoveWatchClick = (movie) => {
    console.log("handleRemoveWatchClick")
    console.log(watchLaterMovies)
    const newWatchLater = watchLaterMovies.filter((watchLaterMovie) => watchLaterMovie.imdbID!=movie.imdbID);
    setWatchLaterMovies(newWatchLater);
    localStorageMovie(newWatchLater);
  };

  return (
    <>
      <div className="rowSearch">
        <SearchMovieName headingSearch="Dont Worry If You Are Picky, Search Here" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        {/* <Slider {...settings} className="row__cards"> */}
        <div  className="rowSearch__cards">
          {movies.map((movie, index) => (
            <div className="rowSearch__container">
              <img
                key={movie.id}
                className="rowSearch__card"
                src={movie.Poster}
                alt="movie"
                onClick={() => handleSearchMovieClick(movie)}
                // onClick={() => handleWatchClick(movie)}
              />

              <div className="rowSearch__overlay"
                onClick={() => handleWatchClick(movie)}
                >
                <WatchLater/>
              </div>
            </div>
          ))}
        </div>
        {trailerUrl && (
          <Youtube
            videoId={trailerUrl}
            opts={opts}
            onReady={_onReady}
            onStateChange={_onStateChange}
          />
        )}
      </div>
      <div className="rowSearch">
        <SearchMovieName headingSearch="Watch Later" />

        {/* <Slider {...settings} className="row__cards"> */}
        <div  className="rowSearch__cards">
          {watchLaterMovies.map((watchLaterMovie, index) => (

            <div className="rowSearch__container">
              <img
                className="rowSearch__card"
                key={watchLaterMovie.id}
                src={watchLaterMovie.Poster}
                alt="movie"
                onClick={() => handleWatchClick(watchLaterMovie)}
              />
              <div className="rowSearch__overlay"
              onClick={() => handleRemoveWatchClick(watchLaterMovie)}
>
                <WatchLater />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;

//https://reactjsexample.com/a-react-hook-for-playing-sound-effects/