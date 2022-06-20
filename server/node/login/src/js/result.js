
const images1 = [
    "1-1.JPG",
    "1-2.JPG",
    "1-3.JPG",
    "1-4.JPG",
    "1-5.JPG",
    "1-6.JPG",
    "1-7.JPG",
]
const images2 = [
    "2-1.JPEG",
    "2-2.JPEG",
    "2-3.JPEG",
    "2-4.JPEG",
    "2-5.JPEG",
    "2-6.JPEG",
    "2-7.JPEG",
    "2-8.JPEG",
    "2-9.JPEG",
    "2-10.JPEG",
    "2-11.JPEG",
]
const images3=[
    "3-1.JPG",
    "3-2.JPG",
    "3-3.JPG",
    "3-4.JPG",
    "3-5.JPG",
    "3-6.JPG",
    "3-7.JPG",
    "3-8.JPG",
    "3-9.JPG",
    "3-10.JPG",
    "3-11.JPG",
    "3-12.JPG",
    "3-13.JPG",
    "3-14.JPG",
    "3-15.JPG",
    "3-16.JPG",
    "3-17.JPG",
]
const images4=[
    "4-1.JPG",
    "4-2.JPG",
    "4-3.JPG",
    "4-4.JPG",
    "4-5.JPG",
]
const images5=[
    "5-1.JPG",
    "5-2.JPG",
    "5-3.JPG",
    "5-4.JPG",
    "5-5.JPG",
    "5-6.JPG",
    "5-7.JPG",
    "5-8.JPG",
    "5-9.JPG",
    "5-10.JPG",
]

const example = {
    "1-1.JPG":"감자탕",
    "1-2.JPG":"제육볶음"
}
const date = new Date();
const hours = date.getHours();

const results = images1[Math.floor(Math.random()*images1.length)];
const results2 = images2[Math.floor(Math.random()*images2.length)];
const results3 = images3[Math.floor(Math.random()*images3.length)];
const results4 = images4[Math.floor(Math.random()*images4.length)];
const results5 = images5[Math.floor(Math.random()*images5.length)];

console.log(Object.keys(example)[Math.floor(Math.random()*Object.keys(example).length)]);
document.getElementById("resultMenu").innerText = (Object.values(example)[Math.floor(Math.random()*Object.keys(example).length)]);

// console.log(example2);
// document.querySelector("#resultMenu").value = example.food[1]



window.onload = function () {
    let canvas = document.getElementById("canv");
    let context = canvas.getContext("2d");

    context.font = "30px sans";
    context.fillStyle = "white";
    context.textAlign = "center";

    let string = `오늘의만찬은`;

    let angle = Math.PI * 0.65;
    let radius = 200;

    context.translate(180, 280);
    context.rotate(-1.1 * angle / 2);

    for (let i = 0; i < string.length; i++) {

        context.rotate(angle / string.length);
        context.save();
        context.translate(0, -1 * radius);
        context.fillText(string[i], 0, 0);
        context.restore();
    }
};



$(document).ready(function(){
    if(document.querySelector(".food1")){
        $('#resultImg').css({
            background:`url(/src/image/${results}) no-repeat center / cover`,
            top:"0",
            left:"0",
            width:"100vw",
            height:"100vh",
        })
    }else if(document.querySelector(".food2")){
        $('#resultImg').css({
            background:`url(/src/image/${results2}) no-repeat center / cover`,
            top:"0",
            left:"0",
            width:"100vw",
            height:"100vh",
        })
    }else if(document.querySelector(".food3")){
        $('#resultImg').css({
            background:`url(/src/image/${results3}) no-repeat center / cover`,
            top:"0",
            left:"0",
            width:"100vw",
            height:"100vh",
        })
    }else if(document.querySelector(".food4")){
        $('#resultImg').css({
            background:`url(/src/image/${results4}) no-repeat center / cover`,
            top:"0",
            left:"0",
            width:"100vw",
            height:"100vh",
        })
    }else if(document.querySelector(".food5")){
        $('#resultImg').css({
            background:`url(/src/image/${results5}) no-repeat center / cover`,
            top:"0",
            left:"0",
            width:"100vw",
            height:"100vh",
        })
    }
    
})