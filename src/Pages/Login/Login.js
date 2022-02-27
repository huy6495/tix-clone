import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";

import backgroundImg from "../../assets/img/Login/bg2.jpeg";
import logoHeader from "../../assets/img/Login/signHeader.png";
import LoginFilm from "../../Component/Login/LoginFilm";

export default function Login() {
  return (

    <div className="container-fluid" id="mainLogin">
      <div
        style={{
          backgroundImage: "url(" + backgroundImg + ")",
        }}
        className="signin"
      >
        <div className="signin--wrapper">
          <img className="sign-header" src={logoHeader} />
          <div className="signin--message">
            Đăng nhập để được nhiều ưu đãi, mua vé
            <br />
            và bảo mật thông tin!
          </div>
          <LoginFilm />
          <NavLink to="/home" className="signin-close"></NavLink>
        </div>
      </div>
    </div>
  );
}
