import express from "express";
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import config from "./config";

// Routes
import postRoutes from "./routes/api/post";
import userRoutes from "./routes/api/user";
import authRoutes from "./routes/api/auth";

const app = express();
const { MONGO_URI } = config;

app.use(hpp());
app.use(helmet()); // hpp와 helmet는 보안을 위해서 사용

app.use(cors({ origin: true, credentials: true })); // origin: 허락하고자 하는 주소를 적는다 true는 모두 허용
app.use(morgan("dev")); // log 확인용

app.use(express.json()); // bodyParser는 express에 자체 내장되어 있기에 바로 사용가능.

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connecting Success!!!"))
  .catch((e) => console.log("MongoDB runError", e));

// Use routes
app.get("/");
app.use("/api/post", postRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

export default app;
