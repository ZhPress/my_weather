
export function fetchData(url, setFiveDaysWeather, time, setPlace) {
      console.log(url);
        fetch(url)
       .then(res => res.json())
       .then (json => {
        setFiveDaysWeather(json.list.filter(day => day.dt_txt.includes(time)))
        setPlace(json.city.name);
       }).catch(err => {
        console.warn(err);
        alert('Помилка отримання даних')
      });
  }
