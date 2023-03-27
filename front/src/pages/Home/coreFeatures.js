import React from "react";
import { CoreCardCont, CoreSection } from "./style";
import Typo from "../../component/Typography";
import CoreCard from "../../component/Card/coreCard";

const CoreFeatures = () => {
  return (
    <CoreSection>
      <Typo
        variant={"h2"}
        fontSize={"42px"}
        color={"white"}
        weight={"700"}
        height={"1.25"}
        style={{ marginBlock: "0px" }}
      >
        Core Features
      </Typo>
      <div style={{ width: "50%" }}>
        <Typo
          variant={"p"}
          color={"rgb(161 160 174)"}
          fontSize={"1.125rem"}
          height={"1.75rem"}
          text-align={"center"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
          lacinia dolor, in pretium nunc. Morbi mollis arcu eget.
        </Typo>
      </div>
      <CoreCardCont>
        <CoreCard />
        <CoreCard />
        <CoreCard />
        <CoreCard />
      </CoreCardCont>
    </CoreSection>
  );
};

export default CoreFeatures;
