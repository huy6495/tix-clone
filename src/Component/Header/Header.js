import React from "react";
import img from "../../assets/img/web-logo.png";
import imgLogin from "../../assets/img/avatar.png";
import imgLocation from "../../assets/img/location-header.png";
import "./Header.css";
import HeadMenu from "./HeadMenu";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

export default function Header() {
  const { tenLogin, reDirect } = useSelector((state) => state.NguoiDungReducer);
  const dispatch = useDispatch();

  const path = useHistory().location.pathname;

  return (
    <div>
      <div id="navbarHeader">
        <NavLink to="/home" className="left">
          <img className="webLogo" src={img} />
        </NavLink>
        <div id="headMenu">
          <HeadMenu homePath={path === "/" || path === "/home"} />
        </div>
        <div className="right">
          <div
            id="account"
            className="imgCircle"
            onClick={() => dispatch({ type: "SET_REDIRECT" })}
          >
            <NavLink className="nav-link active" to="/login">
              <img
                className="rounded-circle"
                style={{ height: 30, width: 30 }}
                src={imgLogin}
              />
              <p
                style={{
                  display: "inline-block",
                  marginLeft: 10,
                  color: "#fa5238",
                }}
              >
                {tenLogin ? tenLogin : "Đăng nhập"}
              </p>
            </NavLink>
          </div>
          <div className="selectLocation dropdown">
            {/* <img className="place-header white" src={imgLocation} /> */}
            <NavLink to="/admin">
              <div
                className="ps-3 fs-6"
                style={{ cursor: "pointer", color: "#fb4226" }}
              >
                Trang Quản Trị
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
