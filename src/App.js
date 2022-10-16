import styles from"./App.module.css";
import React from "react";
import AddsBar from "./components/AddsBar";
import Header from "./components/Header";
import Slider from "./components/Slider";
import MatterInterface from "./components/MatterInterface";
import Footer from "./components/Footer";
import ProductBox from "./components/Featured/ProductBox";
import AboutContainer from "./components/AboutMatter/AboutContainer";
import ExploreContainer from "./components/Explore/ExploreContainer";
import ShopContainer from "./components/Shop/ShopContainer";
import AsSeenContainer from "./components/AsSeenOn/AsSeenContainer";
import RecommendedVideosContainer from "./components/RecommendedVideos/RecommendedVideosContainer";
import SeeButton from "./components/Explore/SeeButton";
const App = () => {
  return (
    <div className={styles.App}>
      <>
        <AddsBar />
        <Header />
        <Slider />
        <MatterInterface title="Featured">
          <ProductBox />
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

        <Footer />
      </>
    </div>
  );
};

export default App;
