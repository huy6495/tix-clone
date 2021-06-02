import React, { Component } from "react";
import "./HomeTool.css";

const dataDrop = [
  {
    title: "Phim",
    arrayContent: ["Trạng Tí", "Lật Mặt", "Bố Già", "Em chưa mười tám"],
  },
  {
    title: "Rạp",
    arrayContent: [
      "BHD Nguyễn Du",
      "Galaxy Phan Xích Long",
      "CineStar Khánh Hội",
    ],
  },
  {
    title: "Ngày xem",
    arrayContent: ["01/06/2021", "07/06/2021", "02/06/2021", "05/06/2021"],
  },
  {
    title: "Xuất chiếu",
    arrayContent: ["14:00", "10:45", "12:15"],
  },
];

export default class HomeTool extends Component {
  renderDropdown() {
    return dataDrop.map((item) => {
      return (
        <div className="dropdown w30p widthByPercent">
          <div className="dropdown-toggle selectMenu" data-bs-toggle="dropdown">
            {item.title}
          </div>
          <ul className="dropdown-menu">
            {(function a() {
              return item.arrayContent.map((content) => {
                return (
                  <li>
                    <a className="dropdown-item">{content}</a>
                  </li>
                );
              });
            })()}
          </ul>
        </div>
      );
    });
  }

  render() {
    return (
      <div id="homeTools" className="hideOnMobile">
        {this.renderDropdown()}
        <div className="smallBlock widthByPercent">
          <div className="after-btn" />
          <div className="before-btn" />
          <button id="btnBuy" type="button" className="btn btn-primary">
            MUA VÉ NGAY
          </button>
        </div>
      </div>
    );
  }
}
