
export function fetchData(url, setFiveDays) {
    try {
  fetch(url)
  .then(res => res.json())
  .then (json => {
    setFiveDays(json.list.filter(day => day.dt_txt.includes('00:00:00')))
   })
  } catch (err) {
    console.warn(err);
    alert('Loading Error')
  }
}
