import React from 'react'
import styles from"./styles.module.css"
import{Link} from "react-router-dom"
const SeeButton = () => {
  return (
    <Link to="/journal">
      <button id={styles.SeeButton} >  See the journal</button>
    </Link>
  )
}

export default SeeButton