import {  useRouter } from "next/router";
import { useState, useEffect } from "react";
import getProduct from "@/functions/getProduct";
import Product from "@/components/Product";
import axios from "axios";

const PatternPage = ({pattern}:any) => {
  console.log(pattern)
  const [productData, setProductData] = useState<any>();
  const router = useRouter();

  const getData = async () => {
    const data = await getProduct(router, "patterns");
    setProductData(data)
  }

  useEffect(() => {
    if (router.query.id) {
      getData();
    }
  },[router])

  return (
    <>
      {productData ? <Product data={productData}/> : ""}
    </>
  )
}

export default PatternPage

export const getStaticProps = async (context:any) => {
  const {params} = context;
  const id = params.id;
  console.log(id);
  console.log("#############################");
  const pattern = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}api/patterns?filters[title][$eq]=${id}&populate=*`
  )
  return {
    props: {
      pattern: pattern?.data.data ?? [],
    }
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}