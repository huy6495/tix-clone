import React from "react";
import SlickCarousel from "../Slick-Carousel/SlickCarousel";
import "./FilmBlock.css";
import { layDanhSachPhim } from "../Slick-Carousel/SlickCarousel";

export default function FilmBlock() {
  return (
    <div className="container text-center">
      <div className="col-xs-12 block mainMaxWidth" id="homeMovies">
        <ul className="nav nav-tabs navCenter">
          <li className="nav-item">
            <button
              className="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#home-movie"
            >
              Đang chiếu
            </button>
          </li>
          <li className="nav-item" style={{ marginLeft: 15 }}>
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#upcoming-movie"
            >
              Sắp chiếu
            </button>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="home-movie">
            <SlickCarousel maNhom="GP01" />
          </div>
          <div className="tab-pane fade" id="upcoming-movie">
            <SlickCarousel maNhom="GP01" />
          </div>
        </div>
      </div>
    </div>
  );
}
