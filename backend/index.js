import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { connect } from "mongoose";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/jobs.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// const corsOptions = {
//   origin: "http//localhost:5173",
//   Credentials: true,
// };

// app.use(
//   cors({
//     credentials: true,
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
//     allowedHeaders: ["Content-Type", "Authorization"],
//     origin: [
//       "http://localhost:2000",
//       "http://localhost:4000",
//       "http://localhost:5173/",
//     ],
//   })
// );

app.use(
  cors({
    origin: "https://job-portal-frontend-4r7o.onrender.com",
    headers: {
      "Access-Control-Allow-Origin": "https://job-portal-frontend-4r7o.onrender.com",
      "Access-Control-Allow-Credentials": true,
    },
  })
);

app.use(cors())
const PORT = process.env.PORT || 3000;

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`server running at port ${PORT}`);
});
