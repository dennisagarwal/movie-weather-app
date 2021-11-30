const weather_API_key = "0858318a4ecc5f724139b463348ce24e";
//reference : https://www.youtube.com/watch?v=VK9F8BWrOgY

const findMyState = () => {
  const success = (position) => {
    // console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // console.log(latitude + "  " + longitude);

    //browser geo location API to get the city
    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    fetch(geoApiUrl)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // console.log(data.city, data.locality);
        const city = data.city;
        console.log(city);
      });
    //weather API to get the weather
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0858318a4ecc5f724139b463348ce24e&units=metric`;
    fetch(weatherApiUrl)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // console.log(data.weather[0].main);
        const weather = data.weather[0].main;
        console.log(weather);
      });
  };
  const error = () => {
    "unable to retreive your location";
  };
  navigator.geolocation.getCurrentPosition(success, error);
};
// findMyState();

export default findMyState();
