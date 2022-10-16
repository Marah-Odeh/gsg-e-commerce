import React from "react";
import { FooterList } from "./FooterList.js";
import styles from "./styles.module.css";
const ListComponent = () => {
  return (
    <div  className={styles.FooterListComponent}>
      {FooterList.map((item) => {
        const { ListTitle,item1, item2, item3, item4, item5 } = item;
        return (
          <>
            <div className={styles.Column}>
              <h4>{ListTitle}</h4>
              <ul className={styles.List}>
                <li className={styles.ListItem}>
                  <a href="">{item1}</a>
                </li>
                <li className={styles.ListItem}>
                  <a href="">{item2} </a>
                </li>
                <li className={styles.ListItem}>
                  <a href="">{item3} </a>
                </li>
                <li className={styles.ListItem}>
                  <a href="">{item4} </a>
                </li>
                <li className={styles.ListItem}>
                  <a href="">{item5} </a>
                </li>
              </ul>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ListComponent;
