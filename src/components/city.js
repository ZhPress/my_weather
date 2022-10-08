import React from "react";
import { useState } from "react";
import { fetchData } from "../utils/fetchData";
import { timeSearch } from "../utils/timeSearch";

export const City = ({setFiveDaysWeather}) => {
    const [town, setTown] = useState();
    const cities = ['', 'Kiev', 'Zaporizhzhia', 'Lviv'];
    const time = timeSearch();
    const chooseCity = cities.map(item => {
        return (<option key={item}>{item}</option>)
         });

          function changeTownWeather (event) {
            setTown(event.target.value);
            let url = 'https://api.openweathermap.org/data/2.5/forecast?q='+event.target.value+'&lang=en&units=metric&APPID=9e7ab1dd4f79b74a54dc4234759ad8b1'
            fetchData(url, setFiveDaysWeather, time)
          }
//  Тот же fetch, что в функции, но з використанням useEffect  
// React.useEffect(() => {
//     if (town) {
//         let url = 'https://api.openweathermap.org/data/2.5/forecast?q='+town+'&lang=en&units=metric&APPID=9e7ab1dd4f79b74a54dc4234759ad8b1'
//         fetchData(url, setFiveDaysWeather, time)
//     }
// }, [town])
    return (
        <div className="city"> Ваше місто:
          <select className="cityName" title='Виберіть місто' 
          onChange={changeTownWeather}>
          {chooseCity}
          </select>
          </div>
    )
}
