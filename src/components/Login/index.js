import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";
import axios from "axios";
import { useCookies } from "react-cookie";
const Login = () => {
  const [formData, setFormData] = useState({});
  const [cookie, setCookie] = useCookies();
  const [saveToken, setSaveToken] = useState("");

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };
  const handleSubmit = async () => {
    console.log(formData);
    const {
      data: {
        data: { Token, Name, Id },
      },
    } = await axios.post(
      "http://restapi.adequateshop.com/api/authaccount/login",
      formData
    );
    console.log(Token, Name, Id);
    setSaveToken(Token);
    setCookie("token", Token);
    setCookie("name", Name);
    setCookie("id", Id);
  };
  return (
    <>
      <div className={styles.GoBack}>
        <Link to="/" className={styles.GoBackLink}>
          <IoMdReturnLeft className={styles.GoBackIcon} />
          <p className={styles.GoBackText}>Back</p>
        </Link>
      </div>

      <div className={styles.Login}>
        <img
          src={"/icons/LoginBack.svg"}
          className={styles.LoginImg}
          alt="login"
        />

        <div className={styles.LoginForm}>
          <div className={styles.LoginFormHeader}>
            <h1 className={styles.HeaderTitle}> Login Here</h1>
            <p className={styles.HeaderText}>
              Login here using your username and password
            </p>
          </div>
          <div className={styles.LabelWrapper}>
            <label for="email">Email</label>
            <input
              value={formData.email}
              type="text"
              placeholder="Email"
              onChange={handleEmailChange}
            />
          </div>
          <div className={styles.LabelWrapper}>
            <label for="password">Password</label>
            <input
              value={formData.password}
              type="password"
              placeholder="Password"
              id="password"
              onChange={handlePasswordChange}
            />
          </div>
          <button onClick={handleSubmit} className={styles.LoginBtn}>
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
