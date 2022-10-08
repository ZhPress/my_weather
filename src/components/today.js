import React from "react";



export function Today () {
  function render() {
    let now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const d = now.getDate();
    const m = now.getMonth();
    const month = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
  const year = now.getFullYear();
    return (
      <>
          {hours}:{minutes < 10? '0'+minutes: minutes }
          <p id='data'>{d} {month[m]} {year}</p>
      </>
      //console.log(now)
  )
  }
    render();
    setInterval(() => render(), 5000)
  
  }
