import React from "react";
import "./WeatherRow.scss";
import { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import SearchMovieName from "../SearchMovieName/SearchMovieName";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
const weather_API_key = "0858318a4ecc5f724139b463348ce24e";

function WeatherRow() {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getWeather);
  }, []);
  //latitude= geoLocation.coords.latitude
  function getWeather(geoLocation) {
    const { latitude, longitude } = geoLocation.coords;
    const geoWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0858318a4ecc5f724139b463348ce24e&units=metric`;
    axios.get(geoWeatherApiUrl).then((res) => {
      const currentWeather = res.data.weather[0].main;
      setWeather(currentWeather);
      console.log(currentWeather);
      getMovieWeatherRequest(currentWeather);
    });
  }

  function getMovieWeatherRequest(currentWeather) {
    axios
      .get(
        `https://www.omdbapi.com/?s=${currentWeather}&apikey=edf3f73f&page=1`
      )
      .then((res) => {
        console.log(res.data);
        setMovies(res.data.Search);
      });
  }

<<<<<<< Updated upstream
=======
       function getMovieWeatherRequest(currentWeather) {
      axios.get(
        `https://www.omdbapi.com/?s=${currentWeather}&apikey=edf3f73f&page=1`
      ).then((res)=>{
      console.log(res.data)
      setMovies(res.data.Search)
      })
    }



  // const city = UseGeolocation({city})
>>>>>>> Stashed changes
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
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
    event.target.pauseVideo();
  };
<<<<<<< Updated upstream
  const _onStateChange = (event) => {};
=======
  const _onStateChange = (event) => {
    // event.target.pauseVideo()
  };

>>>>>>> Stashed changes

  console.log(movies);

  return (
    <div className="row">
      <SearchMovieName headingSearch={weather} />
      <Slider {...settings} className="row__cards">
        {movies.map((movie, index) => (
          <div>
            <img
              key={movie.id}
              className="row__card"
              src={movie.Poster}
              alt="movie"
              onClick={() => handleSearchMovieClick(movie)}
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

export default WeatherRow;
