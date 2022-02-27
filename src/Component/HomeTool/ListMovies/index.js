import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { convertArrayMovie } from "../../../Helper/convertArrayMovies";
import {
  layDanhSachPhim,
  layChiTietPhimHomeTool,
} from "../../../redux/action/MovieAction";

export default function RenderMovie(prop) {
  const { arrayMovie } = useSelector((state) => state.MovieReducer);
  // console.log(arrayMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = layDanhSachPhim();
    dispatch(action);
    return () => {};
  }, []);

  return (
    <select
      onChange={(e) => {
        dispatch({ type: "RESET_HOMETOOL" });
        dispatch(layChiTietPhimHomeTool(parseInt(e.target.value)));
      }}
      className="form-select menu w20p widthByPercent"
    >
      <option value="0">Phim</option>
      {convertArrayMovie(arrayMovie).map((movie, index) => {
        return (
          <option key={index} value={movie.maPhim}>
            {movie.tenPhim}
          </option>
        );
      })}
    </select>
  );
}
