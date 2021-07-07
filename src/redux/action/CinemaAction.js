import axios from "axios";

export const layThongTinLichChieuHeThongRap = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP02`,
        method: "GET",
      });
      // console.log(result.data);
      dispatch({
        type: "SET_ARRAY_CINEMA",
        arrayCinema: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
