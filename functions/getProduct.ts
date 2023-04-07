import { fetchData } from "./fetchData";

const getRouterQueries = async (router:any) => {
  let productType = router.query.product;
  const {id} = router.query;
  return {productType, id}
};

const getProduct =  async (router:any, type:string) => {
  const routerQueries = await getRouterQueries(router);
  const id = routerQueries?.id; 

  const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}api/${type}/?populate=*`;
  const res = await fetchData(url);
  let data = "";
  res.map((product:any) => {
    console.log(product.attributes.title)
    if(product.attributes.title == id) {
      data = product.attributes;
      return;
    }
  })
  return data
}

export default getProduct