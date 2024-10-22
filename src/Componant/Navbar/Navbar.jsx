import React from 'react'
import style from "./Navbar.module.css"

export default function Navbar() {
  return <>
  <nav className="navbar navbar-light bg-light  ">
    <div className={`${style.containerStyle} d-flex justify-content-between`}>
    <a className="navbar-brand" href='/Gallary-Image'>Image Gallary</a>
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
  </form>
    </div>

</nav>
  
  </>
}
