import { useEffect, useState } from 'react';
import './css/App.css';
import {City} from './components/city'
import { Day } from './components/day';
import { timeSearch } from './utils/timeSearch';
import { Today } from './components/today';
import { Footer } from './components/footer';
import { Position } from './components/position';
import ua from './ua.json';
import { Hour } from './components/hour';

function App() {
  const [fiveDaysWeather, setFiveDaysWeather] = useState([]);
  const [oneDayWeather, setOneDayWeather] = useState([])
  const [isDay, setIsDay] = useState(true);
  const [currentPosition, setCurrentPosition] = useState(true);
  const [place, setPlace] = useState('Україна');
  const time = timeSearch();
  const towns = ua.map((value => value.city));
      useEffect(() => {
      fetch('https://api.openweathermap.org/data/2.5/forecast?q=ukraine&lang=uk&units=metric&APPID=9e7ab1dd4f79b74a54dc4234759ad8b1')
     .then(res => res.json())
     .then (json => {
      setFiveDaysWeather(json.list.filter(day => day.dt_txt.includes(time)));
      setOneDayWeather(json.list.filter((value, index) => {
        if (index < 8) return value
      }))
     }).catch(err => {
      console.warn(err)
      alert('Помилка отримання даних')
    })//.finally(setIsLoad(true))
   }, []);
  return (
    <div className="App">
      <header className="App-header">
      <div className='logo_box'></div>
          <City setFiveDaysWeather={setFiveDaysWeather} towns={towns}
          place={place} setPlace={setPlace} setOneDayWeather={setOneDayWeather} />
          {currentPosition && 
          <Position setCurrentPosition={setCurrentPosition} setPlace={setPlace} place={place}
          setFiveDaysWeather={setFiveDaysWeather} time={time}  />}
      </header>
      <div className="separate">
      <button onClick={() => setIsDay(true)}>Прогноз погоди на п'ять діб</button>
      <button onClick={() => setIsDay(false)}>Погодинний прогноз</button>
      </div>
      <body>
      
        <div className="App-days" style={{flexDirection: isDay? 'row': 'column'}}> 
        { 
          isDay? (
       fiveDaysWeather.map((day, index) => (
        <Day key={index} {...day} />
       )) 
       ) : (
        oneDayWeather.map((hour, index) => (
          <Hour key={index} {...hour} /> 
        )))
        }
        </div>
      <div className='div_center'></div>
      <Footer />
      </body>
    </div>
  );
}

export default App;