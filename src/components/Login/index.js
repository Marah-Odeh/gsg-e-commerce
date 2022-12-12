import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { Link, Navigate } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useCookies } from "react-cookie";
const Login = () => {
  const [formData, setFormData] = useState({});
  const [cookie, setCookie] = useCookies();
  const [error, setError] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };
  const handleSubmit = async () => {
    try {
      const {
        data: {
          data: { Token, Name, Id },
        },
      } = await axios.post(
        "http://restapi.adequateshop.com/api/authaccount/login",
        formData
      );
      console.log(Token, Name, Id);
      setCookie("token", Token);
      setCookie("name", Name);
      setCookie("id", Id);
    } catch (err) {
      setError(true);
    }
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
            <label>Email</label>
            <input
              value={formData.email}
              type="text"
              placeholder="Email"
              onChange={handleEmailChange}
            />
          </div>
          <div className={styles.LabelWrapper}>
            <label>Password</label>
            <input
              value={formData.password}
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            <a className={styles.Eye} onClick={togglePassword}>
              {passwordShown ? <FaEye /> : <FaEyeSlash />}
            </a>
          </div>
          {error && (
            <div className={styles.ErrorMessage}>
              {" "}
              The Email or password you entered is incorrect, please try again.
            </div>
          )}
          <button
            onClick={handleSubmit}
            className={styles.LoginBtn}
            id={error && styles.ChangeBtnMargin}
          >
            Log In
          </button>
          {cookie.token && <Navigate to="/" />}
        </div>
      </div>
    </>
  );
};

export default Login;
