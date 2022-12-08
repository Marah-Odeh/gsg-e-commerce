import "./styles.css";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

const UserLogin = () => {
  const [cookie, removeCookie] = useCookies();
  const [userData, setUerData] = useState({});
  const [logOutFlag, setLogOutFlag] = useState(false);
  useEffect(() => {
    let ignore = false;

    axios
      .get(`http://restapi.adequateshop.com/api/users/${cookie.id}`, {
        headers: { Authorization: `Bearer ${cookie.token}` },
      })
      .then((user) => {
        if (!ignore) {
          setUerData(user.data);
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
    removeCookie("name")
  };
  return (
    <>
      <div className="userLogin-container">
        <span className={"WelcomeText"}>Welcome, {cookie.name}</span>
        <img
          src={userData.profilepicture}
          alt="user_image"
          className="ProfilePicture"
          onClick={handleLogOut}
        />
      </div>
      {logOutFlag && (
        <div className="LogoutMenu">
          <a onClick={handleRemoveToken}>
            <span>Logout</span>
          </a>
        </div>
      )}
    </>
  );
};

export default UserLogin;
