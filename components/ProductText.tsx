import Link from "next/link"
import { TbArrowNarrowRight } from "react-icons/tb";
import React, { useState, useEffect } from 'react';

const ProductText = ({data, setOverlay}:any) => {
  
  const handleScroll = (e:any) => {
    console.log(e.currentTarget.clientHeight);
    console.log(e.currentTarget.scrollTop);
    console.log(e.currentTarget.scrollHeight);
    if (e.currentTarget.scrollTop < 10) {
      setOverlay("bottom")
    } else if (e.currentTarget.scrollTop + e.currentTarget.clientHeight >= e.currentTarget.scrollHeight) {
      setOverlay("top")
    } else {
      setOverlay("")
    }
    /*if (window.scrollY > 50) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }*/
  }

  return (
    <div className="product-text" onScroll={handleScroll}>
      <div className="data-text">
        <h1>{data.title}</h1>
        {data.pattern_type ? <Link href={`/mönster/${data.pattern_type.replace(/\s+/g, '-').toLowerCase()}`}>{data.pattern_type}</Link> : ""}
        {data.sizes ? <p>{data.sizes}</p> : ""}
        {data.amount ? <p>{data.amount}</p> : ""}
        {data.type ? <p>{data.type}</p> : ""}
        <p>{data.price}:-</p>
      </div>
      {data.material ? 
      <div className="materials">
        <h2>Material:</h2>
        <ul>
          {data.material.map((material:any, i:number) => {
            return <li key={i}>{material.material}</li>
          })}
        </ul>
      </div>
      :""
      }
      <div className="description">
        {data.description_title ? <h2>{data.description_title}</h2> : ""}
        <p>{data.description}</p>
      </div>
      <Link className="link" href={data.link_url}>Köp <TbArrowNarrowRight/></Link>
    </div>
  )
}

export default ProductText
