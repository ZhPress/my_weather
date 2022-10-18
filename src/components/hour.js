export function Hour ({dt, dt_txt, main, weather}) {
    const date = new Date(dt*1000);
    const d = date.getDay();
    const week = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четверг', "П'ятниця", 'Субота']
    const weekDay = week[d];
    const t = Math.round(main.temp);
    const t_feels = Math.round(main.feels_like);
    //const imgURL = "owf owf-"+ weather[0].id + " owf-5x icon-style"
    const imgURL = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    console.log(imgURL);
    let arr = dt_txt.split(' ');
    // arr.pop();
    // const str = arr.join();
    // arr = str.split('-').reverse()

    return (
            <div className="hour">
            <p>
            <b> {arr[0]}, {weekDay}, {arr[1]}</b> 
            <span> Температура повітря {t} 'C </span>
            <span>Відчуваеться {t_feels} 'C </span>
            <div className="full_hour">
            <span className="span_full_hour">Тиск {main.grnd_level * 0.75} мм рт. ст.
            <span> Вологість {main.humidity}%
            </span></span>
            </div>
            <img src={imgURL} alt=""/>
            <span className="img_description">{weather[0].description}</span>

            </p>
        </div>
        )
}