import Carousel from "./images/Carousel";
import ProductText from "./ProductText";
import React, { useState, useEffect } from 'react';

const Product = ({data}: any) => {
  const [overlay, setOverlay] = useState("bottom");
  return (
    <article className="product">
      <Carousel images={data.images.data}/>
      <ProductText data={data} setOverlay={setOverlay}/>
      <div className={`shadow-overlay ${overlay}`}></div>
    </article>
  )
}

export default Product