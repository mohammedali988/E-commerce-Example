import React from "react";
import {
  CardAction,
  CardCont,
  ImgCont,
  Info,
  ProductsImg,
  ProductsInfo,
  ProductsTitle,
  Timer,
  View,
} from "./style";
import ProductImg from "../../assets/image-01.svg";
import Typo from "../Typography";
import creator from "../../assets/creator-01.jpg";
import { Button } from "../buttons/style";
import { Link } from "react-router-dom";

const Card = ({ live = false }) => {
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
      {live ? (
        <Timer>07 : 15 : 03 : 12</Timer>
      ) : (
        <CardAction>
          <Button
            bcColor={"rgb(81 66 252)"}
            borderColor={"rgb(81 66 252)"}
            padding={".75rem 1.25rem"}
            right={"0px"}
          >
            <Typo
              weight={"600"}
              fontSize={".875rem"}
              height={"1.25rem"}
              style={{ marginBlock: "0px" }}
            >
              Place Bid
            </Typo>
          </Button>
          <Link to="" style={{ textDecoration: "none" }}>
            <View>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 4.5V6.75L12 3.75L9 0.75V3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.1775 3.345 11.2725 3.93 12.195L5.025 11.1C4.6875 10.4775 4.5 9.75 4.5 9C4.5 7.80653 4.97411 6.66193 5.81802 5.81802C6.66193 4.97411 7.80652 4.5 9 4.5ZM14.07 5.805L12.975 6.9C13.305 7.53 13.5 8.25 13.5 9C13.5 10.1935 13.0259 11.3381 12.182 12.182C11.3381 13.0259 10.1935 13.5 9 13.5V11.25L6 14.25L9 17.25V15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 7.8225 14.655 6.7275 14.07 5.805Z"
                  fill="currentColor"
                ></path>
              </svg>
              <Typo fontSize={".875rem"} height={"1.25rem"}>
                View History
              </Typo>
            </View>
          </Link>
        </CardAction>
      )}
    </CardCont>
  );
};

export default Card;
