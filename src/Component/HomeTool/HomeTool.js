import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  layChiTietPhim,
  layChiTietPhimHomeTool,
  layDanhSachPhim,
  setDateHomeTool,
  setXuatChieuHomeTool,
} from "../../redux/action/MovieAction";
import "./HomeTool.css";

export default function HomeTool() {
  const {
    arrayMovie,
    detailMovieHomeTool,
    objectLichChieu,
    objectXuatChieu,
    reSelectMovie,
  } = useSelector((state) => state.MovieReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layDanhSachPhim();
    dispatch(action);
    return () => {};
  }, []);

  const arrayMovieConvert = (list) => {
    const newArray = [];
    list.map((movie) => {
      newArray.push({ maPhim: movie.maPhim, tenPhim: movie.tenPhim });
    });
    return newArray;
  };

  const renderMovie = () => {
    return (
      <select
        onChange={(e) => {
          dispatch(layChiTietPhimHomeTool(e.target.value));
        }}
        className="form-select menu w30p widthByPercent"
      >
        <option value="0">Phim</option>
        {arrayMovieConvert(arrayMovie).map((movie, index) => {
          return (
            <option key={index} value={movie.maPhim}>
              {movie.tenPhim}
            </option>
          );
        })}
      </select>
    );
  };

  const arrayLichChieuConvert = (detailLichChieuPhim) => {
    const holder1 = [];
    if (detailLichChieuPhim !== undefined) {
      detailLichChieuPhim.map((item) => {
        holder1.push({
          tenCumRap: item.thongTinRap.tenCumRap,
          ngayChieu: item.ngayChieuGioChieu,
        });
      });
    }
    const holder2 = {};
    holder1.forEach((item) => {
      if (holder2.hasOwnProperty(item.tenCumRap)) {
        holder2[item.tenCumRap].push(item.ngayChieu);
      } else {
        holder2[item.tenCumRap] = [item.ngayChieu];
      }
    });
    const holder3 = [];
    for (let prop in holder2) {
      holder3.push({
        tenCumRap: prop,
        ngayGioChieu: convertArrayNgayChieu(
          (function () {
            const holder5 = [];
            holder2[prop].map((i) => {
              holder5.push(convertIso(i));
            });
            return holder5;
          })()
        ),
      });
    }
    return holder3;
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

  const convertArrayNgayChieu = (arrayObjectNgayChieu) => {
    const holder4 = {};
    arrayObjectNgayChieu.forEach((lich) => {
      if (holder4.hasOwnProperty(lich.ngayChieu)) {
        holder4[lich.ngayChieu].push(lich.suatChieu);
      } else {
        holder4[lich.ngayChieu] = [lich.suatChieu];
      }
    });
    const arrayFinal = [];
    for (let prop in holder4) {
      arrayFinal.push({ ngayChieu: prop, suatChieu: holder4[prop] });
    }
    return arrayFinal;
  };

  const renderCinema = () => {
    return (
      <select
        onChange={(e) => {
          dispatch({ type: "SET_CINEMA_HOME_TOOL" });

          const action = setDateHomeTool(
            (function () {
              return arrayLichChieuConvert(detailMovieHomeTool.lichChieu).find(
                (item) => {
                  return (item.tenCumRap = e.target.value);
                }
              );
            })()
          );

          dispatch(action);
        }}
        className="form-select menu w30p widthByPercent"
      >
        <option value="0">Rạp</option>
        {(function () {
          if (detailMovieHomeTool.maPhim == undefined) {
            return <option disabled>- Vui lòng chọn phim</option>;
          } else if (reSelectMovie === true) {
            return <option disabled>- Chờ xíu nha...</option>;
          } else {
            return arrayLichChieuConvert(detailMovieHomeTool.lichChieu).map(
              (lichChieu) => {
                return (
                  <option value={lichChieu.tenCumRap}>
                    {lichChieu.tenCumRap}
                  </option>
                );
              }
            );
          }
        })()}
      </select>
    );
  };

  const renderNgayChieu = () => {
    return (
      <select
        onChange={(e) => {
          const action = setXuatChieuHomeTool(
            (function () {
              return objectLichChieu.ngayGioChieu.find((item) => {
                return (item.ngayChieu = e.target.value);
              });
            })()
          );
          dispatch(action);
        }}
        className="form-select menu w30p widthByPercent"
      >
        <option value="0">Ngày chiếu</option>
        {(function () {
          if (objectLichChieu.ngayGioChieu == undefined) {
            return <option disabled>- Vui lòng chọn phim</option>;
          } else {
            return objectLichChieu.ngayGioChieu.map((ob, index) => {
              return (
                <option key={index} value={ob.ngayChieu}>
                  {ob.ngayChieu}
                </option>
              );
            });
          }
        })()}
      </select>
    );
  };

  const renderSuatChieu = () => {
    return (
      <select className="form-select menu w30p widthByPercent">
        <option value="0">Suất chiếu</option>
        {(function () {
          if (objectXuatChieu.suatChieu == undefined) {
            return <option disabled>- Vui lòng chọn phim</option>;
          } else {
            return objectXuatChieu.suatChieu.map((ob, index) => {
              return (
                <option key={index} value={ob}>
                  {ob}
                </option>
              );
            });
          }
        })()}
      </select>
    );
  };

  //rfc return JSX
  return (
    <div id="homeTools" className="hideOnMobile">
      {renderMovie()}
      {renderCinema()}
      {renderNgayChieu()}
      {renderSuatChieu()}

      <div className="smallBlock widthByPercent">
        <div className="after-btn" />
        <div className="before-btn" />
        <button id="btnBuy" type="button" className="btn btn-primary">
          MUA VÉ NGAY
        </button>
      </div>
    </div>
  );
}
