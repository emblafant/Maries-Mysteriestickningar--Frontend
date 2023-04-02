import Image from "next/image";
import ImageSingle from "./ImageSingle";
const ImagesThumbnail = (images:any) => {
  images = images.images.data;

  let bundle:boolean;
  images.length >= 4 ? bundle = true : bundle = false;

  console.log(images[0]);
  return (
    <>
    {bundle ?
    <div className="bundle-container">
      {images.map((img:any, i:number) => {
        if (i < 4) {
        return (
          <ImageSingle key={i} image={`${process.env.NEXT_PUBLIC_STRAPI_URL}uploads/${img.attributes.hash}${img.attributes.ext}`} alt="produktbild"/>
        )};
      })}
    </div>
    :
    <ImageSingle image={`${process.env.NEXT_PUBLIC_STRAPI_URL}uploads/${images[0].attributes.hash}${images[0].attributes.ext}`} alt="produktbild"/>
    }
    </>
  )
}

export default ImagesThumbnail
