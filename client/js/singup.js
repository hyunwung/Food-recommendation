"use strict";

function signup(e){
    e.preventDefault();
    if (!id.value) return alert("아이디를 입력해주세요.")
    if (psword.value !== confirmPsword.value){
        return alert("비밀번호가 일치하지 않습니다.")
    }
    const req = {
        id: id.value,
        psword:psword.value,
        name : names.value,
        email : email.value,
        gender : gender.value,
    };
    fetch("/signup",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res)=>res.json())
        .then((res)=>{
            if(res.success){
                location.href="/login";
            }else{
                if (res.err) return alert(res.err);
                alert(res.msg);
            }
        })
        .catch((err)=>{
            console.error("회원가입 중 에러 발생");
        });
}

const id = document.querySelector('#username'),
    names = document.querySelector("#name"),
    psword = document.querySelector("#password1"),
    confirmPsword = document.querySelector("#password2"),
    email = document.querySelector("#email"),
    gender = document.querySelector("#gender"),
    signupBtn = document.querySelector("#btnJoin");


signupBtn.addEventListener("click",signup);
