import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar";
import NavMobile from "../NavBar/navMobile";
import { MainContainer } from "./style";

const Layout = () => {
  const [mobile, setMobile] = useState(false);
  const [mobileFooter, setMobileFooter] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 992) {
        if (window.innerWidth < 800) {
          setMobileFooter(true);
        } else {
          setMobileFooter(false);
        }
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [mobile, mobileFooter]);

  return (
    <div>
      {mobile ? <NavMobile /> : <NavBar />}
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </div>
  );
};

export default Layout;
