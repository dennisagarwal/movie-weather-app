import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Row from './Components/Row/Row';
import Hero from './Components/Hero/Hero';
import NavBar from './Components/NavBar/NavBar';
import requests from './requests';
// import { useGeolocation } from './useGeolocation/useGeolocation';
import Search from './Components/Search/Search';
// import WatchLater from './Components/WatchLater/WatchLater';
import UseGeolocation from './Components/UseGeolocation/UseGeolocation';
import CityRow from './Components/CityRow/CityRow';
import WeatherRow from './Components/WeatherRow/WeatherRow'
import AuthButton from './Components/AuthButton/AuthButton';
import LoginPage from './Components/LoginPage/LoginPage';
import ModalButton from './Components/ModalButton/ModalButton';

// import { useState } from 'react';
// import { useEffect } from 'react';
// const API_KEY = "e0cf5e21ab86909a17aa9ca1c8c7a5b4";
export const API_URL = 'http://localhost:3000';
function App() {

  // const location=useGeolocation()

  return (
    // <Router>
    <div className="App">

          {/* <AuthButton /> */}
           {/* <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul> */}
          {/* <Route path="/login" component={LoginPage} /> */}
          {/* <Route path="/public" component={PublicPage} /> */}
          {/* <PrivateRoute path="/protected" component={ProtectedPage} /> */}

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
    <CityRow heading="City"/>
    <WeatherRow heading="Weather"/>
    <Search  />
<ModalButton />
    </div>
  );
}

export default App;
