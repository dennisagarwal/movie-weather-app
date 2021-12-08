import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Row.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
// import Search from "../Search/Search";
const API_KEY = "e0cf5e21ab86909a17aa9ca1c8c7a5b4";
<<<<<<< Updated upstream
const urlStart = `https://image.tmdb.org/t/p/original`;
=======
const urlStart = "https://image.tmdb.org/t/p/w92/";
>>>>>>> Stashed changes

// function Row(props) {, we are destructuring in the line below
//passing heading and request  url as props below
function Row({ heading, requestUrl }) {
  //use of react hook
  //setting initial state as movies
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    //async function for hooks as axios will take some time to load from third party server
    //fetching request is bringing the data from the url in axios.get()
    async function getRequest() {
      const waitToLoad = await axios.get(requestUrl);
      //`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}` is one example
      setMovies(waitToLoad.data.results);
      // console.log(waitToLoad.data.results)
      return waitToLoad;
    }
    getRequest();
  }, [requestUrl]);

  console.log(movies);
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 8,
  };
  //refer https://www.npmjs.com/package/react-youtube
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovieClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.name ||
          movie.original_name ||
          movie.title ||
          movie.overview ||
          ""
      )
        .then((url) => {
          console.log(movie?.name || movie.title || "hello");
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
  return (
    <div className="row">
      <h2>{heading}</h2>
      <Slider {...settings} className="row__cards">
        {movies.length>0 && movies.map((movie) => (
          <img
            key={movie.id}
            className="row__card"
            src={movie.poster_path != null ?`${urlStart}${movie.poster_path}`:"https://image.tmdb.org/t/p/original/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg"}
            alt={movie.name}
            onClick={() => handleMovieClick(movie)}
          />

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

export default Row;
