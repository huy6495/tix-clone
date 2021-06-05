import React, { Component } from "react";
import img from "../../assets/img/web-logo.png";
import imgLogin from "../../assets/img/avatar.png";
import imgLocation from "../../assets/img/location-header.png";
import "./Header.css";

export default class Header extends Component {
  render() {
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
            <a href="appblock">Ứng dụng</a>
          </div>
          <div className="right">
            <div id="account" className="imgCircle">
              <a href="#" className="titleDisplay">
                <img className="btnLogin" src={imgLogin} />
                <p className="white" style={{ display: "inline-block" }}>
                  Đăng Nhập
                </p>
              </a>
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
}
