import React from "react";
import Slider from "../components/Slider";
import MatterInterface from "../components/MatterInterface";
import Featured from "../components/Featured";
import AboutContainer from "../components/AboutMatter/AboutContainer";
import ExploreContainer from "../components/Explore/ExploreContainer";
import ShopContainer from "../components/Shop/ShopContainer";
import AsSeenContainer from "../components/AsSeenOn/AsSeenContainer";
import RecommendedVideosContainer from "../components/RecommendedVideos/RecommendedVideosContainer";
import SeeButton from "../components/Explore/SeeButton";

const HomePage = () => {
  return (
    <>
      <Slider />
      <MatterInterface title="Featured">
        <Featured />
      </MatterInterface>

      <MatterInterface title="About Matter">
        <AboutContainer />
      </MatterInterface>
      <MatterInterface title="Explore">
        <ExploreContainer />
        <SeeButton />
      </MatterInterface>
      <MatterInterface title="Shop">
        <ShopContainer />
      </MatterInterface>

      <MatterInterface title="Recommended Videos">
        <RecommendedVideosContainer />
      </MatterInterface>

      <MatterInterface title="As Seen On">
        <AsSeenContainer />
      </MatterInterface>
    </>
  );
};

export default HomePage;
