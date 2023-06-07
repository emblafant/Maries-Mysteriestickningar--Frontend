import {  useRouter } from "next/router";
import { useState, useEffect } from "react";
import ProductThumbnail from "@/components/ProductThumbnail";
import { fetchData } from "@/functions/fetchData";
import axios from "axios";

const PatternsPage = ({patterns}:any) => {
  const [productData, setProductData] = useState<any>();
  const router = useRouter();

  const getData = async () => {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}api/patterns/?populate=*`;
    const data = await fetchData(url);
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
      <h1>Alla Mönster</h1>
    </div>
    {productData ?
      productData.map((product:any, i:number) => {
        return <ProductThumbnail key={i} data={product.attributes}/>
      })
    : ""}
    </>
  )
}


export default PatternsPage

export const getStaticProps = async () => {
  const patterns = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}api/patterns?populate=*`
  )
  return {
    props: {
      patterns: patterns?.data.data ?? [],
    }
  }
}