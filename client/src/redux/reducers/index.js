import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authReducer from "./authReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history), // router라는 이름만으로 불러올 수 있게 함.
    auth: authReducer,
  });

export default createRootReducer;
