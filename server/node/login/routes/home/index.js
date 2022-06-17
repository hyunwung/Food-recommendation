"use strict";

const express = require("express");
const router = express.Router();


const ctrl = require("./home.ctrl");

router.get("/",ctrl.output.dashboard); // 로그인 후 대시보드
router.get("/login",ctrl.output.login); // 로그인 페이지
router.get("/signup",ctrl.output.singup); // 회원가입 페이지

router.post("/login",ctrl.process.login); // 로그인 페이지 보내기
router.post("/signup",ctrl.process.signup); // 회원가입 페이지 보내기

module.exports = router;