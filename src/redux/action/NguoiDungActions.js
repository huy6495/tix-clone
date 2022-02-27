import axios from "axios";
import { ACCESSTOKEN, DOMAIN, USER_LOGIN } from "../../util/setting";

export const dangNhapAction = (userLogin) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}api/auth/sign-in`,
        method: "POST",
        data: userLogin,
      });
      console.log("results", result.data.taiKhoan);
      dispatch({
        type: "XU_LY_DANG_NHAP_THANH_CONG",
        tenLogin: result.data.taiKhoan.username,
      });
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.taiKhoan));
      localStorage.setItem(ACCESSTOKEN, result.data.taiKhoan.token);

      alert("Dang nhap thanh cong");
    } catch (errors) {
      console.log("errors", errors.reponse?.data);
    }
  };
};
