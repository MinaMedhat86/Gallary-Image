import React, { useEffect, useMemo, useState } from 'react'
import style from "./Home.module.scss"
import { Fade } from "react-awesome-reveal";


import img1 from "../../Assests/img/harry1.jpg"
import img5 from "../../Assests/img/harry2.jpg"
import img6 from "../../Assests/img/harry3.jpg"
import img4 from "../../Assests/img/harry4.jpg"
import img2 from "../../Assests/img/harry5.jpg"
import img3 from "../../Assests/img/harry6.jpg"
import img7 from "../../Assests/img/harry7.jpg"
import img8 from "../../Assests/img/harry8.jpg"
import img9 from "../../Assests/img/harry9.jpg"
import img10 from "../../Assests/img/harry10.jpg"


export default function Home() {

  const images = useMemo(() => [
    { id: 1, imgUrl: img1, alt: "Harry Potter 1" },
    { id: 2, imgUrl: img2, alt: "Harry Potter 2" },
    { id: 3, imgUrl: img3, alt: "Harry Potter 3" },
    { id: 4, imgUrl: img4, alt: "Harry Potter 4" },
    { id: 5, imgUrl: img5, alt: "Harry Potter 5" },
    { id: 6, imgUrl: img6, alt: "Harry Potter 6" },
    { id: 7, imgUrl: img7, alt: "Harry Potter 7" },
    { id: 8, imgUrl: img8, alt: "Harry Potter 8" },
    { id: 9, imgUrl: img9, alt: "Harry Potter 9" },
    { id: 10, imgUrl: img10, alt: "Harry Potter 10" },
  ], []);


  const [currentImgIndex, setCurrentImgIndex] = useState(null);

  const handleImage = (index) => {
    setCurrentImgIndex(index);
  };

  const handleClose = () => {
    setCurrentImgIndex(null);
  };

  const handleNextImg = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImg = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };



  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && currentImgIndex !== null) {
        handleClose();
      }
    }



    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImgIndex]); 
  return <>
  <div className={`${style.containerStyle}`}>
  <h1 className="text-center my-5 display-4 fw-bolder">Image Gallery</h1>
      <div className="row">
  {
    images.map((item , index)=>{
return <>
          <div className="col-md-4 mb-4" key={item.id}>
            <Fade>
            <img
              src={item.imgUrl}
              alt={item.alt}
              className={` rounded-3 ${style.galleryImage}`}
              onClick={() => handleImage(index)}
            />
            </Fade>
    
</div>

</>
    })
  }

      {/* Modellllllllllllllllll */}
      {currentImgIndex !== null && <>
      l
        <div className={`${style.modalOverlay} `} onClick={handleClose}>
          <div className={`${style.modalContent}`} onClick={(e) => e.stopPropagation()}>
            <span className={`${style.close} text-black`} onClick={handleClose}><i className="fa-solid fa-close"></i></span>
            <div className=' d-flex align-items-center justify-content-between'>
            <button className="me-4 fs-3  btn " onClick={handlePrevImg}><i className="fa-solid fa-arrow-left"></i></button>
            <Fade>
            <img
              src={images[currentImgIndex].imgUrl}
              alt={images[currentImgIndex].alt}
              className={`${style.modalImage} rounded-3`}
            />
            </Fade>
    
 
            <button className="ms-4 fs-3 btn" onClick={handleNextImg}><i className="fa-solid fa-arrow-right"></i></button>
            </div>

          </div>
        </div>
      </>

      }

      </div>
  </div>
  
  </>
}
