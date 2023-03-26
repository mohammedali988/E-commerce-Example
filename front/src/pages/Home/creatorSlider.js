import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import IdentificationCard from "../../component/Card/IdentificationCard";
import Typo from "../../component/Typography";
import {
  LeftTitle,
  RightTitle,
  SectionsBody,
  SectionsTitle,
  SectionsCont,
} from "./style";
import { Button } from "../../component/buttons/style";

const CreatorSlider = () => {
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
            Top Artist
          </Typo>
        </LeftTitle>
        <RightTitle>
          <Button
            width={"40px"}
            padding={"5px"}
            bcColor={"rgba(255, 255, 255, 0.05)"}
            borderColor={"rgba(229, 231, 235, 0.1)"}
            height={"40px"}
          >
            <FontAwesomeIcon icon={faArrowRight} rotation={180} />
          </Button>
          <Button
            width={"40px"}
            padding={"5px"}
            right={"0px"}
            bcColor={"rgba(255, 255, 255, 0.05)"}
            borderColor={"rgba(229, 231, 235, 0.1)"}
            height={"40px"}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </RightTitle>
      </SectionsTitle>
      <SectionsBody>
        <IdentificationCard />
        <IdentificationCard />
        <IdentificationCard />
        <IdentificationCard />
      </SectionsBody>
    </SectionsCont>
  );
};

export default CreatorSlider;
