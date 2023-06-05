import Image from "next/image";
import Link from "next/link";

import Nav from "./Nav";
import ImageSingle from "../images/ImageSingle";

const DesktopHeader = () => {
  return (
    <header className="desktop-header">
      <Link href="/">
      <ImageSingle image="/logo-big-white.svg" alt="logo"/>
      </Link>
      <Nav/>
    </header>
  )
}

export default DesktopHeader;