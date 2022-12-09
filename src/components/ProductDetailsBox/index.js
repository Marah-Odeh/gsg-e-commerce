import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";
import TitleRatingAndPrice from "../QuickViewModel/TitleRatingAndPrice";
import ModalDescription from "../QuickViewModel/DescriptionContainer";
import InformationTable from "../QuickViewModel/TableContainer";
import QuantityField from "../QuickViewModel/QuantityField";
import ProductImages from "../QuickViewModel/ImagesContainer";
import { IoIosArrowForward } from "react-icons/io";
const ProductDetailsBox = ({ getRating }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log("inside use effect");
    let ignore = false;
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        if (!ignore) {
          console.log(res.data.products);
          setProducts(res.data.products);
          console.log("!ignore");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      ignore = true;
      console.log("ignore");
    };
  }, []);

  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  return (
    <div className={styles.ProductDetailsBox}>
      {products.map((i) => {
        if (i.id === +productId) {
          getRating(i.rating);
          return (
            <>
              <div className={styles.HeaderContainer}>
                <p className={styles.HeaderTitle}>
                  {i.category}
                  <IoIosArrowForward />
                  {i.title}
                </p>
              </div>
              <div className={styles.ModalBody}>
                <div className={styles.ImagesBox}>
                  <ProductImages images={i.images} />
                </div>
                <div className={styles.DetailsBox}>
                  <TitleRatingAndPrice
                    title={i.title}
                    rating={i.rating}
                    price={i.price}
                  />
                  <ModalDescription description={i.description} />
                  <InformationTable
                    stock={i.stock}
                    brand={i.brand}
                    category={i.category}
                  />
                  <QuantityField id={i.id} />
                </div>
              </div>{" "}
            </>
          );
        }
      })}
    </div>
  );
};

export default ProductDetailsBox;
