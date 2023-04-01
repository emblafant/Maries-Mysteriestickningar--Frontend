import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Nav from "./Nav"

import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const MobileHeader = () => {
  const [displayNav, setDisplayNav] = useState<boolean>(false);

  return (
    <header>
      <Link href="/">
      <div className="image-conatiner logo-conatainer">
        <Image src="/logo-small-white.svg" height={30} width={30} alt="logo"/>
      </div>
      </Link>
      <button id="menuBtn" onClick={() => {setDisplayNav(!displayNav)}}>
        {displayNav ? <RxCross2/> : <RxHamburgerMenu/>}
      </button>
      {displayNav ? <Nav/> : ""}
    </header>
  )
}

export default MobileHeader