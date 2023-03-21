import React from "react";
import { Logo, MobileCont, NavActionMobile, NavData } from "./navMobileStyle";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../buttons/style";
import Typo from "../Typography";
import {
  faBars,
  faMagnifyingGlass,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { NavContainer, Search } from "./styles";
import { useEffect } from "react";
import { useState } from "react";

const NavMobile = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 575) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [mobile]);

  return (
    <NavContainer>
      <MobileCont>
        <Logo>
          <img src={logo} alt="E-commerce Logo" />
        </Logo>

        <NavData>
          <Search>
            <FontAwesomeIcon
              style={{ fontSize: "20px" }}
              icon={faMagnifyingGlass}
            />
          </Search>
          {!mobile && (
            <Button
              padding={"0px 5px"}
              width={"200px"}
              bcColor={"rgba(0, 6, 16, 0.918)"}
            >
              <FontAwesomeIcon
                style={{ marginRight: "5px", fontSize: "15px" }}
                icon={faWallet}
              />
              <Typo variant={"h2"} fontSize={"10px"}>
                Wallet Connect
              </Typo>
            </Button>
          )}
          <NavActionMobile>
            <FontAwesomeIcon
              icon={faBars}
              style={{ fontSize: "40px", width: "50px" }}
            />
          </NavActionMobile>
        </NavData>
      </MobileCont>
    </NavContainer>
  );
};

export default NavMobile;
