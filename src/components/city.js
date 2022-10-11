import React from "react";
import { useState } from "react";
import { fetchData } from "../utils/fetchData";
import { timeSearch } from "../utils/timeSearch";

export const City = ({setFiveDaysWeather, currentPosition, place, setPlace}) => {
    const [town, setTown] = useState(['Ukraine', 'Kiev', 'Zaporizhzhia', 'Lviv']);
    const time = timeSearch();
    const chooseCity = town.map(item => {
        return (<option key={item}>{item}</option>)
         });

          function changeTownWeather (event) {
            let url = 'https://api.openweathermap.org/data/2.5/forecast?q='+event.target.value+'&lang=en&units=metric&APPID=9e7ab1dd4f79b74a54dc4234759ad8b1'
            fetchData(url, setFiveDaysWeather, time, setPlace)
          }
//  Тот же fetch, что в функции, но з використанням useEffect  
// React.useEffect(() => {
//     if (town) {
//         let url = 'https://api.openweathermap.org/data/2.5/forecast?q='+town+'&lang=en&units=metric&APPID=9e7ab1dd4f79b74a54dc4234759ad8b1'
//         fetchData(url, setFiveDaysWeather, time)
//     }
// }, [town])
    return ( <> {  
    currentPosition?
      <div className="city"> Ваше місто:
          <select className="cityName" title='Виберіть місто' 
          onChange={changeTownWeather}>
          {chooseCity}
          </select>
          </div>
          :
          <div className="city"> Ваше місто:
          <h3>{place}</h3>
          </div>
    }
     </>   
    )
}
