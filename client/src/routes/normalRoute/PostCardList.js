import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { POST_LOADING_REQUEST } from "redux/types";
import { Helmet } from "react-helmet";
import { Row } from "reactstrap";
import { GrowingSpinner } from "utils/Spinner";
import PostCard from "components/molecules/PostCard";

const PostCardList = () => {
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: POST_LOADING_REQUEST,
      payload: 0,
    });
  }, [dispatch]);
  return (
    <>
      <Helmet title="Home" />
      <Row>{posts ? <PostCard posts={posts} /> : GrowingSpinner}</Row>
    </>
  );
};

export default PostCardList;
