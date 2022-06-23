"use strict";

function login(){
    const req = {
        id: id.value,
        psword:psword.value,
    };
    fetch("/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res)=>res.json())
        .then((res)=>{
            if(res.success){
                location.href="/";
            }else{
                alert(res.msg);
            }
        })
        .catch((err)=>{
            console.error("로그인 중 에러 발생");
        });
}

const id = document.querySelector('#username'),
    psword = document.querySelector("#pswd1"),
    loginBtn = document.querySelector("#btnLogin");


loginBtn.addEventListener("click",login);