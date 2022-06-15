"use strict";

const dashboard = (req,res) =>{
    res.render("home/index");
};

const login = (req,res) => {
    res.render("home/login");
}

const result = (req,res)=>{
    res.send("home/result");
}

const singin = (req,res)=>{
    res.send("home/signin");
}

module.exports = {
    dashboard,
    login,
    result,
    singin
}