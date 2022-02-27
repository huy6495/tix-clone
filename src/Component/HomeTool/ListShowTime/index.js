import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RenderShowtimes(props) {
  const { isDetailPage } = props;
  const { objectXuatChieu } = useSelector((state) => state.MovieReducer);
  const dispatch = useDispatch();

  const renderReset = () => {
    return (
      <>
        <option value="0">Suất chiếu</option>
        <option disabled>- Vui lòng chọn ngày</option>;
      </>
    );
  };

  const renderList = () => {
    let content = [<option value="0">Suất chiếu</option>];

    objectXuatChieu.suatChieu.forEach((ob, index) => {
      content.push(
        <option key={index} value={ob}>
          {ob}
        </option>
      );
    });

    return content;
  };

  const xuatVe = (e) => {
    // console.log(e.target.value);
    if (e.target.value !== "0") {
      return dispatch({ type: "FULL_SELECT" });
    }
    return;
  };

  return (
    <select
      onChange={(e) => {
        xuatVe(e);
      }}
      className={`form-select menu ${
        isDetailPage ? "w30p" : "w20p"
      } widthByPercent`}
    >
      {objectXuatChieu.suatChieu == undefined ? renderReset() : renderList()}
    </select>
  );
}
