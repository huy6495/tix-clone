import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { layChiTietPhimHomeTool } from "../../redux/action/MovieAction";
import RenderCinema from "../HomeTool/ListCinemas";
import RenderDates from "../HomeTool/ListDates";
import RenderShowtimes from "../HomeTool/ListShowTime";
import "./HomeToolForDetail.css";

export default function HomeToolForDetail(props) {
  const { fullSelect } = useSelector((state) => state.MovieReducer);
  const { tenLogin } = useSelector((state) => state.NguoiDungReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layChiTietPhimHomeTool(props.maPhim);
    dispatch(action);
    return () => {};
  }, []);

  const isAlert = () => {
    return alert("Vui lòng chọn đầy đủ rạp, ngày, và suất chiếu muốn xem!");
  };

  // console.log(objectXuatChieu.suatChieu);
  //rfc return JSX
  return (
    <div className="homeToolsForDetail">
      <RenderCinema isDetailPage={true} />
      <RenderDates isDetailPage={true} />
      <RenderShowtimes isDetailPage={true} />

      <div className="smallBlock widthByPercent">
        <div className="after-btn" />
        <div className="before-btn" />
        {fullSelect ? (
          <NavLink to={tenLogin ? "/booking" : "/login"}>
            <button id="btnBuy" type="button" className="btn btn-primary">
              MUA VÉ NGAY
            </button>
          </NavLink>
        ) : (
          <>
            <button
              id="btnBuy"
              type="button"
              className="btn btn-primary"
              onClick={isAlert}
            >
              MUA VÉ NGAY
            </button>
          </>
        )}
      </div>
    </div>
  );
}
