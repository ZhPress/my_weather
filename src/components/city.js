import React from "react";
import { useState, useEffect } from "react";

export const City = ({changeTown}) => {
    const cities = ['', 'Kyiv', 'Zaporizhzhia', 'Lviv']
    const chooseCity = cities.map(item => {
        return (<option key={item}>{item}</option>)
         });

    return (
        <div className="city"> Ваше місто:
          <select className="cityName" title='Виберіть місто' 
          onChange={changeTown}>
          {chooseCity}
          </select>
          </div>
    )
}
