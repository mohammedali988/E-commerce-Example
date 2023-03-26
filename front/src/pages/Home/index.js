import React from "react";
import CreatorSlider from "./creatorSlider";
import LiveSection from "./liveSection";
import MainSection from "./mainSection";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <MainSection />
      <CreatorSlider />
      <LiveSection />
    </Container>
  );
};

export default Home;
