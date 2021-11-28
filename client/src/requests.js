const API_KEY = "e0cf5e21ab86909a17aa9ca1c8c7a5b4";
// const urlStart="https://api.themoviedb.org/3"
//declaring the object request
const requests={
  requestTrending:`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
  requestNetFlixOriginals:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,
  requestAmazonOriginals:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=1024`,
  requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  requestActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  requestComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  requestHorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  requestRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  requestDocumentaries:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  // requestSearches: `http://www.omdbapi.com/?s=raja&apikey=edf3f73f`,
}
//exporting the object request
export default requests;