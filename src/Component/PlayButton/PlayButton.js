import React from "react";
import { useDispatch } from "react-redux";
import "./PlayButton.css";

export default function PlayButton(props) {
  const { top, padding, url } = props;

  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch({
      type: "SET_URL_MODAL",
      url: url,
    });
  };

  return (
    <div onClick={handleModal}>
      <svg
        style={{ top: top, padding: padding }}
        id="play"
        viewBox="0 0 163 163"
        x="0px"
        y="0px"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        <g fill="none">
          <g transform="translate(2.000000, 2.000000)" strokeWidth="4">
            <path
              d="M10,80 C10,118.107648 40.8923523,149 79,149 L79,149 C117.107648,149 148,118.107648 148,80 C148,41.8923523 117.107648,11 79,11"
              id="lineOne"
              stroke="#fa5238"
            ></path>
            <path
              d="M105.9,74.4158594 L67.2,44.2158594 C63.5,41.3158594 58,43.9158594 58,48.7158594 L58,109.015859 C58,113.715859 63.4,116.415859 67.2,113.515859 L105.9,83.3158594 C108.8,81.1158594 108.8,76.6158594 105.9,74.4158594 L105.9,74.4158594 Z"
              id="triangle"
              stroke="#fa5238"
            ></path>
            <path
              d="M159,79.5 C159,35.5933624 123.406638,0 79.5,0 C35.5933624,0 0,35.5933624 0,79.5 C0,123.406638 35.5933624,159 79.5,159 L79.5,159"
              id="lineTwo"
              stroke="#fa5238"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
}