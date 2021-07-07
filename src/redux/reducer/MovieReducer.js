const initialState = {
  arrayMovie: [
    {
      maPhim: 1314,
      tenPhim: "Gà Trống Nuôi Vợ",
      biDanh: "ga-trong-nuoi-vo",
      trailer: "https://youtu.be/IY7ktRwopPw",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/ga-trong-nuoi-vo_gp01.png",
      moTa: "ghntfhfghfghfghfghfg",
      maNhom: "GP01",
      ngayKhoiChieu: "2021-04-09T11:38:17.29",
      danhGia: 10,
    },
    {
      maPhim: 1329,
      tenPhim: "Bố Già",
      biDanh: "bo-gia",
      trailer: "https://www.youtube.com/embed/IHNzOHi8sJs",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/bo-gia_gp01.jpg",
      moTa: "Tui Chưa Coi Nên Chưa Biết",
      maNhom: "GP01",
      ngayKhoiChieu: "2021-04-03T20:30:24.247",
      danhGia: 10,
    },
  ],
  detailMovie: {},
  isLoadingDetail: true,

  detailMovieHomeTool: {},

  reSelectMovie: false,

  objectLichChieu: {},

  objectXuatChieu: {},
};

export const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ARRAY_MOVIE": {
      return { ...state, arrayMovie: action.arrayMovie };
    }
    case "SET_DETAIL_MOVIE": {
      state.detailMovie = action.detailMovie;
      state.isLoadingDetail = false;
      return { ...state };
    }
    case "SET_CINEMA_HOME_TOOL": {
      console.log(action.type);
      return { ...state, reSelectMovie: true };
    }

    case "SET_DETAIL_MOVIE_HOMETOOL": {
      return {
        ...state,
        detailMovieHomeTool: action.detailMovieHomeTool,
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
