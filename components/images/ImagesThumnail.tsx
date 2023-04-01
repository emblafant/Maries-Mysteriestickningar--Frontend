import Image from "next/image";
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
          <div className="img-container" key={i}>
              <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}uploads/${img.attributes.hash}${img.attributes.ext}`} fill alt="produkt bild"/>
          </div>
        )};
      })}
    </div>
    :
    <div className="img-container">
      <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}uploads/${images[0].attributes.hash}${images[0].attributes.ext}`} fill alt="produkt bild"/>
    </div>
    }
    </>
  )
}

export default ImagesThumbnail
