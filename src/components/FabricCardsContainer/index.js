import React from "react";
import MatterInterface from "../MatterInterface";
import ProductCard from "../ProductDetailsContainer/ProductCard";
import styles from "./styles.module.css";

const ProductsData = [
  { image: "/images/ExploreBox1.png", description: "imagePartner 1 Journal" },
  { image: "/images/ExploreBox2.png", description: "imagePartner 2 Journal" },
  { image: "/images/ExploreBox6.png", description: "imagePartner 3 Journal" },
  { image: "/images/FJ5.png", description: "imagePartner 4 Journal" },
  { image: "/images/FJ4.png", description: "imagePartner 5 Journal" },
  { image: "/images/FJ7.png", description: "imagePartner 6 Journal" },
];
const FabricCardsContainer = () => {
  return (
    <MatterInterface title={"Explore"}>
      <div className={styles.FabricCardsContainer}>
        {ProductsData.map((item) => {
          return (
            <ProductCard
              containerName={"fabric"}
              productImage={item.image}
              productDescription={item.description}
            />
          );
        })}
      </div>
    </MatterInterface>
  );
};

export default FabricCardsContainer;
