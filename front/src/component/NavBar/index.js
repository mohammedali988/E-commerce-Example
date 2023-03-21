import React, { useEffect, useState } from "react";
import Typo from "../Typography";
import {
  Cont,
  Logo,
  NavAction,
  NavContainer,
  NavData,
  NavOption,
  Search,
} from "./styles";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faMagnifyingGlass,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../buttons/style";
import { Link } from "react-router-dom";
import { Option } from "./option";
import BobUpSubMenu from "./navSubMenu";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [bobUp, setBobUp] = useState(false);

  const handleScrolled = () => {
    const offset = window.scrollY;

    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolled);
  });

  return (
    <>
      <NavContainer scrolled={scrolled}>
        <Cont>
          <Logo>
            <img src={logo} alt="E-commerce Logo" />
          </Logo>
          <NavAction>
            {Option.map((e, i) => {
              return (
                <NavOption
                  key={i}
                  onClick={() => setActive(e.title)}
                  active={active === e.title}
                  onMouseEnter={() => {
                    e.subMenu && setBobUp(true);
                  }}
                  onMouseLeave={() => {
                    setBobUp(false);
                  }}
                >
                  <Link
                    to={e.to}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      marginRight: "5px",
                    }}
                  >
                    <Typo pointer={true} fontSize={"16px !important"}>
                      {e.title}
                    </Typo>
                  </Link>
                  {e.subMenu && <FontAwesomeIcon icon={faAngleDown} />}
                  {e.subMenu && bobUp ? (
                    <BobUpSubMenu SubMenuItems={e.subMenuItems} />
                  ) : (
                    <></>
                  )}
                </NavOption>
              );
            })}
          </NavAction>
          <NavData>
            <Search>
              <FontAwesomeIcon
                style={{ fontSize: "20px" }}
                icon={faMagnifyingGlass}
              />
            </Search>
            <Link to="/connect/wallet" style={{ textDecoration: "none" }}>
              <Button
                padding={"0px 10px"}
                width={"200px"}
                bcColor={"rgba(0, 6, 16, 0.918)"}
              >
                <FontAwesomeIcon
                  style={{ marginRight: "8px", fontSize: "15px" }}
                  icon={faWallet}
                />
                <Typo variant={"h2"} fontSize={"20px"}>
                  Wallet Connect
                </Typo>
              </Button>
            </Link>
          </NavData>
        </Cont>
      </NavContainer>
    </>
  );
};

export default NavBar;
