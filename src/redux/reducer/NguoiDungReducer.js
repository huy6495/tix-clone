let tenDN = null;
if (localStorage.getItem("userLogin")) {
  // console.log(localStorage.getItem("userLogin"));
  let userLogin = JSON.parse(localStorage.getItem("userLogin"));
  tenDN = userLogin.username;
}

const stateDefault = {
  tenLogin: tenDN,
  reDirect: false,
};

export const NguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "XU_LY_DANG_NHAP_THANH_CONG": {
      state.tenLogin = action.tenLogin;
      state.reDirect = true;
      return { ...state };
    }
    case "SET_REDIRECT": {
      state.reDirect = false;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
