"use strict";
// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

// const FileStore = require("session-file-store")(session);
const app = express();

dotenv.config();


//라우팅
const home = require("./routes/home");
const accessLogStream = require("./src/config/log");


//앱 셋팅
app.set("views","./views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(compression());
// app.use(session({
//     secret:"keyboard cat",
//     resave: false,
//     saveinitialized:true,
//     store:new FileStore()
// }));
// app.get("/",function(req,res,next){
//     console.log(req.session);
//     if(req.session.num===undefined){
//         req.session.num = 1;
//     }else{
//         req.session.num = req.session.num +1;
//     }
//     res.send(`Views:${req.session.num}`);
// });

app.use(morgan("common",{stream:accessLogStream}));
app.use("/",home);

module.exports = app;