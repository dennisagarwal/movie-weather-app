import React from "react";
import "./Search.scss"
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
import WatchLater from "../WatchLater/WatchLater";
const API_KeyOMDb = "edf3f73f";

function Search() {

  const [movies, setMovies] = useState([])
  const [watchLaterMovies, setWatchLaterMovies] = useState([]);
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

const  handleWatchClick=(movie)=>{
  const newWatchLater=[...watchLaterMovies,movie];
setWatchLaterMovies(newWatchLater);
}

  return (
<>
    <div className="rowSearch">
    <SearchMovieName headingSearch='Dont Worry If You Are Picky, Search Here' />
     <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}  />

      <Slider {...settings} className="rowSearch__cardsSearch">
        {movies.map((movie, index) => (
          <div className="rowSearch-container">
            <img
              key={movie.id}
            className="rowSearch__cardSearch"
            src={movie.Poster}
            alt="movie"
            // onClick={() => handleSearchMovieClick(movie)}
            onClick={() => handleWatchClick(movie)}
            />
            <div className="rowSearch__overlay">
              <WatchLater />
            </div>
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
          <div className="rowSearch">
    <SearchMovieName headingSearch='Watch Later' />

      <Slider {...settings} className="rowSearch__cardsSearch">
        {watchLaterMovies.map((watchLaterMovies, index) => (
          <div className="rowSearch-container">
            <img
              key={watchLaterMovies.id}
            className="rowSearch__cardSearch"
            src={watchLaterMovies.Poster}
            alt="movie"
            // onClick={() => handleSearchMovieClick(movie)}
            // onClick={() => handleWatchClick(movie)}
            />
            {/* <div className="row__overlay">
              <WatchLater />
            </div> */}
          </div>
        ))}
      </Slider>


      </div>
</>

  );
}

export default Search;
