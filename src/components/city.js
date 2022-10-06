import React from "react";
import { useState } from "react";
import { fetchData } from "../utils/fetchData";

export const City = ({setFiveDays}) => {
    const [town, setTown] = useState();
    const cities = ['', 'Kiev', 'Zaporizhzhia', 'Lviv'];
    let url = 'https://api.openweathermap.org/data/2.5/forecast?q='+town+'&lang=en&units=metric&APPID=9e7ab1dd4f79b74a54dc4234759ad8b1'
    
    const chooseCity = cities.map(item => {
        return (<option key={item}>{item}</option>)
         });

          function changeTown (event) {
            setTown(event.target.value);
            setTimeout(fetchData(url, setFiveDays), 1000)
          }
          console.log(town);
          console.log(url);

    return (
        <div className="city"> Ваше місто:
          <select className="cityName" title='Виберіть місто' 
          onChange={changeTown}>
          {chooseCity}
          </select>
          </div>
    )
}
