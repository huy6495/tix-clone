const stateDefault = {
  danhSachGheDangDat: [{ soGhe: "A1", gia: 75000 }],
};

export const DatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_GHE": {
      const index = state.danhSachGheDangDat.findIndex(
        (ghe) => ghe.soGhe == action.ghe.soGhe
      );
      if (index == -1) {
        state.danhSachGheDangDat.push(action.ghe);
      } else {
        state.danhSachGheDangDat.splice(index, 1);
      }
      return { ...state };
    }
    case "XOA_GHE": {
      const index = state.danhSachGheDangDat.findIndex(
        (ghe) => ghe.soGhe == action.soGhe
      );
      if (index != -1) {
        state.danhSachGheDangDat.splice(index, 1);
      }
      return { ...state };
    }
  }
  return { ...state };
};
