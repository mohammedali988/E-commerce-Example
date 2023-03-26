import React from "react";
import { Button } from "../../component/buttons/style";
import LiveCard from "../../component/Card/LiveCard";
import Typo from "../../component/Typography";
import {
  LeftTitle,
  RightTitle,
  SectionsBody,
  SectionsCont,
  SectionsTitle,
} from "./style";

const LiveSection = () => {
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
            Live Auctions
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
        <LiveCard />
        <LiveCard />
        <LiveCard />
        <LiveCard />
      </SectionsBody>
    </SectionsCont>
  );
};

export default LiveSection;
