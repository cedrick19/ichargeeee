import { ReactElement } from "react";

import HeroSection from "./HeroSection";
import HowTo from "./how-to";
import Sector from "./sector";

import WhyICharge from "./why-icharge/WhyIcharge";
import Services from "./service";
import Staypowered from "./staypowered";

const Home = (): ReactElement => {
  return (
    <>
      <HeroSection />
      <WhyICharge />
      <Services />
      <Sector />
      <Staypowered />
      <HowTo />
    </>
  );
};

export default Home;
