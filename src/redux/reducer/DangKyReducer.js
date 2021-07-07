let register = "";
if (localStorage.getItem("userRegister")) {
  let userRegister = JSON.parse(localStorage.getItem("userRegister"));
  register = userRegister.taikhoan;
}

const stateDefault = {
  tenRegister: register,
};

export const DangKyReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "XU_LY_DANG_KY_THANH_CONG": {
      state.tenRegister = action.tenRegister;
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
