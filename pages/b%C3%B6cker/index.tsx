import {  useRouter } from "next/router";
import { useState, useEffect } from "react";
import ProductThumbnail from "@/components/ProductThumbnail";
import { fetchData } from "@/functions/fetchData";

const BooksPage = () => {
  const [productData, setProductData] = useState<any>();
  const router = useRouter();

  const getData = async () => {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}api/books/?populate=*`;
    const data = await fetchData(url);
    console.log(data);
    setProductData(data.reverse());
  }


  useEffect(() => {
    if (router.query) {
      getData();
    }
  },[router])


  return (
    <>
    <div>
      <h1>Böcker</h1>
    </div>
    {productData ?
      productData.map((product:any, i:number) => {
        return <ProductThumbnail key={i} data={product.attributes}/>
      })
    : ""}
    </>
  )
}

export default BooksPage