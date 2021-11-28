import './App.scss';
import Row from './Components/Row/Row';
import Hero from './Components/Hero/Hero';
import NavBar from './Components/NavBar/NavBar';
import requests from './requests';
import { useGeolocation } from './Components/useGeolocation/useGeolocation';
import Search from './Components/Search/Search';
// import { useState } from 'react';
// import { useEffect } from 'react';
// const API_KEY = "e0cf5e21ab86909a17aa9ca1c8c7a5b4";
function App() {

  const location=useGeolocation()

  // const [movies, setMovies] = useState([])
  // const getMovieRequest = async () => {
  //   const urlSearch = "http://www.omdbapi.com/?s=raja&apikey=edf3f73f";
  //   const response = await fetch(urlSearch);
  //   const responseJson= await response.json()
  //   console.log(responseJson);
  //   setMovies(responseJson.Search);
  // };

  // useEffect(()=>{
  //   getMovieRequest();
  // }, []);

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
    <Search />
<h1>Hello World</h1>
<p>location.loaded? JSON.stringify(location):"location not available(</p>
    </div>
  );
}

export default App;
