import React from "react";
import { useSelector } from "react-redux";

export default function RenderListCinema() {
  const { detailMovieHomeTool, reSelectMovie } = useSelector(
    (state) => state.MovieReducer
  );

  return (
    <>
      {reSelectMovie ? (
        <option disabled>- Chờ xíu nha...</option>
      ) : (
        detailMovieHomeTool.map((lichChieu, index) => {
          return (
            <option key={index} value={lichChieu.tenRap}>
              {lichChieu.tenRap}
            </option>
          );
        })
      )}
    </>
  );
}
