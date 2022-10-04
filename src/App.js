import { useEffect, useState } from 'react';
import './css/App.css';
import {City} from './components/city'
import { Day } from './components/day';

//Kiev https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ua&units=metric&APPID=9e7ab1dd4f79b74a54dc4234759ad8b1
function App() {
  const [town, setTown] = useState('Kiev');
  const [fiveDays, setFiveDays] = useState([]);
  const [isChange, setIsChange] = useState(true);

  useEffect(() => {
    async function fetchData(i) {
      try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${i}&lang=en&units=metric&APPID=9e7ab1dd4f79b74a54dc4234759ad8b1`)
    .then(res => res.json())
    .then(json => {
     setFiveDays(json.list.filter(item => item.dt_txt.includes('09:00:00')));
    })
    } catch (err) {
      console.warn(err);
      alert('Loading Error')
    }
  }
  if (isChange === true) {
    fetchData(town);
    setIsChange(false);
  };
  }, []);

  function changeTown (event) {
    setTown(event.target.value)
    setIsChange(true)
  }
 console.log(fiveDays);
 console.log(town);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <span className='pr'>Прогноз погоди на п'ять діб </span>
          <City town = {town} changeTown={changeTown} />
      </header>
      <div className="Separate"></div>
      <body>
      <div className="App-days"> {
       fiveDays.map((day, index) => (
        <Day key={town+index} {...day} town = {town}/>
       ))
        }
      </div>
      </body>
    </div>
  );
}

export default App;
