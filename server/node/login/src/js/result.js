
const images1 = {
    "1-1.JPG":"감자탕",
    "1-2.JPG":"제육볶음",
    "1-3.JPG":"육회",
    "1-4.jpg":"비빔밥",
    "1-5.jpg":"부추전",
    "1-6.jpg":"두부김치",
    "1-7.jpg":"돼지수육"
}
const images2 = {
    "2-1.jpeg":"짬뽕",
    "2-2.jpeg":"짜장면",
    "2-3.jpeg":"탕수육",
    "2-4.jpeg":"깐쇼새우",
    "2-5.jpeg":"깐풍기",
    "2-6.jpeg":"구절판",
    "2-7.jpeg":"볶음밥",
    "2-8.jpeg":"마파두부",
    "2-9.jpeg":"군만두",
}
const images3={
    "3-1.jpg":"오니기리",
    "3-2.jpg":"스시",
    "3-3.jpg":"규동",
    "3-4.png":"텐푸라",
    "3-5.jpg":"카츠동",
    "3-6.jpg":"타코야키",
    "3-7.jpg":"장어덮밥",
    "3-8.jpg":"사케동",
    "3-9.jpg":"우동",
    "3-10.jpg":"메밀소바",
    "3-11.JPEG":"라멘",
    "3-12.jpg":"오코노미야키",
    "3-13.png":"샤브샤브",
    "3-14.jpg":"소고기전골",
    "3-15.jpg":"토리야키",
    "3-16.jpg":"카레",
    "3-17.JPEG":"돈까스"
}
const images4={
    "4-1.jpg":"샐러드",
    "4-2.jpg":"스테이크",
    "4-3.jpg":"에그스크럼블",
    "4-4.jpg":"파스타",
    "4-5.jpg":"리조또",
}
const images5={
    "5-1.jpg":"떡볶이",
    "5-2.jpg":"토종순대",
    "5-3.jpg":"튀김",
    "5-4.jpg":"라면",
    "5-5.jpg":"김밥",
    "5-6.jpg":"오뎅",
    "5-7.jpg":"찐만두",
    "5-8.jpg":"비빔면",
    "5-9.jpg":"호떡",
    "5-10.jpg":"붕어빵",    
}
// 날짜시간 설정
const date = new Date();
const hours = date.getHours();


$(document).ready(function(){
    if(document.querySelector(".food1")){
        const randomCount1 = Math.floor(Math.random()*Object.keys(images1).length);
        const results = Object.keys(images1)[randomCount1]
        document.getElementById("resultMenu").innerText = (Object.values(images1)[randomCount1]);
        $('#resultImg').css({
            background:`url(/src/image/${results}) no-repeat center / cover`,
            top:"0",
            left:"0",
            width:"100vw",
            height:"100vh",
            opacity:"0.6",
            overflow: "hidden"
        })
    }else if(document.querySelector(".food2")){
        const randomCount2 = Math.floor(Math.random()*Object.keys(images2).length);
        const results2 = Object.keys(images2)[randomCount2]
        document.getElementById("resultMenu").innerText = (Object.values(images2)[randomCount2]);
        $('#resultImg').css({
            background:`url(/src/image/${results2}) no-repeat center / cover`,
            top:"0",
            left:"0",
            width:"100vw",
            height:"100vh",
        })
    }else if(document.querySelector(".food3")){
        const randomCount3 = Math.floor(Math.random()*Object.keys(images3).length);
        const results3 = Object.keys(images3)[randomCount3]
        document.getElementById("resultMenu").innerText = (Object.values(images3)[randomCount3]);
        $('#resultImg').css({
            background:`url(/src/image/${results3}) no-repeat center / cover`,
            top:"0",
            left:"0",
            width:"100vw",
            height:"100vh",
        })
    }else if(document.querySelector(".food4")){
        const randomCount4 = Math.floor(Math.random()*Object.keys(images4).length);
        const results4 = Object.keys(images4)[randomCount4]
        document.getElementById("resultMenu").innerText = (Object.values(images4)[randomCount4]);
        $('#resultImg').css({
            background:`url(/src/image/${results4}) no-repeat center / cover`,
            top:"0",
            left:"0",
            width:"100vw",
            height:"100vh",
        })
    }else if(document.querySelector(".food5")){
        const randomCount5 = Math.floor(Math.random()*Object.keys(images5).length);
        const results5 = Object.keys(images5)[randomCount5]
        document.getElementById("resultMenu").innerText = (Object.values(images5)[randomCount5]);
        $('#resultImg').css({
            background:`url(/src/image/${results5}) no-repeat center / cover`,
            top:"0",
            left:"0",
            width:"100vw",
            height:"100vh",
        })
    }
    
})