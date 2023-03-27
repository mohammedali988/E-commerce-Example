import React from "react";
import CoreFeatures from "./coreFeatures";
import CreatorSlider from "./creatorSlider";
import LiveSection from "./liveSection";
import MainSection from "./mainSection";
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
    </Container>
  );
};

export default Home;
