import { fetchData } from "./fetchData";
import categories from "../data/categories.json"

const getProduct =  async (router:any, type:string) => {
  let productType = router.query.type.toLowerCase();

  let match:boolean = false;
  categories.map((category) => {
    if (!match && category.subCategories) {
      category.subCategories.map((subCat) => {
        const name = subCat.name.replace(/\s+/g, '-').toLowerCase();
        if(!match && name == productType) {
          match = true;
          return
        }
      })
    }
    const name = category.name.replace(/\s+/g, '-').toLowerCase();
    if (!match && name == productType) {
      match = true;
      return
    }
  })

  if (match) {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}api/${type}/?populate=*`;
    const res = await fetchData(url);
    const products:any = [];
    res.map((product:any) => {
    const patternType = product.attributes.pattern_type.replace(/\s+/g, '-').toLowerCase();
      if (productType == "sockor") {
        if(patternType.includes("sockor")) {
          products.push(product.attributes)
        }
      } else if (productType == patternType) {
        products.push(product.attributes)
      }
    })
    return JSON.parse(JSON.stringify(products.reverse()))
  }
  
}

export default getProduct