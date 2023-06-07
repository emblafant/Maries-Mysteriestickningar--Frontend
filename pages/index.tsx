import Head from 'next/head'
import axios from 'axios'
import {  useRouter } from "next/router";
import { useState, useEffect } from "react";
import { fetchData } from "@/functions/fetchData";


import ProductThumbnail from '@/components/ProductThumbnail'
import Carousel from '@/components/images/Carousel'
import Product from '@/components/Product'

export default function Home({patterns, books, yarn}:any) {
  const featuredPattern = patterns.reverse()[0].attributes;
  const featuredBook = books.reverse()[0].attributes;
  const featuredYarn = yarn.reverse()[0].attributes;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>

        <ProductThumbnail data={featuredPattern}/>
        <ProductThumbnail data={featuredYarn}/>
        <ProductThumbnail data={featuredBook}/>
      </>
    </>
  )
}

export const getStaticProps = async () => {
  const patterns = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}api/patterns?populate=*`
  )
  const books = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}api/books?populate=*`
  )
  const yarn = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}api/yarns?populate=*`
  )
  return {
    props: {
      patterns: patterns?.data.data ?? [],
      books: books?.data.data ?? [],
      yarn: yarn?.data.data ?? [],
    }
  }
}
