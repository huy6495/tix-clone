let tenDN = null;
if (localStorage.getItem("userLogin")) {
  let userLogin = JSON.parse(localStorage.getItem("userLogin"));
  tenDN = userLogin.taiKhoan;
}

const stateDefault = {
  tenLogin: tenDN,
};

export const NguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "XU_LY_DANG_NHAP_THANH_CONG": {
      state.tenLogin = action.tenLogin;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
