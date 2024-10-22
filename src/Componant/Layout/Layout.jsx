import React, { useState } from 'react'
import style from "./Layout.module.css"
import { Outlet } from "react-router-dom";
import Navbar from '../Navbar/Navbar';


export default function Layout() {


    const[showArrow , setShowArrow]=useState(false)
  window.addEventListener("scroll" , ()=>{
    if(window.scrollY >200){
      setShowArrow(true)
    }else{
      setShowArrow(false)
    }
  })
  return <>
      <div id="up">
      <Navbar/>

<div className="d-flex">

  <div className={`${style.outColor}`}>
  <Outlet ></Outlet>
  </div>


<div style={{opacity: showArrow ? 1 : 0}} className={`${style.backToTop} cursor-pointer d-flex  rounded-circle position-fixed justify-content-center align-items-center bottom-0 end-0 mb-4 me-4`}>

<a href="#up" >
<i className="   fa-solid fa-arrow-up fw-semibold fs-5 text-white "></i>
</a>

</div>

</div>

</div>
  
  </>
}
