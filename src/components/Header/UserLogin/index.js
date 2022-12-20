import styles from "./styles.module.css";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import { FiLogOut } from "react-icons/fi";
const UserLogin = () => {
  const [cookie, setCookie, removeCookie] = useCookies();
  const [userData, setUserData] = useState({});
  const [logOutFlag, setLogOutFlag] = useState(false);
  useEffect(() => {
    let ignore = false;

    axios
      .get(`http://restapi.adequateshop.com/api/users/${cookie.id}`, {
        headers: { Authorization: `Bearer ${cookie.token}` },
      })
      .then((user) => {
        if (!ignore) {
          setUserData(user.data);
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

  const handleLogOut = () => {
    setLogOutFlag(!logOutFlag);
  };
  const handleRemoveToken = () => {
    console.log("remove");
    removeCookie("token");
  };
  return (
    <>
      <div className={styles.UserLoginContainer}>
        <span className={styles.WelcomeText}>Welcome, {cookie.name}</span>
        <img
          src={userData.profilepicture}
          alt="user_image"
          className={styles.ProfilePicture}
          onClick={handleLogOut}
        />
      </div>
      {logOutFlag && (
        <div className={styles.LogoutMenu}>
          <a onClick={handleRemoveToken}>
            <div className={styles.LogOutItems}>
              <span>
                {" "}
                <span id={styles.Circle}>
                <FiLogOut  id={styles.LogOutIcon} />
                </span>
              </span>
            <span id={styles.LogOut}>Logout</span>
            
            </div>
          </a>
        </div>
      )}
    </>
  );
};

export default UserLogin;
