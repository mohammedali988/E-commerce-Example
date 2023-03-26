import React from "react";
import { Button } from "../../component/buttons/style";
import Card from "../../component/Card/Card";
import Typo from "../../component/Typography";
import {
  LeftTitle,
  RightTitle,
  SectionsBody,
  SectionsCont,
  SectionsTitle,
} from "./style";

const TodaysPicks = () => {
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
            Today's Picks
          </Typo>
        </LeftTitle>
        <RightTitle>
          <Button
            bcColor={"rgb(81 66 252)"}
            borderColor={"rgb(81 66 252)"}
            padding={"10px 1.5rem"}
            right={"0px"}
          >
            <Typo
              weight={"600"}
              fontSize={"1rem !important"}
              height={"1.5rem"}
              style={{ marginBlock: "0px" }}
            >
              View All
            </Typo>
          </Button>
        </RightTitle>
      </SectionsTitle>
      <SectionsBody wrap={"wrap"}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SectionsBody>
    </SectionsCont>
  );
};

export default TodaysPicks;
