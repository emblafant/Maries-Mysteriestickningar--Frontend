import DesktopHeader from "./header/DesktopHeader";
import MobileHeader from "./header/MobileHeader";

const Layout = ({children}:any) => {
  return (
    <>
      <DesktopHeader/>
      <MobileHeader/>
      <main>{children}</main>
    </>
  )
}

export default Layout;