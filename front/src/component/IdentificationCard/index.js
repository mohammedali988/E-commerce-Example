import React from "react";
import { CardCont, ImgCont, Info } from "./style";
import Typo from "../Typography";
import creator from "../../assets/creator-01.jpg";

const IdentificationCard = () => {
  return (
    <CardCont>
      <ImgCont>
        <img
          src={creator}
          alt={"creator"}
          style={{ width: "100%", height: "100%", borderRadius: ".75rem" }}
        />
      </ImgCont>
      <Info>
        <Typo variant={"h2"} color={"white"} style={{ marginBlockEnd: 0 }}>
          @MohammedAli
        </Typo>
        <Typo variant={"h4"} color={"rgb(54 179 126)"}>
          14.55 ETH
        </Typo>
      </Info>
    </CardCont>
  );
};

export default IdentificationCard;
