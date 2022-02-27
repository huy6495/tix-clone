const initialState = {
  arrayCinema: [],
  cinemaChon: 11,
  cinemaIndex: 9,
  cinemaShowTime: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ARRAY_CINEMA":
      return { ...state, arrayCinema: action.arrayCinema };
    case "SET_CINEMA_CHON":
      return { ...state, cinemaChon: action.cinemaChon };
    case "SET_CINEMA_INDEX": {
      return { ...state, cinemaIndex: action.cinemaIndex };
    }
    case "SET_SHOWTIME": {
      return { ...state, cinemaShowTime: action.showTimeArray };
    }
    default:
      return state;
  }
};
