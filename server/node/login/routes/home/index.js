"use strict";

const express = require("express");
const router = express.Router();


const ctrl = require("./home.ctrl");

router.get("/",ctrl.output.dashboard); // 로그인 후 대시보드
router.get("/login",ctrl.output.login); // 로그인 페이지
router.get("/signup",ctrl.output.singup); // 회원가입 페이지
router.get("/result",ctrl.output.result); // 결과 페이지
router.get("/result2",ctrl.output.result2); // 결과 페이지
router.get("/result3",ctrl.output.result3); // 결과 페이지
router.get("/result4",ctrl.output.result4); // 결과 페이지
router.get("/result5",ctrl.output.result5); // 결과 페이지

router.post("/login",ctrl.process.login); // 로그인 페이지 보내기
router.post("/signup",ctrl.process.signup); // 회원가입 페이지 보내기
// router.post("/result",ctrl.process.result); // 결과 페이지


module.exports = router;