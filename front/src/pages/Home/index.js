import React from "react";
import CreatorSlider from "./creatorSlider";
import MainSection from "./mainSection";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <MainSection />
      <CreatorSlider />
    </Container>
  );
};

export default Home;
