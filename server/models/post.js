import moment from "moment";
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true, // 검색을 위해 넣음
  },
  contents: {
    type: String,
    required: true,
  },
  views: {
    type: String,
    default: -2, // 첫 작성시 조회수 Up 안되게
  },
  fileUrl: {
    type: String,
    default: "https://source.unsplash.com/random/301x201", // 이미지 업로드하지 않을시 기본 이미지로 설정할 이미지
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  date: {
    type: String,
    default: moment().format("YYYY-MM-DD hh:mm:ss"), // 2020-12-12 14:33:25
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Post = mongoose.model("post", PostSchema); // PostSchema를 post라고 불러오겠다.

export default Post;
