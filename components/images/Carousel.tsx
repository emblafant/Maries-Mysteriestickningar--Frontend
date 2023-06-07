import ImageSingle from "./ImageSingle";
import Link from "next/link";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import { RxDotFilled } from "react-icons/rx";
import { useState } from "react";

const Carousel = ({images}:any) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleChnageSlide = (type:string) => {
    if (type == "decrease") {
      setCurrentSlide(currentSlide - 1);
    } else if (type == "increase") {
      setCurrentSlide(currentSlide + 1);
    }
  }
  return (
    <div className="carousel">
      <div className="slides">
      <ImageSingle image={`${process.env.NEXT_PUBLIC_STRAPI_URL}uploads/${images[currentSlide].attributes.hash}${images[currentSlide].attributes.ext}`} alt="produktbild"/>
      </div>
      <div className={`carousel-buttons ${currentSlide == 0 ? "start": ""} ${currentSlide == images.length - 1? "end": ""}`}>
        {currentSlide > 0 ?
          <button onClick={() => {handleChnageSlide("decrease")}}><FaChevronLeft/></button>
        : ""}
        {currentSlide < images.length - 1?
          <button onClick={() => {handleChnageSlide("increase")}}><FaChevronRight/></button>
        : ""}
      </div>
      <div className="carousel-dots">
          {images.map((image:any, i:number) => {
            return <RxDotFilled key={i} 
            className={i == currentSlide ? "filled" : "unfilled"}
            />
          })}
      </div>
    </div>
  )
}
export default Carousel

//https://css-tricks.com/css-only-carousel/

/*
{images.map((image:any, i:number) => {
          return <ImageSingle key={i} image={`${process.env.NEXT_PUBLIC_STRAPI_URL}uploads/${image.attributes.hash}${image.attributes.ext}`} alt="produktbild"/>
        })}
*/