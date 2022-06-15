"use strict";

const express = require("express");
const router = express.Router();


const ctrl = require("./home.ctrl");

router.get("/",ctrl.dashboard); // 로그인 후 대시보드
router.get("/login",ctrl.login); // 로그인 페이지
router.get("/result",ctrl.result); // 결과 페이지
router.get("/signin",ctrl.singin); // 회원가입 페이지


module.exports = router