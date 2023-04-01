import Image from "next/image";
import Link from "next/link";

import Nav from "./Nav";

const DesktopHeader = () => {
  return (
    <header>
      <Link href="/">
      <div className="image-conatiner logo-conatainer">
        <Image src="/logo-big-white.svg" height={30} width={30} alt="logo"/>
      </div>
      </Link>
      <Nav/>
    </header>
  )
}

export default DesktopHeader;