import { applyMiddleware, combineReducers, createStore } from "redux";
import ModalReducer from "./reducer/ModalReducer";
import { MovieReducer } from "./reducer/MovieReducer";
import reduxThunk from "redux-thunk";
import CinemaReducer from "./reducer/CinemaReducer";
import { DatVeReducer } from "./reducer/DatVeReducer";
import { DangKyReducer } from "./reducer/DangKyReducer";
import { NguoiDungReducer } from "./reducer/NguoiDungReducer";
import LoadingReducer from "./reducer/LoadingReducer";
import AdminReducer from "./reducer/AdminReducer";

const rootReducer = combineReducers({
  MovieReducer,
  ModalReducer,
  CinemaReducer,
  DatVeReducer,
  DangKyReducer,
  NguoiDungReducer,
  LoadingReducer,
  AdminReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
