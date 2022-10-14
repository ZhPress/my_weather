import { fetchData } from "./fetchData";

export function getPosition (setFiveDaysWeather, time, setPlace) {
    function success(pos) {
        const crd = pos.coords;
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${crd.latitude}&lon=${crd.longitude}&lang=uk&units=metric&appid=9e7ab1dd4f79b74a54dc4234759ad8b1`;
        fetchData(url, setFiveDaysWeather, time, setPlace);
        //return setPlace(fetchData(url, setFiveDaysWeather, time))
      }
  
  const options = {
        timeout: 5000
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
     return navigator.geolocation.getCurrentPosition(success, error, options);
}



