import Link from "next/link";
import { useState } from "react";

import { RxChevronDown, RxChevronUp } from "react-icons/rx";

const Nav = () => {
  const categories = require("../../data/categories.json");
  const [displaySubCat, setDisplaySubCat] = useState<boolean>(false);
  return (
    <nav>
      <ul>
        {categories.map((category:any, i:number) => {
          if (category.url) {
            return <li key={i}><Link href={category.url}>{category.name}</Link></li>
          } else {
            return (
              <>
              <li key={i}>
                {category.name}
                <button onClick={() => {setDisplaySubCat(!displaySubCat)}}>
                  {displaySubCat ? <RxChevronUp/> : <RxChevronDown/>}
                </button>
              </li>
              {displaySubCat ?
                <ul key={i + "ul"}>
                {category.subCategories.map((subCat:any, i:number) => {
                  return <li key={i}><Link href={subCat.url}>{subCat.name}</Link></li>
                })}
                </ul>
                : ""
               }
              </>
            )
          }
        })}
      </ul>
    </nav>
  )
}

export default Nav;