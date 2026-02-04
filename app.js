import express from "express";
import userRoute from "./routes/user.routes.js"; // ✅ FIXED

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("User Management API is running");
});

app.use("/api/users", userRoute);



export default app;
