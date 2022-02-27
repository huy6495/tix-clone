import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import { ACCESSTOKEN, DOMAIN, USER_REGISTER } from "../../util/setting";

export const dangKyAction = (userRegister) => {
  const fullUser = {
    username: userRegister.taiKhoan,
    password: userRegister.matKhau,
    email: userRegister.email,
    phone: "0901234567",
  };
  console.log(fullUser);
  return async (dispatch) => {
    try {
      const result1 = await axios({
        url: `${DOMAIN}api/user`,
        method: "POST",
        data: fullUser,
      });
      console.log(result1);
      dispatch({
        type: "XU_LY_DANG_KY_THANH_CONG",
        tenDangKy: result1.data.username,
      });
      localStorage.setItem(USER_REGISTER, JSON.stringify(result1.data));
      // localStorage.setItem(ACCESSTOKEN, result1.data);

      alert("Dang ky thanh cong");
    } catch (errors) {
      console.log(errors.reponse?.data);
    }
  };
};
