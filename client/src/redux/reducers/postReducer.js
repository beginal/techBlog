import {
  POST_LOADING_FAILURE,
  POST_LOADING_REQUEST,
  POST_LOADING_SUCCESS,
} from "redux/types";

const initialState = {
  isAuthenticated: null,
  posts: [],
  postDetail: "",
  postCount: "",
  loading: false,
  error: "",
  creatorId: "",
  categoryFindResult: "", // 카테고리 검색 기능 구현을 위해서
  title: "",
  searchBy: "",
  searchResult: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOADING_REQUEST:
      return {
        ...state,
        posts: [],
        loading: true,
      };
    case POST_LOADING_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        // categoryFindResult: action.payload.categoryFindResult,
        // postCount: action.payload.postCount,
        loading: false,
      };
    case POST_LOADING_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default postReducer;
