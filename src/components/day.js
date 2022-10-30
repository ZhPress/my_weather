import React from "react";


export function Day ({dt, dt_txt, main, weather}) {
    const date = new Date(dt*1000);
    const d = date.getDay();
    const week = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четверг', "П'ятниця", 'Субота' ]
    const weekDay = week[d];
    const t = Math.round(main.temp);
    const t_feels = Math.round(main.feels_like);
    const imgURL = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    let arr = dt_txt.split(' ');
    arr.pop();
    const str = arr.join();
    arr = str.split('-').reverse()

    return (
            <div className="day">
            <p id="p_date"><b>{weekDay}, {arr[0]}.{arr[1]}.{arr[2]} </b></p>
            <p>Температура повітря {t} 'C</p>
            <p>Відчуваеться {t_feels} 'C</p>
            <div className="full">
            <p className="p_full">Тиск {main.grnd_level * 0.75} мм рт. ст.
            <p> Вологість {main.humidity}%
            </p></p>
            <img src={imgURL} alt=""/>
            </div>
            <p className="p_description">{weather[0].description}</p>
        </div>
        )
}
