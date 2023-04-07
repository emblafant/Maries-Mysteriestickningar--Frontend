import Link from "next/link"
import { TbArrowNarrowRight } from "react-icons/tb";
const ProductText = ({data}:any) => {

  return (
    <div>
      <div>
        <h1>{data.title}</h1>
        {data.pattern_type ? <Link href={`/mönster/${data.pattern_type.replace(/\s+/g, '-').toLowerCase()}`}>{data.pattern_type}</Link> : ""}
        {data.sizes ? <p>{data.sizes}</p> : ""}
        {data.amount ? <p>{data.amount}</p> : ""}
        {data.type ? <p>{data.type}</p> : ""}
        <p>{data.price}:-</p>
      </div>
      {data.material ? 
      <div>
        <h2>Material:</h2>
        <ul>
          {data.material.map((material:any, i:number) => {
            return <li key={i}>{material.material}</li>
          })}
        </ul>
      </div>
      :""
      }
      <div>
        {data.description_title ? <h2>{data.description_title}</h2> : ""}
        <p>{data.description}</p>
      </div>
      <Link href={data.link_url}>Köp <TbArrowNarrowRight/></Link>
    </div>
  )
}

export default ProductText
