import React from 'react'
import styles from"./styles.module.css"
const ImageCard = ({ProductImage}) => {
  return (
    <>
    <img className={styles.Image} src={ProductImage} alt=""/>
    </>
  )
}

export default ImageCard