import React from "react";
import Typo from "../Typography";
import creator from "../../assets/creator-01.jpg";
import {
  CardCont,
  ImageResCont,
  ImageResp,
  Img,
  ImgCont,
  Info,
  ProductsInfo,
  ProductsTitle,
} from "./style";
import img1 from "../../assets/image-02(2).svg";
import img2 from "../../assets/image-03(2).svg";
import img3 from "../../assets/image-01(2).svg";
import "./index.css";

const arrayOfImg = [img2, img1];

const PopularCard = () => {
  return (
    <CardCont width={"50%"} direction={"column"} pad={"2rem"}>
      <div className="image-gallery">
        <div className="large">
          <img src={img3} alt={"img"} />
        </div>
        <div className="small">
          {arrayOfImg.map((e, i) => (
            <img src={e} key={i} alt="img" />
          ))}
        </div>
      </div>
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
      </ProductsInfo>
    </CardCont>
  );
};

export default PopularCard;
