import express from "express";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

// Model
import User from "../../models/user";
import config from "../../config";
const { JWT_SECRET } = config;

const router = express.Router();

// @routes        GET api/user
// @description   GET all user
// @access        public

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    if (!users) throw Error("No users");
    res.status(200).json(users);
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: e.message });
  }
});

// @routes        POST api/user
// @description   Register user
// @access        public

router.post("/", (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "모든 필드를 채워주세요." });
  }

  // Check for exising user
  User.findOne({ email }).then((user) => {
    if (user)
      return res.status(400).json({ msg: "이미 가입된 유저가 존재합니다." });
    const newUser = new User({
      name,
      email,
      password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(({ id, name, email }) => {
          jwt.sign({ id }, JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
            if (err) throw error;
            res.json({
              token,
              user: {
                id,
                name,
                email,
              },
            });
          });
        });
      }); // password와 salt를 합쳐서 비밀번호를 hash로 만듬
    }); // 단방향 해시 함수에서 추가되는 임의의 문자열, 유저가 만든 pasword를 해커가 탈취해도 못알아보게함
  });
});

export default router;
