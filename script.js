// Variables

  var bg = document.getElementsByClassName('bgs__img'),
      head = document.getElementsByClassName('heading__line'),
      links = document.getElementsByClassName('menu__links'),
      line = document.getElementById('line__thin'),
      menu = document.getElementById('menu'),
      back = document.getElementById('back'),
      hback = document.getElementById('h_back'),
      hnext = document.getElementById('h_next'),
      next = document.getElementById('next');


  var scale_out = "transform: scale(.8, .8);";



// Functions

  function hb0() {
    bg[0].style="opacity: 1; left: 0; filter: blur(0px);";
    bg[1].style="";
    bg[2].style="";
    bg[3].style="";
    bg[4].style="";

    line.style="height: 57%";

    head[0].setAttribute('class', 'heading__line --visible');
    head[1].setAttribute('class', 'heading__line --semi-visible');
    head[2].setAttribute('class', 'heading__line --hidden-to-bottom');
    head[3].setAttribute('class', 'heading__line --hidden-to-bottom');
    head[4].setAttribute('class', 'heading__line --hidden-to-bottom');

    back.setAttribute('onclick', '');
    next.setAttribute('onclick', 'hb1();');
  }

  function hb1(){
    bg[0].style="";
    bg[1].style="opacity: 1; left: 0; filter: blur(0px);";
    bg[2].style="";
    bg[3].style="";
    bg[4].style="";

    line.style="height: 100%";

    head[0].setAttribute('class', 'heading__line --hidden-to-top');
    head[1].setAttribute('class', 'heading__line --visible');
    head[2].setAttribute('class', 'heading__line --semi-visible');
    head[3].setAttribute('class', 'heading__line --hidden-to-bottom');
    head[4].setAttribute('class', 'heading__line --hidden-to-bottom');

    back.setAttribute('onclick', 'hb0();');
    next.setAttribute('onclick', 'hb2();');
  }

  function hb2() {
    bg[0].style="";
    bg[1].style="";
    bg[2].style="opacity: 1; left: 0; filter: blur(0px);";
    bg[3].style="";
    bg[4].style="";

    head[0].setAttribute('class', 'heading__line --hidden-to-top');
    head[1].setAttribute('class', 'heading__line --hidden-to-top');
    head[2].setAttribute('class', 'heading__line --visible');
    head[3].setAttribute('class', 'heading__line --semi-visible');
    head[4].setAttribute('class', 'heading__line --hidden-to-bottom');

    back.setAttribute('onclick', 'hb1();');
    next.setAttribute('onclick', 'hb3();');
  }

  function hb3() {
    bg[0].style="";
    bg[1].style="";
    bg[2].style="";
    bg[3].style="opacity: 1; left: 0; filter: blur(0px);";
    bg[4].style="";

    head[0].setAttribute('class', 'heading__line --hidden-to-top');
    head[1].setAttribute('class', 'heading__line --hidden-to-top');
    head[2].setAttribute('class', 'heading__line --hidden-to-top');
    head[3].setAttribute('class', 'heading__line --visible');
    head[4].setAttribute('class', 'heading__line --semi-visible');

    back.setAttribute('onclick', 'hb2();');
    next.setAttribute('onclick', 'hb4();');
  }

  function hb4() {
    bg[0].style="";
    bg[1].style="";
    bg[2].style="";
    bg[3].style="";
    bg[4].style="opacity: 1; left: 0; filter: blur(0px);";

    head[0].setAttribute('class', 'heading__line --hidden-to-top');
    head[1].setAttribute('class', 'heading__line --hidden-to-top');
    head[2].setAttribute('class', 'heading__line --hidden-to-top');
    head[3].setAttribute('class', 'heading__line --hidden-to-top');
    head[4].setAttribute('class', 'heading__line --visible');

    back.setAttribute('onclick', 'hb3();');
    next.setAttribute('onclick', '');
  }

  function menu__show(){
    setTimeout(function(){links[0].style="padding: 0 14px; opacity: 1; visibility: visible;"},600);
    setTimeout(function(){links[1].style="padding: 0 14px; opacity: 1; visibility: visible;"},400);
    setTimeout(function(){links[2].style="padding: 0 14px; opacity: 1; visibility: visible;"},200);

    setTimeout(function(){menu.setAttribute("onclick", "menu__hide();")},1500);
    setTimeout(function(){menu.setAttribute("src", "photos/close.svg")},100);
  }

  function menu__hide(){
    setTimeout(function(){links[0].style=""},200);
    setTimeout(function(){links[1].style=""},400);
    setTimeout(function(){links[2].style=""},600);

    setTimeout(function(){menu.setAttribute("onclick", "menu__show();")},1500);
    setTimeout(function(){menu.setAttribute("src", "photos/bars.svg")},100);
  }
