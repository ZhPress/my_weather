
export function fetchData(url, setFiveDaysWeather, time) {
      console.log(url);
        fetch(url)
       .then(res => res.json())
       .then (json => {
        setFiveDaysWeather(json.list.filter(day => day.dt_txt.includes(time)));
        //let city = json.city.name;
       }).catch(err => {
        console.warn(err);
        alert('Помилка отримання даних')
      })
  }
