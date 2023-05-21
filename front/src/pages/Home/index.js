import React from "react";
import CoreFeatures from "./coreFeatures";
import CreatorSlider from "./creatorSlider";
import LiveSection from "./liveSection";
import MainSection from "./mainSection";
import PopularCollection from "./popularCollection";
import { Container } from "./style";
import TodaysPicks from "./todaysPicks";

const Home = () => {
  return (
    <Container>
      <MainSection />
      <CreatorSlider />
      <LiveSection />
      <TodaysPicks />
      <CoreFeatures />
      <PopularCollection />
    </Container>
  );
};

export default Home;
