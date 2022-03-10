const express = require("express");
const dotenv = require("dotenv");
const { errorHandler } = require("./middlewares/errorMiddleware");
const basicRouter = require("./routes/goalRoutes");
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

// api
app.use("/api/goals", basicRouter);

app.listen(port, () => {
  console.log(` SERVER ON PORT ${port}  `);
});
