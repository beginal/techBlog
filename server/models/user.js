import moment from "moment";
import mongoose from "mongoose";

// Create Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["beginal", "User"],
    default: "User",
  },
  regeister_date: {
    type: Date,
    default: moment().format("YYYY-MM-DD hh:mm:ss"), // 2020-12-12 14:33:25
  },
  comments: [
    {
      post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
      },
      comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
      },
    },
  ],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

const User = mongoose.model("user", UserSchema); // UserSchema를 user라고 불러오겠다.

export default User;
