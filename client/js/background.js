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
    "2-1.JPG",
    "2-2.JPG",
    "2-3.JPG",
    "2-4.JPG",
    "2-5.JPG",
    "2-6.JPG",
    "2-7.JPG",
    "2-8.JPG",
    "2-9.JPG",
    "2-10.JPG",
    "2-11.JPG",
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
    "3-18.JPG",
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
const date = new Date();
const hours = date.getHours();

const results = images1[Math.floor(Math.random()*images1.length)];
// let results = images[Math.floor((Math.random()*(11-7))+7)];
// let results = images[Math.floor((Math.random()*(6-0))+0)];
// const bgImage = document.createElement("img");
const bgImage = document.querySelector("body");
if (document.querySelector(".kor-food")){
    // const image = new Image();
    // image.src = `../image/${results}`;
    // document.body.prepend(image)
    bgImage.style.backgroundRepeat="no-repeat";
    bgImage.style.backgroundPosition="center";
    bgImage.style.backgroundSize="32%";
    bgImage.style.height="809px";
    bgImage.style.backgroundImage=`url('../image/${results}')`;
}

// bgImage.src = `img/${results}`
// bgImage.classList.add("bgimg");

// document.body.appendChild(bgImage);