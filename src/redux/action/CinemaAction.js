import axios from "axios";
import { convertArrayLichChieuTheoRap } from "../../Helper/converArrayLichChieuTheoRap";
import { DOMAIN } from "../../util/setting";

export const layThongTinLichChieuHeThongRap = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}api/cineplex`,
        method: "GET",
      });
      dispatch({
        type: "SET_ARRAY_CINEMA",
        arrayCinema: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const layThongTinLichChieuTheoRap = (idRap = 9) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        method: "GET",
        url: `${DOMAIN}api/showtime/by-cinema?cinemaId=${idRap}`,
      });
      // console.log(result.data);
      const finalArrayShowtime = convertArrayLichChieuTheoRap(result.data);
      dispatch({
        type: "SET_CINEMA_INDEX",
        cinemaIndex: idRap,
      });
      dispatch({
        type: "SET_SHOWTIME",
        showTimeArray: finalArrayShowtime,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const layLichChieuChonLaiHeThong = (idRap, idHeThong) => {
  return async (dispatch) => {
    await dispatch({
      type: "SET_CINEMA_CHON",
      cinemaChon: idHeThong,
    });
    dispatch(layThongTinLichChieuTheoRap(idRap));
  };
};
