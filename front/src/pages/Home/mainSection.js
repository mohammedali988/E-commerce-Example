import React from "react";
import { Left, MainCont, Right } from "./style";
import Typo from "../../component/Typography";
import { Button } from "../../component/buttons/style";
import HeroImg from "../../assets/hero-image.svg";

const MainSection = () => {
  return (
    <MainCont>
      <Right>
        <Typo
          variant={"h1"}
          color={"white"}
          fontSize={"50px !important"}
          style={{ marginBlockEnd: "0em" }}
          weight={"700"}
          height={"1.25"}
        >
          Tailwind Template for NFT Marketplace and Web3 Platforms
        </Typo>
        <Typo
          variant={"p"}
          color={"white"}
          opacity={".6"}
          fontSize={"1.125rem !important"}
          weight={"500"}
          height={"1.625"}
        >
          {" "}
          Template for NFT, Token, and Web3 marketplace projects, based on
          Tailwind CSS. Comes with all the essential UI components and pages you
          need to build an NFT marketplace or all sorts of Web3 platforms.
        </Typo>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
          }}
        >
          <Button
            bcColor={"rgb(81 66 252)"}
            borderColor={"rgb(81 66 252)"}
            padding={"2px 35px"}
            right={"20px"}
          >
            <Typo variant={"h5"} fontSize={"15px !important"}>
              Explore Now
            </Typo>
          </Button>
          <Button padding={"0px 35px"} bcColor={"rgb(20 20 32)"}>
            <Typo variant={"h5"} fontSize={"15px !important"}>
              Upload Your Art
            </Typo>
          </Button>
        </div>
      </Right>
      <Left>
        <img src={HeroImg} alt="Main logo" style={{ width: "80%" }} />
      </Left>
    </MainCont>
  );
};

export default MainSection;
