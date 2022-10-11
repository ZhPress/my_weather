import { useEffect, useState } from 'react';
import './css/App.css';
import {City} from './components/city'
import { Day } from './components/day';
import { timeSearch } from './utils/timeSearch';
import { Today } from './components/today';
import { getPosition } from './utils/getposition';
import { Position } from './components/position';


function App() {
  const [fiveDaysWeather, setFiveDaysWeather] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(true);
  const [place, setPlace] = useState();
  const time = timeSearch();
  //console.log(place);
  // useEffect(() =>{
  //   getPosition(setUrl, setCurrentPosition);
  // }, [])    
  console.log(place);
      useEffect(() => {
      fetch('https://api.openweathermap.org/data/2.5/forecast?q=ukraine&lang=en&units=metric&APPID=9e7ab1dd4f79b74a54dc4234759ad8b1')
     .then(res => res.json())
     .then (json => {
      setFiveDaysWeather(json.list.filter(day => day.dt_txt.includes(time)))
     }).catch(err => {
      console.warn(err);
      alert('Помилка отримання даних')
    }).finally(setIsLoad(true))
   }, []);

  return (
    <div className="App">
      <header className="App-header">
          <span className='pr'>Прогноз погоди на п'ять діб </span>
          <City setFiveDaysWeather={setFiveDaysWeather} currentPosition={currentPosition} 
          place={place} setPlace={setPlace} />
          {currentPosition && 
          <Position setCurrentPosition={setCurrentPosition} setPlace={setPlace} place={place}
          setFiveDaysWeather={setFiveDaysWeather} time={time}  />}
      </header>
      <div className="Separate">
      </div>
      <body>
      { isLoad?
        <div className="App-days"> {
       fiveDaysWeather.map((day, index) => (
        <Day key={index} {...day} />
       ))}  
        </div>
        :
        <div className='load'> Wait, please. Weather is loading now...</div>
      }
      </body>
    </div>
  );
}

export default App;
