import React from "react";
import { getPosition } from "../utils/getposition";

export const Position = ({setCurrentPosition, setPlace, setFiveDaysWeather, time }) => {

    function getPositionWeather (setFiveDaysWeather, time, setPlace) {
        getPosition(setFiveDaysWeather, time, setPlace);
        setCurrentPosition(false);
    }

    return (
        <div className="position">
        <p className="position_p">Визначити Ваше геоположення, для надання більш точної інформації? </p>
            <button className="position_button" 
            onClick={(() => getPositionWeather(setFiveDaysWeather, time, setPlace))}>Так</button>
            <span id="span_position">   </span>
            <button className="position_button"
            onClick={(() => setCurrentPosition(false))}>Ні</button>
        </div>
    )
}