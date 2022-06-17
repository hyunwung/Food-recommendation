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
};
module.exports = {
    output,
    process,
};