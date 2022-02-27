const initialState = {
  arrayMovie: [],
  detailMovie: {},

  isLoadingDetail: true,

  detailMovieHomeTool: [],

  reSelectMovie: false,

  objectLichChieu: {},

  objectXuatChieu: {},

  fullSelect: false,
};

export const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ARRAY_MOVIE": {
      // console.log(action.arrayMovie);
      return { ...state, arrayMovie: action.arrayMovie };
    }
    case "SET_DETAIL_MOVIE": {
      state.detailMovie = action.detailMovie;
      state.isLoadingDetail = false;
      return { ...state };
    }
    case "RESET_HOMETOOL": {
      // console.log(action.type);
      return {
        ...state,
        objectLichChieu: {},
        objectXuatChieu: {},
        reSelectMovie: true,
        fullSelect: false,
      };
    }
    case "FULL_SELECT": {
      // console.log(action.type);
      return { ...state, fullSelect: true };
    }
    case "RESET_SHOWTIME": {
      return { ...state, objectXuatChieu: {}, fullSelect: false };
    }
    case "RESET_DATES": {
      // console.log(action.type);
      return {
        ...state,
        objectLichChieu: {},
        objectXuatChieu: {},
        fullSelect: false,
      };
    }
    case "SET_LICH_CHIEU_DETAIL_MOVIE_HOMETOOL": {
      // console.log(action.lichChieuDetailMovieHomeTool);
      return {
        ...state,
        detailMovieHomeTool: action.lichChieuDetailMovieHomeTool,
        reSelectMovie: false,
      };
    }
    case "SET_DATE_MOVIE_HOMETOOL": {
      return {
        ...state,
        objectLichChieu: action.objectLichChieu,
      };
    }
    case "SET_XUATCHIEU_MOVIE_HOMETOOL": {
      return { ...state, objectXuatChieu: action.objectXuatChieu };
    }
    default:
      return state;
  }
};
