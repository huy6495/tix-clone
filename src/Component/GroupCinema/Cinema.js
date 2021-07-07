import React, { useEffect } from "react";
import { useState } from "react";
import { history } from "../../App";

import "./Cinema.css";

//image import
import imgLatMat from "../../assets/img/contentFilm/lat-mat-48h-16176188609123_215x318.png";
import imgThienThan from "../../assets/img/contentFilm/thien-than-ho-menh-16157907251398_215x318.jpeg";
import BackgroundCinema from "../BackgroundCinema/BackgroundCinema";

//import logo of cinema

import { useDispatch, useSelector } from "react-redux";
import { layThongTinLichChieuHeThongRap } from "../../redux/action/CinemaAction";
import { NavLink } from "react-router-dom";

export default function Cinema() {
  const { tenLogin } = useSelector((state) => state.NguoiDungReducer);
  const { arrayCinema, cinemaChon, cinemaIndex } = useSelector(
    (state) => state.CinemaReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layThongTinLichChieuHeThongRap();
    dispatch(action);

    return () => {};
  }, []);

  const renderListCinema = () => {
    if (arrayCinema.length != 0) {
      return arrayCinema.map((cine, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              dispatch((dispatch) => {
                return dispatch({
                  type: "SET_CINEMA_CHON",
                  cinemaChon: cine.maHeThongRap,
                });
              });
            }}
          >
            {(function () {
              if (cinemaChon == cine.maHeThongRap) {
                return (
                  <a className="a-cinema" className="cinema-chon">
                    <img
                      style={{ width: "50px", padding: "3px" }}
                      src={cine.logo}
                      alt={cine.tenHeThongRap}
                    />
                  </a>
                );
              } else {
                return (
                  <a className="a-cinema">
                    <img
                      style={{ width: "50px", padding: "3px" }}
                      src={cine.logo}
                      alt={cine.tenHeThongRap}
                    />
                  </a>
                );
              }
            })()}
          </li>
        );
      });
    }
    return "";
  };

  const renderLocation = () => {
    const cinema = arrayCinema.find(
      (cumRap) => cumRap.maHeThongRap == cinemaChon
    );
    if (cinema != undefined) {
      return cinema.lstCumRap.map((item, index) => {
        return (
          <li
            style={{ cursor: "pointer" }}
            key={index}
            onClick={() => {
              dispatch((dispatch) => {
                return dispatch({
                  type: "SET_CINEMA_INDEX",
                  cinemaIndex: index,
                });
              });
            }}
          >
            {(function () {
              if (cinemaIndex == index) {
                return (
                  <img
                    src={cinema.logo}
                    className="cinema-chon"
                    style={{ padding: "3px" }}
                  />
                );
              } else {
                return <img src={cinema.logo} style={{ padding: "3px" }} />;
              }
            })()}
            <div className="info-cinema">
              <p>{item.tenCumRap}</p>
              <p style={{ color: "#949494" }}>{item.diaChi}</p>
              <p style={{ color: "red" }}>[Chi tiết]</p>
            </div>
          </li>
        );
      });
    }
    return "";
  };

  const convertIso = (isoFormat) => {
    let date = new Date(isoFormat);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (min < 10) {
      min = "0" + min;
    }

    return {
      ngayChieu: dt + "-" + month + "-" + year,
      suatChieu: hour + ":" + min,
    };
  };

  const convertArrayLichChieu = (arr) => {
    const holder = {};
    arr.forEach((item) => {
      if (holder.hasOwnProperty(item.ngayChieu)) {
        holder[item.ngayChieu].push(item.suatChieu);
      } else {
        holder[item.ngayChieu] = [item.suatChieu];
      }
    });
    const arrOut = [];
    for (let prop in holder) {
      arrOut.push({
        ngayChieu: prop,
        suatChieu: holder[prop],
      });
    }
    return arrOut;
  };

  const renderCalendar = () => {
    const cinema = arrayCinema.find(
      (cumRap) => cumRap.maHeThongRap == cinemaChon
    );
    if (cinema != undefined) {
      return cinema.lstCumRap[cinemaIndex].danhSachPhim.map((movie) => {
        return (
          <li>
            <img
              src={movie.hinhAnh}
              style={{ transform: "translateY(-10%)" }}
            />
            <div className="info-cinema">
              <p style={{ color: "black", fontSize: 15 }}>
                <span style={{ color: "red", fontSize: 15 }}>C18 </span>
                {movie.tenPhim}
              </p>
              <p style={{ color: "black", fontSize: 15 }}>2D Digital</p>
            </div>
            <div className="time">
              {convertArrayLichChieu(
                movie.lstLichChieuTheoPhim
                  .map((element) => element.ngayChieuGioChieu)
                  .map((item) => convertIso(item))
              ).map((ngayChieu) => {
                return (
                  <div>
                    <p>Suất chiếu ngày {ngayChieu.ngayChieu}: </p>
                    {ngayChieu.suatChieu.map((suat, index) => {
                      return (
                        <NavLink to={tenLogin ? "/booking" : "/login"}>
                          <h6 key={index} className="time">
                            {suat}
                          </h6>
                        </NavLink>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </li>
        );
      });
    }
    return "";
  };

  return (
    <div id="group-cinema" className="mt-5">
      <BackgroundCinema />
      <div className="container-cinema">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <ul className="list-cinema">{renderListCinema()}</ul>
            </div>

            <div className="col-5 ">
              <ul className="overflow-auto list-cinema-detail">
                {renderLocation()}
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-cinema-detail">{renderCalendar()}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
