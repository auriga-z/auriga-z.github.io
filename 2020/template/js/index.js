window.onload = function(){
  setTimeout(function(){
    document.querySelector("body").setAttribute("class", "is-loaded");
  }, 600)
} 


$(document).ready(function(){

$('#home-link').on("click", function(event){
    event.preventDefault()

    const href = "index.html";

    $('.nav-center a').removeClass("active")
    $(this).addClass("active")

    document.title = "Phtographer ― Linnnn";

    const content = href + " #content";

    $('body').removeClass("is-loaded")
    $('body').addClass("is-loading");

    setTimeout(function(){
        $("main").load(content, function(data, statusTxt){
           if(statusTxt == "success"){
             setTimeout(function(){
                $('body').removeClass("is-loading")
                $('body').addClass("is-loaded")
             }, 1000) 
             remouse();
             window.history.pushState(null, null, href)
             projectBack();
             $("#loadScript").html('<script src="js/slider.js"></script>')
           }
        })

    }, 1000)
})

//About

$('#about-link').on("click", function(event){
  event.preventDefault()

  const href = "about.html";

  $('.nav-center a').removeClass("active")
  $(this).addClass("active")

  document.title = "About ― Linnnn";

  const content = href + " #content";

  $('body').removeClass("is-loaded")
  $('body').addClass("is-loading");

  setTimeout(function(){
      $("main").load(content, function(data, statusTxt){
         if(statusTxt == "success"){
           setTimeout(function(){
              $('body').removeClass("is-loading")
              $('body').addClass("is-loaded")
           }, 1000) 
           remouse();
           window.history.pushState(null, null, href)
           projectMainBack();
           $("#loadScript").html("<script>luxy.init();</script>")
         }
      })

  }, 1000)
})


//Projects Load

$('#project-link').on("click", function(event){
  event.preventDefault()

  const href = $(this).attr("href")

  $('.nav-center a').removeClass("active")
  $(this).addClass("active")

  const content = href + " #content";

  $('body').removeClass("is-loaded")
  $('body').addClass("is-loading");

  setTimeout(function(){
      $("main").load(content, function(data, statusTxt){
         if(statusTxt == "success"){
           $("#loadScript").attr("src", "js/project.js");
           setTimeout(function(){
              $('body').removeClass("is-loading")
              $('body').addClass("is-loaded")
           }, 1000) 
           remouse();
           window.history.pushState(null, null, href)
           projectMainBack();
           $("#loadScript").html("<script>luxy.init();</script>")
         }
      })

  }, 1500)
})

//Main Back

$('.main-back').on("click", function(event){
  event.preventDefault()

  const href = "index.html"

  $('.nav-center a').removeClass("active")
  $('#home-link').addClass("active")

  const content = href + " #content";

  $('body').removeClass("is-loaded")
  $('body').addClass("is-loading");

  setTimeout(function(){
      $("main").load(content, function(data, statusTxt){
         if(statusTxt == "success"){
           setTimeout(function(){
              $('body').removeClass("is-loading")
              $('body').addClass("is-loaded")
           }, 500) 
           remouse();
           window.history.pushState(null, null, href)
           projectBack();
           $("#loadScript").html('<script src="js/slider.js"></script>')
         }
      })
  }, 1000)
})





function projectBack(){

  $('#project-link').on("click", function(event){
    event.preventDefault()
  
    const href = $(this).attr("href")
  
    $('.nav-center a').removeClass("active")
    $(this).addClass("active")
  
    const content = href + " #content";
  
    $('body').removeClass("is-loaded")
    $('body').addClass("is-loading");
  
    setTimeout(function(){
        $("main").load(content, function(data, statusTxt){
           if(statusTxt == "success"){
             $("#loadScript").attr("src", "js/project.js");
             setTimeout(function(){
                $('body').removeClass("is-loading")
                $('body').addClass("is-loaded")
             }, 1000) 
             remouse();
             window.history.pushState(null, null, href)
             projectMainBack();
             $("#loadScript").html("<script>luxy.init();</script>")
           }
        })
  
    }, 1500)
  })

}


function projectMainBack(){

$('.main-back').on("click", function(event){
  event.preventDefault()

  const href = "index.html"

  $('.nav-center a').removeClass("active")
  $('#home-link').addClass("active")

  const content = href + " #content";

  $('body').removeClass("is-loaded")
  $('body').addClass("is-loading");

  setTimeout(function(){
      $("main").load(content, function(data, statusTxt){
         if(statusTxt == "success"){
           setTimeout(function(){
              $('body').removeClass("is-loading")
              $('body').addClass("is-loaded")
           }, 500) 
           remouse();
           window.history.pushState(null, null, href)
           projectBack();
           setTimeout(function(){
            $("#loadScript").html('<script src="js/slider.js"></script>')
          }, 50);
         }
      })
  }, 1000)
})

projectBack();

}







//First Bar

var back = $('#back-arrow'),
    backBar = $('.back-bar'),
    next = $('#next-arrow'),
    nextBar = $('.next-bar'),
    project = $('#project-link'),
    vcase = $('#case'),
    mainBar = $('.main-back'),
    text = $('#back-text');

  

  $(backBar).on('mouseover', function(){
      $(backBar).on("mousemove", function moveBack(e) {
        TweenLite.to(back, 0.3, {x: e.pageX - 25, y: e.pageY - 280, ease: "power4. out"});
     });
  });

  $(backBar).on('mouseout', function(){
      TweenLite.to(back, 0.3, {x: '15%', y: '140%'});
  });

//Second Bar

  function moveNext(e) {
      TweenLite.to(next, 0.3, {x: 130 - (window.innerWidth - e.pageX), y: e.pageY - 280, ease: "power4. out"});
  }

  $(nextBar).on('mouseover',function(){
      $(nextBar).on('mousemove', moveNext);
  });

  $(nextBar).on('mouseout',function(){
      TweenLite.to(next, 0.3, {x: '15%', y: '140%'});
  });

//Case Move

  function moveCase(e) {
      TweenLite.to(vcase, 0.3, {x: e.pageX - 200, y: e.pageY - 60, ease: "power4. out"});
  }
  
  $(project).on('mouseover',function(){
      gsap.to(vcase, {duration: .3, opacity: 1})
      $(project).on('mousemove', moveCase);
  });
  
  $(project).on('mouseout',function(){
      TweenLite.to(vcase, 0.3, {opacity: 0});
  });

//Main Back Move

  function moveBack(e) {
      var offset = $(mainBar).offset();
      TweenLite.to(text, 0.3, {x: e.pageX, y: e.pageY - offset.top, ease: "power4. out"});
  }

  $(mainBar).on('mouseover', function(){
      gsap.to(".main-back img", {duration: .2, opacity: 0})
      gsap.to(text, {duration: .3, opacity: 1, rotate: -20})
      $(mainBar).on('mousemove', moveBack);
  });

  $(mainBar).on('mouseout', function(){
       gsap.to(".main-back img", {duration: .2, opacity: 1})
       gsap.to(text, {duration: .3, opacity: 0})
  });









  function remouse(){

    var back = $('#back-arrow'),
    backBar = $('.back-bar'),
    next = $('#next-arrow'),
    nextBar = $('.next-bar'),
    project = $('#project-link'),
    vcase = $('#case'),
    mainBar = $('.main-back'),
    text = $('#back-text');


    $(backBar).on('mouseover', function(){
       $(backBar).on("mousemove", function moveBack(e) {
         TweenLite.to(back, 0.3, {x: e.pageX - 25, y: e.pageY - 280, ease: "power4. out"});
       });
    });

    $(backBar).on('mouseout', function(){
        TweenLite.to(back, 0.3, {x: '15%', y: '140%'});
    });

   //Second Bar

    $(nextBar).on('mouseover',function(){
        $(nextBar).on('mousemove', moveNext);
    });

    function moveNext(e) {
      TweenLite.to(next, 0.3, {x: 130 - (window.innerWidth - e.pageX), y: e.pageY - 280, ease: "power4. out"});
    }

    $(nextBar).on('mouseout',function(){
        TweenLite.to(next, 0.3, {x: '15%', y: '140%'});
    });

   //Case Move
  
    $(project).on('mouseover',function(){
        gsap.to(vcase, {duration: .3, opacity: 1})
        $(project).on('mousemove', moveCase);
    });

    function moveCase(e) {
      TweenLite.to(vcase, 0.3, {x: e.pageX - 200, y: e.pageY - 60, ease: "power4. out"});
  }
  
    $(project).on('mouseout',function(){
        TweenLite.to(vcase, 0.3, {opacity: 0});
    });

    //Main Back Move

    $(mainBar).on('mouseover', function(){
        gsap.to(".main-back img", {duration: .2, opacity: 0})
        gsap.to(text, {duration: .3, opacity: 1, rotate: -20})
        $(mainBar).on('mousemove', moveBack);
    });

    function moveBack(e) {
      var offset = $(mainBar).offset();
      TweenLite.to(text, 0.3, {x: e.pageX, y: e.pageY - offset.top, ease: "power4. out"});
    }

    $(mainBar).on('mouseout', function(){
         gsap.to(".main-back img", {duration: .2, opacity: 1})
         gsap.to(text, {duration: .3, opacity: 0})
    });

  }


})