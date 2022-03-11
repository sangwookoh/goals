const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middlewares/errorMiddleware");
const goalRouter = require("./routes/goalRoutes");
const userRouter = require("./routes/userRoutes");
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

// db connect
connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

// api
app.use("/api/goals", goalRouter);
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(` SERVER ON PORT ${port}  `);
});
