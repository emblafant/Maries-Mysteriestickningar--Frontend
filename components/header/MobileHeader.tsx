import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Nav from "./Nav"
import ImageSingle from "../images/ImageSingle";

import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const MobileHeader = () => {
  const [displayNav, setDisplayNav] = useState<boolean>(false);

  return (
    <header>
      <Link href="/">
      <ImageSingle image="/logo-small-white.svg" alt="logo"/>
      </Link>
      <button id="menuBtn" onClick={() => {setDisplayNav(!displayNav)}}>
        {displayNav ? <RxCross2/> : <RxHamburgerMenu/>}
      </button>
      {displayNav ? <Nav/> : ""}
    </header>
  )
}

export default MobileHeader