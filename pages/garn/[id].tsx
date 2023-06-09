import {  useRouter } from "next/router";
import { useState, useEffect } from "react";
import getProduct from "@/functions/getProduct";
import Product from "@/components/Product";

const YarnPage = () => {
  const [productData, setProductData] = useState<any>();
  const router = useRouter();

  const getData = async () => {
    const data = await getProduct(router, "yarns");
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


export default YarnPage