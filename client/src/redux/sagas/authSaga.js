import axios from "axios";
import { put, call, all, fork, takeEvery } from "redux-saga/effects";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "redux/types";

// LOGIN

const loginAPI = (loginData) => {
  console.log(loginData, ">>> loginData");
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post("api/auth", loginData, config);
};

function* login(action) {
  try {
    const result = yield call(loginAPI, action.payload);
    console.log(result);
    yield put({
      type: LOGIN_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILURE,
      payload: e.response,
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOGIN_REQUEST, login);
}

// LOGOUT

function* logout() {
  try {
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: LOGOUT_FAILURE,
      payload: e.response,
    });
    console.log(e);
  }
}

function* watchLogout() {
  yield takeEvery(LOGOUT_REQUEST, logout);
}

// REGISTER

const registerAPI = (registerData) => {
  console.log(registerData, ">>> loginData");
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post("api/user", registerData, config);
};

function* register(action) {
  try {
    const result = yield call(registerAPI, action.payload);
    console.log(result);
    yield put({
      type: REGISTER_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: REGISTER_FAILURE,
      payload: e.response,
    });
  }
}

function* watchRegister() {
  yield takeEvery(REGISTER_REQUEST, register); // REGISTER_REQUEST가 바뀌는것을 감시하면서 바뀌면 Register 실행
}

export default function* authSaga() {
  yield all([fork(watchLogin), fork(watchLogout), fork(watchRegister)]);
}
