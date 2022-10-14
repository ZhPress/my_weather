import React from "react"
import logo from './img/favicon.ico'

export function Footer () {
    return (
<footer>
        <nav>
          <a>Home</a>
          <a>Contacts</a>
          <a>Resurses</a>
          <a>About</a>
          <a>Location</a>
        </nav>
        <div className="footer_logo"> 
        <img src={logo} alt=""/>
        </div>
      </footer>
      
    )
}