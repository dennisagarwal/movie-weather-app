import './App.scss';
import Row from './Components/Row/Row';
import Hero from './Components/Hero/Hero';
import NavBar from './Components/NavBar/NavBar';
import requests from './requests';
// import { useGeolocation } from './useGeolocation/useGeolocation';
import Search from './Components/Search/Search';
// import WatchLater from './Components/WatchLater/WatchLater';
import CityRow from './Components/CityRow/CityRow';
// import { useState } from 'react';
// import { useEffect } from 'react';
// const API_KEY = "e0cf5e21ab86909a17aa9ca1c8c7a5b4";
function App() {

  // const location=useGeolocation()

  return (
    <div className="App">
    <NavBar />
    <Hero />
     <Row heading="Trending Now" requestUrl={requests.requestTrending} />
    <Row heading="Netflix Originals" requestUrl={requests.requestNetFlixOriginals}/>
    <Row heading="Amazon Originals" requestUrl={requests.requestAmazonOriginals}/>
    <Row heading="Top Rated Movies" requestUrl={requests.requestTopRated}/>
    <Row heading="Action Movies" requestUrl={requests.requestActionMovies}/>
    <Row heading="Romantic Movies" requestUrl={requests.requestRomanceMovies}/>
    <Row heading="Comedy Movies" requestUrl={requests.requestComedyMovies}/>
    <Row heading="Documentories" requestUrl={requests.requestDocumentaries}/>
    <CityRow heading="Weather"/>
    <Search  />
<p>location.loaded? JSON.stringify(location):"location not available(</p>
    </div>
  );
}

export default App;
