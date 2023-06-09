import Link from "next/link";
import { TbArrowNarrowRight } from "react-icons/tb";

import ImagesThumbnail from "./images/ImagesThumnail";

const getUrlPath = (data:any, id:number) => {
  let urlPath:string = "";

  const type = data.product_type;
  switch (type) {
    case "pattern":
      urlPath += "/mönster";
      break;
    case "book":
      urlPath += "/böcker";
      break;
    case "yarn":
      urlPath += "/garn";
      break;
    default:
      console.log("invalid product type")
  }

  if (type == "pattern") {
    urlPath += "/" + data.pattern_type.trim().replace(/\s+/g, '-').toLowerCase();
  }

  urlPath += "/" + id;

  return urlPath;
}

const ProductThumbnail = ({data}:any) => {
  const title = data.title;

  const urlPath = getUrlPath(data, title);

  return (
    <article className="product-thumbnail">
      <ImagesThumbnail images={data.images}/>
      <div className="text-container">
        <div>
          <h2>{data.title}</h2>
          {data.pattern_type ? 
            <p>{data.pattern_type}</p>
          : ""}
          <p>{data.price}:-</p>
        </div>
        <Link href={urlPath} className="link">Se mer <TbArrowNarrowRight/></Link>
      </div>
    </article>
  )
}

export default ProductThumbnail;