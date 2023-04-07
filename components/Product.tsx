import Carousel from "./images/Carousel";
import ProductText from "./ProductText";

const Product = ({data}: any) => {
  return (
    <article className="product">
      <Carousel images={data.images.data}/>
      <ProductText data={data}/>
    </article>
  )
}

export default Product