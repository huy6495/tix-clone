import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./DanhSachGhe.css";
import dataGhe from "../../assets/DataGhe/danhSachGhe.json";

export default function DanhSachGhe() {
  function renderDanhSachGhe() {
    return dataGhe.map((hangGhe, index) => {
      return (
        <div key={index}>
          <div className="rowNumber" style={{ display: "inline-block" }}>
            {hangGhe.hang}
          </div>
          {renderHangGhe(hangGhe.danhSachGhe, hangGhe.hang)}
        </div>
      );
    });
  }

  const { danhSachGheDangDat } = useSelector((state) => state.DatVeReducer);

  const dispatch = useDispatch();
  const chonGhe = (ghe) => {
    dispatch({
      type: "CHON_GHE",
      ghe: ghe,
    });
  };

  function renderHangGhe(danhSachGhe, hangGhe) {
    return danhSachGhe.map((ghe, index) => {
      let classGheDangDat = "";
      let indexGhe = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.soGhe === ghe.soGhe
      );
      if (indexGhe != -1) {
        classGheDangDat = "gheDangChon";
      }
      let classGheDuocChon = ghe.daDat ? "gheDuocChon" : "";
      if (hangGhe !== "") {
        return (
          <button
            onClick={() => {
              chonGhe({ soGhe: ghe.soGhe, gia: ghe.gia });
            }}
            key={index}
            className={`ghe ${classGheDuocChon} ${classGheDangDat}`}
          >
            {ghe.soGhe}
          </button>
        );
      }
      return (
        <button key={index} className={`rowNumber ${classGheDuocChon}`}>
          {ghe.soGhe}
        </button>
      );
    });
  }

  return (
    <div className="row">
      <div className="col-12">
        <h2 className="heading">Đặt Ghế Online</h2>
        <hr />
      </div>
      <div className="screen text-center">SCREEN</div>
      {renderDanhSachGhe()}
    </div>
  );
}
