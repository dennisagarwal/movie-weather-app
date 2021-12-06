import React from "react";
import "./CityRow.scss";
import { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
// import SearchBox from "../SearchBox/SearchBox";
import SearchMovieName from "../SearchMovieName/SearchMovieName";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
// import WatchLater from "../WatchLater/WatchLater";

//weather and geoLocation Api
const weather_API_key = "0858318a4ecc5f724139b463348ce24e";
//reference : https://www.youtube.com/watch?v=VK9F8BWrOgY

function CityRow() {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getCity);
  }, []);
  //latitude= geoLocation.coords.latitude
  function getCity(geoLocation) {
    const { latitude, longitude } = geoLocation.coords;
    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    axios
      .get(geoApiUrl)
      .then((res) => {
        // console.log(data);
        // console.log(data.city, data.locality);
        // const city = data.city;
setCity(res.data.city)
        console.log(res.data.city);
        getMovieCityRequest(res.data.city)
      });
  }

       function getMovieCityRequest(city) {
      axios.get(
        `http://www.omdbapi.com/?s=${city}&apikey=edf3f73f&page=1`
      ).then((res)=>{
      console.log(res.data)
      setMovies(res.data.Search)
      })
    }



  // const city = UseGeolocation({city})
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
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const _onStateChange = (event) => {
    // event.target.pauseVideo()
  };

  // function updateCity(city){
  // setCity(city)
  // }

  // useEffect(() => {
  //   //async function for hooks as axios will take some time to load from third party server
  //   //fetching request is bringing the data from the url in axios.get()
  //   async function getMovieCityRequest(city) {
  //     const waitToLoad = await axios.get(
  //       `http://www.omdbapi.com/?s=${city}&apikey=edf3f73f&page=1`
  //     );
  //     //`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}` is one example
  //     if (waitToLoad.data.Search) {
  //       setMovies(waitToLoad.data.Search);
  //     }
  //     console.log(waitToLoad.data.Search);
  //     return waitToLoad;
  //   }

  //   getMovieCityRequest(city);
  // }, [city]);

  console.log(movies);

  return (
    <div className="row">
      <SearchMovieName headingSearch={city} />
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

export default CityRow;
