import React from "react";
import IdentificationCard from "../../component/IdentificationCard";
import { SliderBody, SliderCont, SliderTitle } from "./style";

const CreatorSlider = () => {
  return (
    <SliderCont>
      <SliderTitle></SliderTitle>
      <SliderBody>
        <IdentificationCard />
        <IdentificationCard />
        <IdentificationCard />
        <IdentificationCard />
      </SliderBody>
    </SliderCont>
  );
};

export default CreatorSlider;
