require("dotenv").config();
require("./DB");
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const photosRouter = require("./Routs/Photos/photos-rout");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.send("workkk!"));
app.use("/photos", photosRouter);
app.listen(process.env.PORT);
