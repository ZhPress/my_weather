import React from "react";
import { useState } from "react";
import { timeSearch } from "../utils/timeSearch";

export const City = ({setFiveDaysWeather, place, setPlace, towns, setOneDayWeather}) => {
const [isSearch, setIsSearch] = useState(false);
const [temp1, setTemp1] = useState([]);
const [temp5, setTemp5] = useState([]);
const [massage, setMassage] = useState('');
const time = timeSearch();

React.useEffect(() => {
        let url = 'https://api.openweathermap.org/data/2.5/forecast?q='+place+'&lang=uk&units=metric&APPID=9e7ab1dd4f79b74a54dc4234759ad8b1'
         console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(json => {
         if  (json.cod === '200') {
             setIsSearch(true);
             setTemp5(json.list.filter(day => day.dt_txt.includes(time)));
             setTemp1(json.list.filter((value, index) => {
              if (index < 8) return value
            }))
         } else setIsSearch(false);
        }).catch(err => {
          console.warn(err);
          alert('Помилка отримання даних')
        })
}, [place])

function notValidPlace (event) {
  if   (!isSearch && event.target.value) {
   return  setMassage('Некоректна назва')
    } 
}

function handChange(event) {
  setPlace(event.target.value);
  setTimeout(() => notValidPlace(event), 2000)
  if (!event.target.value) {
    setIsSearch(false)
    setMassage('')
  }
}
      
function handClick () {
  setFiveDaysWeather(temp5);
  setOneDayWeather(temp1);
}

  return ( 
    <div className="city"> <span id="span_city"> Ваше місто:</span>
    {
      !isSearch && <p className="p_search_massage"> {massage} </p> }
    <p className="p_search"> <input className="inp_search" value={place} 
    onChange={handChange} placeholder='Назва міста' title={isSearch? '': 'Некоректна назва'}
    onFocus={() => setPlace('')}
    />
        <ul className="ul_search" style={{display: isSearch? 'none': ''}}> 
        { place? (
          towns.filter (
            town => {
             return town.toLowerCase().includes(place.toLowerCase()) 
            }
          ).map((town, index) => (<li key={index} className='li_search'
          onClick={() => setPlace(town)}
          >{town}</li>))
        ) : (
          null
        )}
        </ul></p>
        <button className="b_search" disabled={!isSearch} onClick={handClick}>Пошук</button>
        </div>
  )
}


