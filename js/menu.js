var mnu = document.getElementById('mnu'),
    closebtn = document.getElementById('cbtn'),
    menubtn = document.getElementById('mbtn'),
    hide = document.getElementsByClassName('js-hide');

function hidnav(){
  closebtn.setAttribute("class", 'cbtn-hidden');
  for(i=0; i<hide.length; ++i){
    hide[i].setAttribute('data-emergence', 'hidden');
  }
  setTimeout(function(){mnu.setAttribute("class", 'mnu-hid')}, 600);
  setTimeout(function(){mnu.style="display: none; top: -200%"}, 1000);
  setTimeout(function(){menubtn.setAttribute("class", 'mbtn-visible')}, 1050);
}

function shonav(){
  menubtn.setAttribute("class", 'mbtn-hidden');
  mnu.style="display: block; top: 0";
  setTimeout(function(){mnu.setAttribute("class", 'mnu-vis')}, 50);
  setTimeout(function(){for(i=0; i<hide.length; ++i){
    hide[i].setAttribute('data-emergence', 'visible');
  }}, 500);
  setTimeout(function(){closebtn.setAttribute("class", 'cbtn-visible')}, 800);
}

var sbtn = document.getElementById('mbtn_side'),
    navl = document.getElementById('nl');

$(window).scroll(function (event) {
var scroll = $(window).scrollTop();
  if(scroll > 600){
    sbtn.style="opacity: 1";
    nl.style="opacity: .4";
  }
  else{
    sbtn.style="opacity: 0";
    nl.style="opacity: 0";
  }
});

$(document).ready(function(){
    $(this).scrollTop(0);
});
