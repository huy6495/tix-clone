import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setXuatChieuHomeTool } from "../../../redux/action/MovieAction";

export default function RenderDates(props) {
  const { isDetailPage } = props;
  const { objectLichChieu } = useSelector((state) => state.MovieReducer);
  const dispatch = useDispatch();

  const renderReset = () => {
    return (
      <>
        <option value="0">Ngày chiếu</option>
        <option disabled>- Vui lòng chọn rạp</option>;
      </>
    );
  };

  const renderList = () => {
    let content = [<option value="0">Ngày chiếu</option>];

    objectLichChieu.arrayLichChieu.map((ob, index) => {
      content.push(
        <option key={index} value={ob.showDate}>
          {ob.showDate}
        </option>
      );
    });
    return content;
  };

  const xuatChieuHomeTool = (e) => {
    return objectLichChieu.arrayLichChieu.find((item) => {
      return item.showDate === e.target.value;
    });
  };

  return (
    <select
      onChange={(e) => {
        dispatch({ type: "RESET_SHOWTIME" });
        dispatch(setXuatChieuHomeTool(xuatChieuHomeTool(e)));
      }}
      className={`form-select menu ${
        isDetailPage ? "w30p" : "w20p"
      } widthByPercent`}
    >
      {objectLichChieu.arrayLichChieu == undefined
        ? renderReset()
        : renderList()}
    </select>
  );
}
