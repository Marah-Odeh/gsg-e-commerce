import React, { useState } from "react";
import AsSeenOnInstagram from "../components/AsSeenOnInstagram";
import MatterInterface from "../components/MatterInterface";
import ProductDetailsContainer from "../components/ProductDetailsContainer";
import YouMayAlsoLike from "../components/YouMayAlsoLike";
import ProductDetailsBox from "../components/ProductDetailsBox";
import CustomerReviewsSection from "../components/CustomerReviewsSection";

const ProductDetails = () => {
    const[rating,setRating]=useState("");
  const getRating = (rating) => {
    console.log(rating);
    setRating(rating);
  };
  return (
    <div>
      <ProductDetailsBox getRating={getRating}/>
      <ProductDetailsContainer />
      <MatterInterface title="As Seen On Instagram">
        <AsSeenOnInstagram />
      </MatterInterface>
      <CustomerReviewsSection rating={rating}/>
      <MatterInterface title="You May Also Like">
        <YouMayAlsoLike />
      </MatterInterface>
    </div>
  );
};

export default ProductDetails;
