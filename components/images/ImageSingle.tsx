import Image from "next/image"

const ImageSingle = ({image, alt}:any) => {
  return (
    <div className="img-container">
      <Image src={image} fill alt={alt}/>
    </div>
  )
}
export default ImageSingle