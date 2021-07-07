import React from "react";
import "./DatVe.css";
import hinhNen from "../../assets/img/Login/bg2.jpeg";
import DanhSachGhe from "../../Component/DanhSachGhe/DanhSachGhe";
import ThongTinDatVe from "../../Component/ThongTinDatVe/ThongTinDatVe";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";

export default function DatVe() {
  return (
    <div>
      <Header />
      <div
        style={{ backgroundImage: "url(" + hinhNen + ")" }}
        className="backroundImg"
      >
        <div className="row" style={{ marginTop: 60 }}>
          <div className="col-8">
            <DanhSachGhe />
          </div>
          <div className="col-4" style={{ marginTop: 70 }}>
            <ThongTinDatVe />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
