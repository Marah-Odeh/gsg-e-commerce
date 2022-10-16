import styles from "./styles.module.css";

const ListItems = () => {
  const menuItems = ["shop","fabric","journal","About"];
  

  return (
    <ul className={styles.MenuList}>
      {
        menuItems.map((item, index) => {
          return (
            <li key={index} className={styles.MenuItems}>
               <a href="#">
              <div> {item}</div>
             <span> <i class="fa-solid fa-angle-down fa-lg fa-fw"></i></span>    </a></li>
          );

        })
      }
    </ul>
  );
};

export default ListItems;
