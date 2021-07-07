import axios from "axios";
import { history } from "../../App";
import { ACCESSTOKEN, USER_LOGIN } from "../../util/setting";

export const dangNhapAction = (userLogin) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: userLogin,
      });
      console.log("results", result);
      dispatch({
        type: "XU_LY_DANG_NHAP_THANH_CONG",
        tenLogin: result.data.taiKhoan,
      });
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
      localStorage.setItem(ACCESSTOKEN, result.data);

      alert("Dang nhap thanh cong");
      history.push("/home");
    } catch (errors) {
      console.log("errors", errors.reponse?.data);
    }
  };
};
