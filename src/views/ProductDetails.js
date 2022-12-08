import React from "react";
import AsSeenOnInstagram from "../components/AsSeenOnInstagram";
import MatterInterface from "../components/MatterInterface";
import ProductDetailsContainer from "../components/ProductDetailsContainer";
import YouMayAlsoLike from "../components/YouMayAlsoLike/inex";

const ProductDetails = () => {
  return (
    <div>
      <ProductDetailsContainer />
      <MatterInterface title="As Seen On Instagram">
        <AsSeenOnInstagram />
      </MatterInterface>
      <MatterInterface title="You May Also Like">
        <YouMayAlsoLike />
      </MatterInterface>
    </div>
  );
};

export default ProductDetails;
