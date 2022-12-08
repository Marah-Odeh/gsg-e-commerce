import React from 'react'
import styles from "./styles.module.css";

const ProductCard = ({productImage,productDescription}) => {
  return (
    <div className={styles.ProductCard}>
        <img src={productImage} alt='product' />
        <div className={styles.productDescription}>{productDescription}</div>
    </div>
  )
}

export default ProductCard