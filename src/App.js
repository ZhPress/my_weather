import { useEffect, useState } from 'react';
import './css/App.css';
import {City} from './components/city'
import { Day } from './components/day';
import { timeSearch } from './utils/timeSearch';
import { Today } from './components/today';
import { getPosition } from './utils/getposition';


function App() {
  const [fiveDaysWeather, setFiveDaysWeather] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(false);
  const [url, setUrl] = useState('https://api.openweathermap.org/data/2.5/forecast?q=ukraine&lang=en&units=metric&APPID=9e7ab1dd4f79b74a54dc4234759ad8b1');
  const time = timeSearch();
  
  useEffect(() =>{
    getPosition(setUrl, setCurrentPosition);
  }, [])    
  
      useEffect(() => {
    if (currentPosition) {
      fetch(url)
     .then(res => res.json())
     .then (json => {
      setFiveDaysWeather(json.list.filter(day => day.dt_txt.includes(time)))
     }).catch(err => {
      console.warn(err);
      alert('Помилка отримання даних')
    }).finally(setIsLoad(true))
    }
   }, [currentPosition]);

  return (
    <div className="App">
      <header className="App-header">
          <span className='pr'>Прогноз погоди на п'ять діб </span>
          <City setFiveDaysWeather={setFiveDaysWeather} />
        <div className='time'><Today /></div>
      </header>
      <div className="Separate">
      </div>
      <body>
      { isLoad?
        <div className="App-days"> {
       fiveDaysWeather.map((day, index) => (
        <Day key={index} {...day} isLoad={isLoad} />
       ))}  
        </div>
        :
        <p> Wait, please. Weather is loading now...</p>
      }
      </body>
    </div>
  );
}

export default App;
