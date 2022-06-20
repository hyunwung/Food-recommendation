
"use strict";

$(document).ready(function(){
  // let clock = document.querySelector("h2#clock");
  const clock = document.querySelector("#clock");

function getClock(){
    const dateC = new Date();
    const hoursC = String(dateC.getHours()).padStart(2,'0');
    const minutesC = String(dateC.getMinutes()).padStart(2,'0');
    const secondsC = String(dateC.getSeconds()).padStart(2,'0');
    clock.innerText=`${hoursC}:${minutesC}:${secondsC}`;
}
getClock();
setInterval(getClock,1000)
  
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  // console.log(hours, minutes, seconds)
  
  
  // console.log('11')
  let ambn = $('.am .banner')
  let anbn = $('.an .banner')
  let pmbn = $('.pm .banner')
  ambn.eq(0).css({display: 'block'})
  anbn.eq(0).css({display: 'block'})
  pmbn.eq(0).css({display: 'block'})

  let timer = 4000;
  let c_bang =0;
  let ambn_count = ambn.length;
  let anbn_count = anbn.length;
  let pmbn_count = pmbn.length;
  let int_box="";

  function auto_slide(){
    if(hours > 19 || hours < 5){
      // console.log('저녁')
      $('.an').css({
        display:'none'
      })
      $('.am').css({
        display:'none'
      })
      $('.pm').css({
        display:'block'
      })
      int_box = setInterval(function(){
      
        pmbn.eq(c_bang % pmbn_count).css({zIndex:1}).delay(timer).fadeOut(0);
  
        pmbn.eq((c_bang+1) % pmbn_count).css({zIndex:99}).fadeIn(timer);
  
        c_bang+=1
      }, timer+2000)
    } 
    else if(hours >= 5 && hours <= 10){
      // console.log('오전')
      $('.pm').css({
        display:'none'
      })
      $('.an').css({
        display:'none'
      })
      $('.am').css({
        display:'block'
      })
      int_box = setInterval(function(){
      
        ambn.eq(c_bang % ambn_count).css({zIndex:1}).delay(timer).fadeOut(0);
  
        ambn.eq((c_bang+1) % ambn_count).css({zIndex:99}).fadeIn(timer);
  
        c_bang+=1
      }, timer+2000)
    } 
    else if(hours >= 11 || hours <= 19){
      // console.log('오후')
      $('.pm').css({
        display:'none'
      })
      $('.am').css({
        display:'none'
      })
      $('.an').css({
        display:'block'
      })
      int_box = setInterval(function(){
      
        anbn.eq(c_bang % anbn_count).css({zIndex:1}).delay(timer).fadeOut(0);
  
        anbn.eq((c_bang+1) % anbn_count).css({zIndex:99}).fadeIn(timer);
  
        c_bang+=1
      }, timer+2000)
    }
  }
  

  auto_slide()
  
  $('.eng').click(function(){
    $('.c_pan').addClass('pan_active')
    setTimeout(function(){
      $('.k_v').css({
        display : 'none',
      },)
      
      $('.e_v').css({
        display:'block', 
      })
      $('.kor').css({
        backgroundColor : 'transparent',
        color: 'rgb(240, 237, 237)'
      })
      $('.eng').css({
        backgroundColor : 'rgba(242, 244, 246, 0.8)',
        color : '#000'
      })
    },400)
  })
  
  $('.kor').click(function(){
  $('.c_pan').removeClass('pan_active')
  setTimeout(function(){
    $('.k_v').css({
      display : 'block',
    },) 
    
    $('.e_v').css({
      display:'none',
    })
    $('.kor').css({
      backgroundColor : 'rgba(242, 244, 246, 0.8)',
      color : '#000'
    })
    $('.eng').css({
      backgroundColor : 'transparent',
      color: 'rgb(240, 237, 237)'
    })
  },400)
  
  })
})

$(document).ready(function(){
  $(".food_box").on('click', function result(e){
    const req = e.target.id;
    const foodValue = "food1"
    // $(".example").attr("example",foodValue);
    
  });
});






