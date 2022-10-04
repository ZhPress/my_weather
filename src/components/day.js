import React from "react";


export function Day ({town, dt, dt_txt, main, weather}) {
    const date = new Date(dt*1000);
    const t = Math.round(main.temp);
    const t_feels = Math.round(main.feels_like);
    const imgURL = "owf owf-"+ weather[0].id + " owf-5x icon-style"
    

    return (
        <div className="day">
            <p>{dt_txt}</p>
            <p>Temherature {t} 'C</p>
            <p>Feels like {t_feels} 'C</p>
            <p>{weather[0].description}</p>
            <i className={imgURL}></i>

        </div>
       
    )
}
