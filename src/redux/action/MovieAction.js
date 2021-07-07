import axios from "axios";

//All actions of app will be expressed here, with reduxThunk, components can dispatch these function to reducer

//This function return to a async await function, then a promise object, if it excutes success, a object will be sent to reducer,
//Thunk is a middlewere what help to convert a function to a object and dispatch a object, 1 function will be managed in a js file.
export const layDanhSachPhim = (maNhom = "GP02") => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
        method: "GET",
      });

      dispatch({
        type: "SET_ARRAY_MOVIE",
        arrayMovie: result.data,
      }).then(dispatch({ type: "HIDE_LOADING_SLIDER" }));
    } catch (err) {
      console.log(err);
    }
  };
};

//Get detail movie
export const layChiTietPhim = (maPhim = "1314") => {
  return async (dispatch) => {
    try {
      const result = await axios({
        method: "GET",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
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
export const layChiTietPhimHomeTool = (maPhim = "1314") => {
  return async (dispatch) => {
    try {
      const result = await axios({
        method: "GET",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
      });
      dispatch({
        type: "SET_DETAIL_MOVIE_HOMETOOL",
        detailMovieHomeTool: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const setDateHomeTool = (value) => {
  return (dispatch) => {
    dispatch({
      type: "SET_DATE_MOVIE_HOMETOOL",
      objectLichChieu: value,
    });
  };
};

export const setXuatChieuHomeTool = (value) => {
  return (dispatch) => {
    dispatch({
      type: "SET_XUATCHIEU_MOVIE_HOMETOOL",
      objectXuatChieu: value,
    });
  };
};
