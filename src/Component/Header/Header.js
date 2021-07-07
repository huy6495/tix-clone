import React from "react";
import img from "../../assets/img/web-logo.png";
import imgLogin from "../../assets/img/avatar.png";
import imgLocation from "../../assets/img/location-header.png";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { tenLogin, reDirect } = useSelector((state) => state.NguoiDungReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <div id="navbarHeader">
        <a href="/" className="left">
          <img className="webLogo" src={img} />
        </a>
        <div id="headMenu">
          <a href="#homeMovies" className="active">
            Lịch Chiếu
          </a>
          <a href="#group-cinema">Cụm rạp</a>
          <a href="#news-total">Tin Tức</a>
          <a href="#">Ứng dụng</a>
        </div>
        <div className="right">
          <div
            id="account"
            className="imgCircle"
            onClick={() => dispatch({ type: "SET_REDIRECT" })}
          >
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/login"
            >
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
            <img className="place-header white" src={imgLocation} />
            <div
              className="dropdown-toggle selectMenu white ng-binding"
              data-toggle="dropdown"
            >
              Hồ Chí Minh
            </div>
            <ul className="dropdown-menu selectScroll">
              <li>
                <a
                  ng-click="selectLocation(locId)"
                  data-name="Hồ Chí Minh"
                  data-locid={0}
                  className="ng-binding"
                >
                  Hồ Chí Minh
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
