let register = "";
if (localStorage.getItem("userRegister")) {
  let userRegister = JSON.parse(localStorage.getItem("userRegister"));
  register = userRegister.taikhoan;
}

const stateDefault = {
  tenRegister: register,
  reDirectDangKi: false,
};

export const DangKyReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "XU_LY_DANG_KY_THANH_CONG": {
      state.tenRegister = action.tenRegister;
      state.reDirectDangKi = true;
      return { ...state };
    }
    case "SET_REDIRECT_DANGKI": {
      state.reDirectDangKi = false;
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
