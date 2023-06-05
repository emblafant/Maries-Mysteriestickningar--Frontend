import Link from "next/link";
import { useState } from "react";

import { RxChevronDown, RxChevronUp } from "react-icons/rx";

const Nav = ({setDisplayNav}:any) => {
  const categories = require("../../data/categories.json");
  const [displaySubCat, setDisplaySubCat] = useState<boolean>(false);

  const closeNav = () => {
    if(setDisplayNav) {
      setDisplayNav(false)
    }
    else {
      setDisplaySubCat(false)
    }
  }
  return (
    <nav>
      <ul>
        {categories.map((category:any, i:number) => {
          if (category.url) {
            return <li key={i}><Link href={category.url} onClick={closeNav}>{category.name}</Link></li>
          } else {
            return (
              <div key={i} className={displaySubCat ? "dropdown" : ""}>
              <li>
                {category.name}
                <button onClick={() => {setDisplaySubCat(!displaySubCat)}}>
                  {displaySubCat ? <RxChevronUp/> : <RxChevronDown/>}
                </button>
              </li>
              {displaySubCat ?
                <ul key={i + "ul"}>
                {category.subCategories.map((subCat:any, i:number) => {
                  return <li key={i + "li"}><Link href={subCat.url} onClick={closeNav}>{subCat.name}</Link></li>
                })}
                </ul>
                : ""
               }
              </div>
            )
          }
        })}
      </ul>
    </nav>
  )
}

export default Nav;