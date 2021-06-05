import React from "react";
import { useState } from "react";

import "./Cinema.css";

//image import
import imgLatMat from "../../assets/img/contentFilm/lat-mat-48h-16176188609123_215x318.png";
import imgThienThan from "../../assets/img/contentFilm/thien-than-ho-menh-16157907251398_215x318.jpeg";
import BackgroundCinema from "../BackgroundCinema/BackgroundCinema";

//import logo of cinema
import BHD from "../../assets/img/bhd.png";
import Beta from "../../assets/img/beta.png";
import Cine from "../../assets/img/cinestar.png";
import Ddc from "../../assets/img/ddc.png";
import Dc from "../../assets/img/dc.jpeg";
import MegaS from "../../assets/img/megaS.png";
import Lotte from "../../assets/img/lotte.png";

const arrCine = [
  { name: "BHD", img: BHD, location: 5, calendar: imgLatMat },
  { name: "Beta", img: Beta, location: 3, calendar: imgThienThan },
  { name: "Cine", img: Cine, location: 1, calendar: imgLatMat },
  { name: "DDC", img: Ddc, location: 3, calendar: imgLatMat },
  { name: "DC", img: Dc, location: 4, calendar: imgThienThan },
  { name: "MegaS", img: MegaS, location: 2, calendar: imgThienThan },
  { name: "Lotte", img: Lotte, location: 6, calendar: imgLatMat },
];

export default function Cinema() {
  const [cinema, setCinema] = useState({
    name: "BHD",
    location: 5,
    calendar: imgLatMat,
  });

  const renderListCinema = () => {
    return arrCine.map((cine, index) => {
      return (
        <li
          key={index}
          onClick={() => {
            setCinema({
              name: cine.name,
              location: cine.location,
              calendar: cine.calendar,
            });
          }}
        >
          <a className="a-cinema">
            <img style={{ width: "50px" }} src={cine.img} alt={cine.name} />
          </a>
        </li>
      );
    });
  };

  const renderLocation = () => {
    let content = [];
    for (let i = 0; i < cinema.location; i++) {
      content.push(
        <li
          onClick={() => {
            setCinema({
              name: cinema.name,
              location: cinema.location,
              calendar: cinema.calendar,
            });
          }}
        >
          <img src={arrCine.find((cine) => cine.name === cinema.name).img} />
          <div className="info-cinema">
            <p>
              BHD Start
              <span style={{ color: "black" }}> - Bitexco</span>
            </p>
            <p style={{ color: "#949494" }}>
              L3-Bitexco Icon 68, 2 Hải Triều, Q.1
            </p>
            <p style={{ color: "red" }}>[Chi tiết]</p>
          </div>
        </li>
      );
    }
    return content;
  };

  const renderCalendar = () => {
    let content = [];
    for (let i = 0; i < 4; i++) {
      content.push(
        <li>
          <img
            src={cinema.calendar}
            style={{ transform: "translateY(-10%)" }}
          />
          <div className="info-cinema">
            <p style={{ color: "black", fontSize: 15 }}>
              <span style={{ color: "red", fontSize: 15 }}>C18 </span>
              Lật mặt
            </p>
            <p style={{ color: "black", fontSize: 15 }}>2D Digital</p>
          </div>
          <div className="time">
            <h6 className="time">12:50</h6>
            <h6 className="time">06:50</h6>
            <h6 className="time">08:10</h6>
          </div>
        </li>
      );
    }
    return content;
  };

  return (
    <div id="group-cinema" className="mt-5">
      <BackgroundCinema />
      <div className="container-cinema">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <ul className="list-cinema">{renderListCinema()}</ul>
            </div>

            <div className="col-5">
              <ul className="list-cinema-detail">{renderLocation()}</ul>
            </div>
            <div className="col-6">
              <ul className="list-cinema-detail">{renderCalendar()}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
