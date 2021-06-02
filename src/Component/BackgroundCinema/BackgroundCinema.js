import React from "react";
import imgBackground from "../../assets/icons/back-news.png";

export default function BackgroundCinema() {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${imgBackground})`,
        height: "125px",
        backgroundPosition: "center",
        width: "100vw",
      }}
    ></div>
  );
}
