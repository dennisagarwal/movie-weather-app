import './App.css';
import Row from './Components/Row';
import requests from './requests';
const API_KEY = "e0cf5e21ab86909a17aa9ca1c8c7a5b4";

function App() {
  return (
    <div className="App">
     <Row heading="Trending Now" requestUrl={requests.requestTrending} />
    <Row heading="Netflix Originals" requestUrl={requests.requestNetFlixOriginals}/>
    <Row heading="Amazon Originals" requestUrl={requests.requestAmazonOriginals}/>
    <Row heading="Action Movies" requestUrl={requests.requestActionMovies}/>
    <Row heading="Romantic Movies" requestUrl={requests.requestRomanceMovies}/>
    <Row heading="Comedy Movies" requestUrl={requests.requestComedyMovies}/>
    <Row heading="Documentories" requestUrl={requests.requestDocumentaries}/>
<h1>Hello World</h1>
    </div>
  );
}

export default App;
