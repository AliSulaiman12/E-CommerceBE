const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const productRouter = require("./routes/products");
const cors = require("cors");
// const path = require("path");
// const fileURLToPath =require("url");
const uploadRouter = require("./routes/upload");

require("dotenv").config();


const app = express();

app.use(cors());

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(__dirname + "/uploads"));

mongoose.connect(process.env.mongoURI).then(() => console.log("Connected!"));

app.use(express.json());

const PORT = 5173;

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/upload", uploadRouter);

app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});
