import React from "react";
import {
  CardCont,
  ImgCont,
  Info,
  ProductsImg,
  ProductsInfo,
  ProductsTitle,
  Timer,
} from "./style";
import ProductImg from "../../assets/image-01.svg";
import Typo from "../Typography";
import creator from "../../assets/creator-01.jpg";

const LiveCard = () => {
  return (
    <CardCont direction={"column"} maBottom={"2.5rem"}>
      <ProductsImg>
        <img src={ProductImg} alt={"products"} style={{ width: "100%" }} />
      </ProductsImg>
      <ProductsTitle>
        <Typo
          variant={"h1"}
          color={"white"}
          weight="600"
          style={{ marginBlock: "0px" }}
        >
          35-Bit Digital #439
        </Typo>
      </ProductsTitle>
      <ProductsInfo>
        <ImgCont height={"2rem"} MaRight={"0.5rem"}>
          <img
            src={creator}
            alt={"creator"}
            style={{ width: "100%", height: "100%", borderRadius: "0.375rem" }}
          />
        </ImgCont>
        <Info grow={"1"}>
          <Typo
            variant={"h2"}
            color={"white"}
            style={{ marginBlockEnd: 0 }}
            fontSize={"0.75rem"}
            weight={"600"}
            height={"1rem"}
          >
            @MohammedAli
          </Typo>
          <Typo
            variant={"h3"}
            color={"rgb(161 160 174)"}
            fontSize={"0.75rem"}
            style={{ marginBlockStart: ".3rem" }}
            height={"1rem"}
          >
            creator
          </Typo>
        </Info>
        <Info items={"end"}>
          <Typo
            variant={"h5"}
            color={"rgb(255 255 255)"}
            weight={"600"}
            fontSize={"0.75rem"}
            style={{ marginBlock: "0rem" }}
            height={"1rem"}
          >
            14.55 ETH
          </Typo>
          <Typo
            variant={"h5"}
            color={"rgb(161 160 174)"}
            fontSize={"0.75rem"}
            style={{ marginBlock: "0rem" }}
            height={"1rem"}
          >
            Current Bid
          </Typo>
        </Info>
      </ProductsInfo>
      <Timer>07 : 15 : 03 : 12</Timer>
    </CardCont>
  );
};

export default LiveCard;
