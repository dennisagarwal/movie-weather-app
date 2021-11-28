import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import requests from "../../requests";
import "./Hero.scss";
function Hero() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getRequest() {
      const bannerToLoad = await axios.get(requests.requestNetFlixOriginals);
      setMovie(
        bannerToLoad.data.results[
          Math.floor(Math.random() * bannerToLoad.data.results.length - 1)
        ]
      );
      return bannerToLoad;
    }
    getRequest();
  }, []);
  // console.log(movie);

  function truncate (str,n) {
    return str?.length > n ? str.substring(0, n-1) + "..." : str;
}

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <div className="banner__button">Play</div>
          <div className="banner__button">My List</div>
        </div>
        <p className="banner__description">
      {truncate(movie.overview,150)}
        </p>
      </div>
      <div className="banner__animation"> </div>
    </header>
  );
}

export default Hero;
