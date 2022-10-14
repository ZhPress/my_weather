import { useEffect, useState } from 'react';
import './css/App.css';
import {City} from './components/city'
import { Day } from './components/day';
import { timeSearch } from './utils/timeSearch';
import { Today } from './components/today';
import { Footer } from './components/footer';
import { Position } from './components/position';
import ua from './ua.json';
import meteo from './components/img/meteo.png'


function App() {
  const [fiveDaysWeather, setFiveDaysWeather] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [currentPosition, setCurrentPosition] = useState(true);
  const [place, setPlace] = useState();
  const time = timeSearch();
  const towns = ua.map((value => value.city));
      useEffect(() => {
      fetch('https://api.openweathermap.org/data/2.5/forecast?q=ukraine&lang=uk&units=metric&APPID=9e7ab1dd4f79b74a54dc4234759ad8b1')
     .then(res => res.json())
     .then (json => {
      setFiveDaysWeather(json.list.filter(day => day.dt_txt.includes(time)))
     }).catch(err => {
      console.warn(err)
      alert('Помилка отримання даних')
    })//.finally(setIsLoad(true))
   }, []);

  return (
    <div className="App">
      <header className="App-header">
      <div className='logo_box'><img src={meteo} alt=""/></div>
          <City setFiveDaysWeather={setFiveDaysWeather} towns={towns}
          place={place} setPlace={setPlace} setIsLoad={setIsLoad} />
          {currentPosition && 
          <Position setCurrentPosition={setCurrentPosition} setPlace={setPlace} place={place}
          setFiveDaysWeather={setFiveDaysWeather} time={time}  />}
      </header>
      <div className="Separate">
      <span className='pr'>Прогноз погоди на п'ять діб </span>
      </div>
      <body>
      { isLoad? (
        <div className="App-days"> {
       fiveDaysWeather.map((day, index) => (
        <Day key={index} {...day} />
       ))}  
        </div>
       ) : (
        <div className='load'> Wait, please. Weather is loading now...</div>)
      }
      <div className='div_center'><a><img src="./logo192.png" alt=""/></a></div>
      <Footer />
      </body>
    </div>
  );
}

export default App;


//https://api.openweathermap.org/data/2.5/forecast?q=ukraine&lang=uk&units=metric&cnt=8&APPID=9e7ab1dd4f79b74a54dc4234759ad8b1