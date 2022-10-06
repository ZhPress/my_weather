import React from "react";

export function Today () {
  let now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const d = now.getDate();
  const m = now.getMonth();
  const month = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'];
const year = now.getFullYear();

return (
    <div className='time'>
        {hours}:{minutes < 10? '0'+minutes: minutes }
        <p id='data'>{d} {month[m]} {year}</p>
    </div>
)
}
setInterval(Today, 1000)
