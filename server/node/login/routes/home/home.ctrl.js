"use strict";

const User = require("../../src/models/User");

const output={
    dashboard : (req,res) =>{
        res.render("home/");
    },
    
    login : (req,res) => {
        res.render("home/login");
    },
    result : (req,res)=>{
        res.render("home/result");
    },
    result2 : (req,res)=>{
        res.render("home/result2");
    },
    result3 : (req,res)=>{
        res.render("home/result3");
    },
    result4 : (req,res)=>{
        res.render("home/result4");
    },
    result5 : (req,res)=>{
        res.render("home/result5");
    },
    
    singup : (req,res)=>{
        res.render("home/signup");
    },
};
const process = {
    login:async (req,res)=>{
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    signup:async (req,res)=>{
        const user = new User(req.body);
        const response = await user.signup();
        return res.json(response);
    },
    result:async (req,res)=>{
        const food = new User(req);
        const response = await food.result();
        return res.json(response);
    },
};
module.exports = {
    output,
    process,
};