import DesktopHeader from "./header/DesktopHeader";
import MobileHeader from "./header/MobileHeader";
import ToTopBtn from "./ToTopBtn";

const Layout = ({children}:any) => {
  return (
    <>
      <DesktopHeader/>
      <MobileHeader/>
      <ToTopBtn/>
      <main>{children}</main>
    </>
  )
}

export default Layout;