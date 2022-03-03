import React, { useState, useEffect } from "react";
import { Navbar } from "../../Config";
import { HomeBody } from "./HomeElements";
import HeaderComp from "../../Components/HomepageComponents/HeaderComp";
import Content from "../../Components/HomepageComponents/Content";
import RoadMapComp from "../../Components/HomepageComponents/RoadMap";
import TokenMetric from "../../Components/HomepageComponents/TokenMetric";
import Character from "../../Components/HomepageComponents/Character";
import Team from "../../Components/HomepageComponents/Team";
import Partner from "../../Components/HomepageComponents/Partner";
import Community from "../../Components/HomepageComponents/Community";

const UnauthenHomepage = (props) => {
  return (
    <>
        <Navbar />
        <HomeBody>
          <HeaderComp />
          <Content />
          <RoadMapComp />
          <TokenMetric />
          <Character />
          <Team />
          <Partner />
          <Community />
        </HomeBody>
    </>
  );
};

export default UnauthenHomepage;
