import { useEffect, useState } from 'react';
import './css/App.css';
import {City} from './components/city'
import { Day } from './components/day';
import { timeSearch } from './utils/timeSearch';

function App() {
  
  const [fiveDays, setFiveDays] = useState([]);
  //const [isChange, setIsChange] = useState(true);
 
  
  useEffect(() => {
     fetch('https://api.openweathermap.org/data/2.5/forecast?q=ukraine&lang=en&units=metric&APPID=9e7ab1dd4f79b74a54dc4234759ad8b1')
     .then(res => res.json())
     .then (json => {
      setFiveDays(json.list.filter(day => day.dt_txt.includes('00:00:00')))
     })
   }, []);
  
  return (
    <div className="App">
      <header className="App-header">
          <span className='pr'>Прогноз погоди на п'ять діб </span>
          <City setFiveDays={setFiveDays} />
      </header>
      <div className="Separate">
      </div>
      <body>
      <div className="App-days"> {
       fiveDays.map((day, index) => (
        <Day key={index} {...day}/>
       ))
       }   
      </div>
      </body>
    </div>
  );
}

export default App;
