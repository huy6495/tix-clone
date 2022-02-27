import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const headMenu = [
  { name: "Lịch chiếu", toId: "homeMovies" },
  { name: "Cụm rạp", toId: "groupCinema" },
  { name: "Tin tức", toId: "newsTotal" },
];

export default function HeadMenu(props) {
  const { homePath } = props;
  return homePath
    ? headMenu.map((item, index) => (
        <Link
          key={index}
          to={item.toId}
          spy={true}
          smooth={true}
          duration={500}
          className="active"
        >
          {item.name}
        </Link>
      ))
    : headMenu.map((item, index) => (
        <NavLink key={index} to="/home" className="active">
          {item.name}
        </NavLink>
      ));
}
