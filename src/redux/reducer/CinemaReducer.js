const initialState = {
  arrayCinema: [],
  cinemaChon: "BHDStar",
  cinemaIndex: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ARRAY_CINEMA":
      return { ...state, arrayCinema: action.arrayCinema };
    case "SET_CINEMA_CHON":
      return { ...state, cinemaChon: action.cinemaChon, cinemaIndex: 0 };
    case "SET_CINEMA_INDEX": {
      return { ...state, cinemaIndex: action.cinemaIndex };
    }
    default:
      return state;
  }
};
