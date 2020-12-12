import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import auth from "../../middleware/auth";
import config from "../../config";
const { JWT_SECRET } = config;

// Model
import User from "../../models/user";

const router = express.Router();

// @route         POST api/auth
// @description   Auth user
// @access        Public
router.post("/", (req, res) => {
  const { email, password } = req.body;

  // Simple Vaildation
  if (!email || !password) {
    return res.status(400).json({ msg: "모든 필드를 채워주세요." });
  }

  User.findOne({ email }).then((user) => {
    if (!user)
      return res.status(400).json({ msg: "유저가 존재하지 않습니다." });

    // Validation password

    bcrypt.compare(password, user.password).then((isMatch) => {
      // password와 user.password를 비교
      if (!isMatch)
        return res.status(400).json({ msg: "비밀번호가 일치하지 않습니다." });
      jwt.sign(
        { id: user.id },
        JWT_SECRET,
        { expiresIn: "2 days" },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
            },
          });
        },
      );
    });
  });
});

router.post("/logout", (req, res) => {
  res.json("로그아웃 성공");
});

router.get("/user", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // select를 빈칸으로 생략시 password까지 같이 나오기때문에 -password로 뺀다.
    if (!user) throw Error("유저가 존재하지 않습니다.");
    res.json(user);
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: e.message });
  }
});

export default router;
