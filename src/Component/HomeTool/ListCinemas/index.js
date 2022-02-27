import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDateHomeTool } from "../../../redux/action/MovieAction";
import RenderListCinema from "./renderListCinema";

export default function RenderCinema(prop) {
  const { isDetailPage } = prop;

  const { detailMovieHomeTool, reSelectMovie } = useSelector(
    (state) => state.MovieReducer
  );
  const dispatch = useDispatch();

  // console.log(detailMovieHomeTool);

  const dateHomeTool = (e) => {
    return detailMovieHomeTool.find((item) => item.tenRap === e.target.value);
  };

  return (
    <select
      onChange={(e) => {
        // console.log(e.target.value);
        // console.log(dateHomeTool(e));
        dispatch(setDateHomeTool(dateHomeTool(e)));
      }}
      className={`form-select menu ${
        isDetailPage ? "w30p" : "w20p"
      } widthByPercent`}
    >
      <option value="0">Rạp</option>
      {(detailMovieHomeTool.length == 0) & !reSelectMovie ? (
        <option disabled>- Vui lòng chọn phim</option>
      ) : (
        <RenderListCinema />
      )}
    </select>
  );
}
