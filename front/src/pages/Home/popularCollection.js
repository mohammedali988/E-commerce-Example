import React from "react";
import { Button } from "../../component/buttons/style";
import PopularCard from "../../component/Card/popularCard";
import Typo from "../../component/Typography";
import {
  LeftTitle,
  RightTitle,
  SectionsBody,
  SectionsCont,
  SectionsTitle,
} from "./style";

const PopularCollection = () => {
  return (
    <SectionsCont>
      <SectionsTitle>
        <LeftTitle>
          <Typo
            variant={"h1"}
            color={"#ffff"}
            fontSize={"1.875rem"}
            weight={"800"}
          >
            Popular Collection
          </Typo>
        </LeftTitle>
        <RightTitle>
          <Button
            bcColor={"rgb(81 66 252)"}
            borderColor={"rgb(81 66 252)"}
            padding={"10px 1.3rem"}
            right={"0px"}
          >
            <Typo
              weight={"600"}
              fontSize={"1rem !important"}
              height={"1.5rem"}
              style={{ marginBlock: "0px" }}
            >
              Explore More
            </Typo>
          </Button>
        </RightTitle>
      </SectionsTitle>
      <SectionsBody>
        <PopularCard />
        <PopularCard />
      </SectionsBody>
    </SectionsCont>
  );
};

export default PopularCollection;
