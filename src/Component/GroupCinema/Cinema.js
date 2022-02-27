import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  layLichChieuChonLaiHeThong,
  layThongTinLichChieuHeThongRap,
  layThongTinLichChieuTheoRap,
} from "../../redux/action/CinemaAction";
import { NavLink } from "react-router-dom";
import "./Cinema.css";

//image import
import BackgroundCinema from "../BackgroundCinema/BackgroundCinema";
import { DOMAIN } from "../../util/setting";

export default function Cinema() {
  const { tenLogin } = useSelector((state) => state.NguoiDungReducer);
  const { arrayCinema, cinemaChon, cinemaIndex, cinemaShowTime } = useSelector(
    (state) => state.CinemaReducer
  );

  const dispatch = useDispatch();

  // console.log(arrayCinema);

  useEffect(() => {
    const action = layThongTinLichChieuHeThongRap();
    const action2 = layThongTinLichChieuTheoRap();
    dispatch(action);
    dispatch(action2);

    return () => {};
  }, []);

  const renderListCinema = () => {
    if (arrayCinema.length !== 0) {
      return arrayCinema.map((cine, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              dispatch((dispatch) => {
                return dispatch(
                  layLichChieuChonLaiHeThong(cine.Cinemas[0].id, cine.id)
                );
              });
            }}
          >
            {(function () {
              if (cinemaChon === cine.id) {
                return (
                  <a className="a-cinema" className="cinema-chon">
                    <img
                      style={{ width: "50px", padding: "3px" }}
                      src={DOMAIN + cine.logo}
                      alt={cine.tenHeThongRap}
                    />
                  </a>
                );
              } else {
                return (
                  <a className="a-cinema">
                    <img
                      style={{ width: "50px", padding: "3px" }}
                      src={DOMAIN + cine.logo}
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

  // console.log(cinemaChon);
  // console.log(cinemaIndex);
  const renderLocation = () => {
    const cinema = arrayCinema.find((cumRap) => cumRap.id === cinemaChon);
    if (cinema !== undefined) {
      return cinema.Cinemas.map((item, index) => {
        return (
          <li
            style={{ cursor: "pointer" }}
            key={index}
            onClick={() => {
              dispatch((dispatch) => {
                return dispatch(layThongTinLichChieuTheoRap(item.id));
              });
            }}
          >
            {(function () {
              if (cinemaIndex === item.id) {
                return (
                  <img
                    src={DOMAIN + cinema.logo}
                    className="cinema-chon"
                    style={{ padding: "3px" }}
                  />
                );
              } else {
                return (
                  <img src={DOMAIN + cinema.logo} style={{ padding: "3px" }} />
                );
              }
            })()}
            <div className="info-cinema">
              <p>{item.tenRap}</p>
              <p style={{ color: "#949494" }}>{item.diaChi}</p>
              <p style={{ color: "red" }}>[Chi tiết]</p>
            </div>
          </li>
        );
      });
    }
    return "";
  };

  const renderCalendar = () => {
    return cinemaShowTime.map((movie, index) => {
      return (
        <li key={index}>
          <div className="py-2 border-bottom">
            <img
              src={DOMAIN + movie.hinhAnh}
              style={{ transform: "translateY(-10%)" }}
            />
            <div className="info-cinema">
              <p style={{ color: "black", fontSize: 15 }}>
                <span style={{ color: "red", fontSize: 15 }}>C18 </span>
                {movie.tenPhim}
              </p>
              <p style={{ color: "black", fontSize: 15 }}>2D Digital</p>
            </div>
          </div>
          <div className="time py-2">
            {movie.arrayLichChieu.map((ngayChieu, index) => {
              return (
                <div key={index}>
                  <p>Suất chiếu ngày {ngayChieu.showDate}: </p>
                  {ngayChieu.suatChieu.map((suat, index) => {
                    return (
                      <NavLink
                        key={index}
                        to={tenLogin ? "/booking" : "/login"}
                      >
                        <h6 className="time">{suat}</h6>
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
  };

  return (
    <div id="groupCinema" className="mt-5">
      <BackgroundCinema />
      <div className="container-cinema">
        <div className="container">
          <div className="row">
            <div className="col-md-1 col-2">
              <ul className="list-cinema">{renderListCinema()}</ul>
            </div>

            <div className="col-md-5 col-10">
              <ul className="overflow-auto list-cinema-detail">
                {renderLocation()}
              </ul>
            </div>

            <div className="col-md-5 col-12 list-final">
              <ul className="list-cinema-detail ">{renderCalendar()}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
