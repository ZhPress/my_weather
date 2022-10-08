
export function fetchData(url, setFiveDaysWeather, time) {
    try {
  fetch(url)
  .then(res => res.json())
  .then (json => {
    setFiveDaysWeather(json.list.filter(day => day.dt_txt.includes(time)))
   })
  } catch (err) {
    console.warn(err);
    alert('Loading Error')
  }
}
