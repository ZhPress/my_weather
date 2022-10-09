export async function getPosition (setUrl, setCurrentPosition) {
    const options = {
        timeout: 5000
      };
      
      function success(pos) {
        const crd = pos.coords;
        setUrl(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=9e7ab1dd4f79b74a54dc4234759ad8b1`)
        setCurrentPosition(true)
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
      navigator.geolocation.getCurrentPosition(success, error, options);
}



// async function U () {
//     function success(position) {
//       setLat(position.coords.latitude)
//       setLon(position.coords.longitude)
//       setCurrentPosition(true)
//   }
//   function error() {
//       alert('Невозможно получить ваше местоположение')
//   }
  
//       return (
//       navigator.geolocation.getCurrentPosition(success, error)
//     )
//   }

//   U().then(position => {
//     url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=9e7ab1dd4f79b74a54dc4234759ad8b1`
//   });