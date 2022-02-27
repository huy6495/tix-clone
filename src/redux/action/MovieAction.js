import axios from "axios";
import { convertArrayLichChieu } from "../../Helper/converArrayLichChieu";
import { convertArrayNgayChieu } from "../../Helper/convertArrayNgayChieu";
import { DOMAIN } from "../../util/setting";

//All actions of app will be expressed here, with reduxThunk, components can dispatch these function to reducer

//This function return to a async await function, then a promise object, if it excutes success, a object will be sent to reducer,
//Thunk is a middlewere what help to convert a function to a object and dispatch a object, 1 function will be managed in a js file.
export const layDanhSachPhim = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        method: "GET",
        url: `${DOMAIN}api/movie`,
      });

      await dispatch({
        type: "SET_ARRAY_MOVIE",
        arrayMovie: result.data,
      });
      // console.log(result.data);
      dispatch({ type: "HIDE_LOADING_SLIDER" });
    } catch (err) {
      console.log(err);
    }
  };
};

//Get detail movie
export const layChiTietPhim = (maPhim = 1314) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        method: "GET",
        url: `${DOMAIN}api/movie/${maPhim}`,
      });

      dispatch({
        type: "SET_DETAIL_MOVIE",
        detailMovie: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

//HomeTool movie set
export const layChiTietPhimHomeTool = (maPhim = 1314) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        method: "GET",
        url: `${DOMAIN}api/showtime/by-movie?movieId=${maPhim}`,
      });
      const lichChieuConverted = convertArrayLichChieu(result.data);
      dispatch({
        type: "SET_LICH_CHIEU_DETAIL_MOVIE_HOMETOOL",
        lichChieuDetailMovieHomeTool: lichChieuConverted,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const setDateHomeTool = (value) => {
  // console.log(value);
  return async (dispatch) => {
    await dispatch({ type: "RESET_DATES" });
    const lichChieu = convertArrayNgayChieu(value.arrayLichChieu);
    dispatch({
      type: "SET_DATE_MOVIE_HOMETOOL",
      objectLichChieu: { tenRap: value.tenRap, arrayLichChieu: lichChieu },
    });
  };
};

export const setXuatChieuHomeTool = (value) => {
  // console.log(value);
  return async (dispatch) => {
    await dispatch({ type: "RESET_SHOWTIME" });

    dispatch({
      type: "SET_XUATCHIEU_MOVIE_HOMETOOL",
      objectXuatChieu: value,
    });
  };
};
