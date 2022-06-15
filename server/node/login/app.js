"use strict";
// 모듈
const express = require("express");
const app = express();

const PORT = 3000;
//앱 셋팅
app.set("views","./views");
app.set("view engine","ejs");

//라우팅
const home = require("./routes/home/index")
app.use("/",home); 

module.exports = app; // 나가