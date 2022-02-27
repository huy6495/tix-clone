import React from "react";
import "./News.css";

import BackgroundCinema from "../BackgroundCinema/BackgroundCinema";
import ContentNews from "../ContentNews/ContentNews";

export default function News() {
  return (
    <div id="newsTotal">
      <BackgroundCinema
        style={{ opacity: 0.4, height: "150px" }}
      ></BackgroundCinema>
      <div className="col-xs-12 block mainMaxWidth">
        <ul className="nav nav-tabs navCenter my-5">
          <li className="nav-item">
            <button
              className="nav-link active news-title"
              data-bs-toggle="tab"
              data-bs-target="#news"
            >
              Điện ảnh 24h
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link news-title"
              data-bs-toggle="tab"
              data-bs-target="#review"
            >
              Review
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link news-title"
              data-bs-toggle="tab"
              data-bs-target="#review"
            >
              Khuyễn mãi
            </button>
          </li>
        </ul>
        <div className="tab-content container">
          <div className="tab-pane fade show active" id="news">
            <ContentNews />
          </div>
          <div className="tab-pane fade" id="review">
            <ContentNews />
          </div>
        </div>
      </div>
    </div>
  );
}
