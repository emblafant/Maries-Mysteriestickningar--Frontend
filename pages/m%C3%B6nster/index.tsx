const PatternsPage = () => {
  return (
    <p>patterns</p>
  )
}

export default PatternsPage

/*
  const [productData, setProductData] = useState<any>();
  const router = useRouter();

  const getRouterQueries = async () => {
    let productType = router.query.product;
    const {id} = router.query;
    return {productType, id}
  };

  const getProduct =  async () => {
    const routerQueries = await getRouterQueries();
    const productType = routerQueries?.productType;
    const id = routerQueries?.id; 

    let newProductType;
    switch (productType) {
      case "böcker":
        newProductType = "books";
        break;
      case "garn":
        newProductType = "yarns";
        break;
      default:
        newProductType = "patterns"
    }

    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}api/${newProductType}/?populate=*`;
    const res = await fetchData(url);
    let data = "";
    res.map((product:any) => {
      console.log(product.attributes.title)
      if(product.attributes.title == id) {
        data = product.attributes;
        return;
      }
    })
    setProductData(data);
  }

  useEffect(() => {
    if (router.query.id) {
      getProduct()
    }
  },[router])

  return (
    <>
      {productData ? <Product data={productData}/> : ""}
    </>
  )
}
*/