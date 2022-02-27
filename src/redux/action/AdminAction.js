import axios from "axios";
import { DOMAIN } from "../../util/setting";

export const layDanhSachNguoiDung = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}api/user`,
        method: "GET",
      });
      dispatch({
        type: "SET_ARRAY_USERS",
        arrayUsers: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
