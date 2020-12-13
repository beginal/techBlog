import axios from "axios";
import { put, call, all, fork, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";
import {
  POST_LOADING_REQUEST,
  POST_LOADING_SUCCESS,
  POST_LOADING_FAILURE,
} from "redux/types";

// LOGIN

const loadPostAPI = (data) => {
  return axios.get("/api/post", data);
};

function* loadPost(action) {
  const result = yield call(loadPostAPI, action.payload);
  console.log(result, "loadPosts");
  try {
    yield put({
      type: POST_LOADING_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: POST_LOADING_FAILURE,
      payload: e,
    });
  }
}

function* watchLoadPost() {
  yield takeEvery(POST_LOADING_REQUEST, loadPost);
}

export default function* postSaga() {
  yield all([fork(watchLoadPost)]);
}
