import React from "react"
import logo from 'D:/my-app/my_weather/src/img/favicon.ico'

export function Footer ({isDay}) {
    return (
<footer style={{bottom: isDay? '0': ''}}>
        <nav>
          <a href="#">Home</a>
          <a href="#">Contacts</a>
          <a href="#">Resurses</a>
          <a href="#">About</a>
          <a href="#">Location</a>
        </nav>
        <div className="footer_logo"> 
        </div>
      </footer>
      
    )
}