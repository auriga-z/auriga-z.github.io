var mnu = document.getElementById('mnu'),
    closebtn = document.getElementById('cbtn'),
    menubtn = document.getElementById('mbtn'),
    hide = document.getElementsByClassName('js-hide');

function hidnav(){
  closebtn.setAttribute("class", 'cbtn-hidden');
  for(i=0; i<hide.length; ++i){
    hide[i].setAttribute('data-emergence', 'hidden');
  }
  setTimeout(function(){mnu.setAttribute("class", 'mnu-hid')}, 1000);
  setTimeout(function(){mnu.style="display: none; top: 100%"}, 1600);
  setTimeout(function(){menubtn.setAttribute("class", 'mbtn-visible')}, 1680);
}

function shonav(){
  menubtn.setAttribute("class", 'mbtn-hidden');
  mnu.style="top: 0";
  setTimeout(function(){mnu.setAttribute("class", 'mnu-vis')}, 100);
  setTimeout(function(){closebtn.setAttribute("class", 'cbtn-visible')}, 1600);
  setTimeout(function(){for(i=0; i<hide.length; ++i){
    hide[i].setAttribute('data-emergence', 'visible');
  }}, 1000);
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
