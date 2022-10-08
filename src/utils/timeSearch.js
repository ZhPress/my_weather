
export function timeSearch () {
  let t;  
  let now = new Date();
    let h = Math.round((now.getTime() - now.setHours(0, 0, 0, 0))/(1000*60*60));
    if (h === 23 || h === 24 || h === 1) t = '00:00:00';
    if (h === 2 || h === 3 || h === 4 ) t = '03:00';
    if (h === 5 || h === 6 || h === 7 ) t = '06:00';
    if (h === 8 || h === 9 || h === 10 ) t = '09:00';
    if (h === 11 || h === 12 || h === 13 ) t = '12:00';
    if (h === 14 || h === 15 || h === 16 ) t = '15:00';
    if (h === 17 || h === 18 || h === 19) t = '18:00';
    if (h === 20 || h === 21 || h === 22 ) t = '21:00';
    return t
  }