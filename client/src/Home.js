import "./Home.scss";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Row from "./Components/Row/Row";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import requests from "./requests";
import Search from "./Components/Search/Search";
import CityRow from "./Components/CityRow/CityRow";
import WeatherRow from "./Components/WeatherRow/WeatherRow";
// import AuthButton from './Components/AuthButton/AuthButton';
// import LoginPage from './Components/LoginPage/LoginPage';
import ModalButton from "./Components/ModalButton/ModalButton";
// export const API_URL = 'http://localhost:5000';
function Home() {
  // const location=useGeolocation()

  return (
    // <Router>
    <div className="Home">

      <NavBar />
      <Hero />
      <Row heading="Trending Now" requestUrl={requests.requestTrending} />
      <Row
        heading="Netflix Originals"
        requestUrl={requests.requestNetFlixOriginals}
      />
      <Row
        heading="Amazon Originals"
        requestUrl={requests.requestAmazonOriginals}
      />
      <Row heading="Top Rated Movies" requestUrl={requests.requestTopRated} />
      <Row heading="Action Movies" requestUrl={requests.requestActionMovies} />
      <Row
        heading="Romantic Movies"
        requestUrl={requests.requestRomanceMovies}
      />
      <Row heading="Comedy Movies" requestUrl={requests.requestComedyMovies} />
      <Row heading="Documentories" requestUrl={requests.requestDocumentaries} />
      <CityRow heading="City" />
      <WeatherRow heading="Weather" />
      <Search />
      <ModalButton />
    </div>
  );
}

export default Home;
