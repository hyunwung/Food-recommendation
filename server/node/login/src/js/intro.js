const idEl = document.querySelector('#username');
const pwEl = document.querySelector('#pswd1')
const psBoxId = document.querySelector('.ps_box_id')
const psBoxPw = document.querySelector('.ps_box_pw')

idEl.addEventListener('click',function(){
  idEl.focus();
});


idEl.addEventListener('focus', function(){
  idEl.classList.add('focused');
  idEl.setAttribute('placeholder','아이디 입력');
  psBoxId.style.border = "transparent"
});

idEl.addEventListener('blur', function(){
  idEl.classList.remove('focused');
  idEl.setAttribute('placeholder','');
  psBoxId.style.border = "1px solid"
});

pwEl.addEventListener('click', function(){
  pwEl.focus()
})

pwEl.addEventListener('focus', function(){
  pwEl.classList.add('focused');
  pwEl.setAttribute('placeholder','비밀번호 입력');
  psBoxPw.style.border = "transparent"
});

pwEl.addEventListener('blur', function(){
  pwEl.classList.remove('focused');
  pwEl.setAttribute('placeholder','');
  psBoxPw.style.border = "1px solid"
});