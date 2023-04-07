import {  useRouter } from "next/router";
import { useState, useEffect } from "react";
import getProducts from "@/functions/getProducts"
import { parseString } from "@/functions/parseString";
import ProductThumbnail from "@/components/ProductThumbnail";

const PatternsTypePage = () => {
  const [productData, setProductData] = useState<any>();
  const router = useRouter();

  const getData = async () => {
    const data = await getProducts(router, "patterns");
    setProductData(data)
  }

  const [title, setTitle] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");

  const createTitle = (category:any) => {
    setSubTitle("")
    if (category.includes("sockor")) {
      setTitle("Sockor");
      const subTitle = parseString(category);
      if (subTitle != "Sockor") {setSubTitle(subTitle)}
    } else {
      const title = parseString(category);
      setTitle(title)
    }
  }

  useEffect(() => {
    if (router.query.type) {
      getData();
      createTitle(router.query.type.toString());
    }
  },[router])


  return (
    <>
    <div>
      <h1>{title}</h1>
      {subTitle ? <p>{subTitle}</p> : ""}
    </div>
    {productData ?
      productData.map((product:any, i:number) => {
        return <ProductThumbnail key={i}data={product}/>
      })
    : ""}
    </>
  )
}

export default PatternsTypePage