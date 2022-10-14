import React from "react";


export function Day ({dt, dt_txt, main, weather}) {
    const date = new Date(dt*1000);
    const d = date.getDay();
    const week = ['Субота', 'Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четверг', "П'ятниця" ]
    const weekDay = week[d];
    const t = Math.round(main.temp);
    const t_feels = Math.round(main.feels_like);
    const imgURL = "owf owf-"+ weather[0].id + " owf-5x icon-style"
    let arr = dt_txt.split(' ');
    arr.pop();
    const str = arr.join();
    arr = str.split('-').reverse()

    return (
            <div className="day">
            <p>{weekDay}, {arr[0]}.{arr[1]}.{arr[2]} </p>
            <p>Температура повітря {t} 'C</p>
            <p>Відчуваеться {t_feels} 'C</p>
            <p>{weather[0].description}</p>
            <i className={imgURL}></i>
        </div>
        )
}
