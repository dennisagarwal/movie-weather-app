const API_KEY = "e0cf5e21ab86909a17aa9ca1c8c7a5b4";
// const urlStart="https://api.themoviedb.org/3"
//declaring the object request
const requests={
  requestTrending:`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  requestNetFlixOriginals:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=213`,
  requestAmazonOriginals:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=1024`,
  requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
  requestActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genre=28`,
  requestComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genre=35`,
  requestHorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genre=27`,
  requestRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genre=10749`,
  requestDocumentaries:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genre=99`,
}
//exporting the object request
export default requests;