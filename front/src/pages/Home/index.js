import React from "react";
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
    </Container>
  );
};

export default Home;
