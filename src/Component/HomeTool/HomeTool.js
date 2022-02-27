import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./HomeTool.css";
import RenderCinema from "./ListCinemas";
import RenderDates from "./ListDates";
import RenderMovie from "./ListMovies";
import RenderShowtimes from "./ListShowTime";

export default function HomeTool() {
  const { fullSelect } = useSelector((state) => state.MovieReducer);

  const { tenLogin } = useSelector((state) => state.NguoiDungReducer);

  const isAlert = () => {
    return alert(
      "Vui lòng chọn đầy đủ phim, rạp, ngày, và suất chiếu muốn xem!"
    );
  };
  return (
    <div id="homeTools" className="hideOnMobile">
      <RenderMovie />
      <RenderCinema isDetailPage={false} />
      <RenderDates isDetailPage={false} />
      <RenderShowtimes isDetailPage={false} />

      <div className="smallBlock widthByPercent text-center">
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
