import React, { useEffect } from "react";
import "./Detail.css";

import { useDispatch, useSelector } from "react-redux";
import CirclePercent from "../../Component/CirclePercent/CirclePercent";
import PlayButton from "../../Component/PlayButton/PlayButton";
import { layChiTietPhim } from "../../redux/action/MovieAction";
import Loading from "../Loading/Loading";
import HomeToolForDetail from "../HomeToolForDetail/HomeToolForDetail";
import { DOMAIN } from "../../util/setting";

export default function Detail(props) {
  const { detailMovie, isLoadingDetail } = useSelector(
    (state) => state.MovieReducer
  );
  const { id } = props;

  console.log(DOMAIN + detailMovie.hinhAnh);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layChiTietPhim(id));
    return () => {};
  }, []);

  const renderCardChiTiet = () => {
    const percent = Math.floor(detailMovie.danhGia * 10 - 8);
    return (
      <section className="detail-movie">
        <div
          className="detail-overlay"
          style={{ backgroundImage: `url(${DOMAIN + detailMovie.hinhAnh})` }}
        ></div>
        <div className="container detail-card">
          <div className="card">
            <div className="row g-0" style={{ maxHeight: "370px" }}>
              <div className="col-md-3" style={{ height: "100%" }}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    src={DOMAIN + detailMovie.hinhAnh}
                    alt="latMat"
                    style={{ width: "100%", height: "100%" }}
                  />

                  <PlayButton
                    top="48%"
                    padding="0% 5%"
                    url={detailMovie.trailer}
                  />
                </div>
              </div>
              <div className="col-md-6 detail-content d-flex justify-content-center overflow-auto c">
                <div
                  className="card-body content-detail"
                  style={{ padding: "50px 50px" }}
                >
                  <h3
                    className="card-title text-center"
                    style={{ color: "#fa5238" }}
                  >
                    {detailMovie.tenPhim}
                  </h3>
                  <h5 className="text-center">Thông tin phim:</h5>
                  <p className="card-text">{detailMovie.moTa}</p>
                  <div className="info card-body mt-3">
                    <small>Phạm vi: </small>
                    <span className="nameFilm">
                      <span>C16</span>
                    </span>
                    <br />
                    <span className="timeFilm">Thời lượng: 100p</span>
                  </div>
                </div>
                <HomeToolForDetail maPhim={id} />
              </div>
              <div className="col-md-3 score-detail">
                <div className="row">
                  <div className="col-md-12 mt-5 d-flex justify-content-center ">
                    <CirclePercent percent={percent} />
                  </div>
                  <div className="col-12 text-center">
                    <small>Đánh giá: {Math.floor(percent / 10)}/10</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  return (
    <div>
      {isLoadingDetail ? <Loading size="400px"></Loading> : renderCardChiTiet()}
    </div>
  );
}
