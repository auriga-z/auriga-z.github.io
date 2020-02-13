$(document).ready(function() {


$('.nav-center a').on("click", function(event){
    event.preventDefault()

    const href = $(this).attr("href")

    window.history.pushState(null, href)

    $('.nav-center a').removeClass("active")
    $(this).addClass("active")

    const content = href + " #content";

    $('body').addClass("is-loading");

    setTimeout(function(){
        $("main").load(content, function(data, statusTxt){
           if(statusTxt == "success"){
             setTimeout(function(){
                $('body').removeClass("is-loading")
                $('body').addClass("is-loaded")
             }, 1000) 
             remouse();
           }
        })

    }, 1000)
})

//Projects Load

$('#project-link').on("click", function(event){
  event.preventDefault() 

  const href = $(this).attr("href")

  window.history.pushState(null, href)

  const content = href + " #content";

  $('body').addClass("is-loading");

  setTimeout(function(){
      $("main").load(content, function(data, statusTxt){
         if(statusTxt == "success"){
           setTimeout(function(){
              $('body').removeClass("is-loading")
              $('body').addClass("is-loaded")
           }, 1000) 
         }
      })
  }, 1000)
})

var firstLoad = false,
    isAnimating = false;

$(window).on('popstate', function() {
  if(firstLoad) {
    /*
    Safari emits a popstate event on page load - check if firstLoad is true before animating
    if it's false - the page has just been loaded 
    */
    var newPageArray = location.pathname.split('/'),
      //this is the url of the page to be loaded 
      newPage = newPageArray[newPageArray.length - 1];

    if( !isAnimating  &&  newLocation != newPage ){
      $('body').addClass("is-loading");

      setTimeout(function(){
        $("main").load(content, function(data, statusTxt){
           if(statusTxt == "success"){
             setTimeout(function(){
                $('body').removeClass("is-loading")
                $('body').addClass("is-loaded")
             }, 1000) 
            }
        })
      }, 1000)
    };
  }
  firstLoad = true;
});




//First Bar

var back = $('#back-arrow'),
    backBar = $('.back-bar'),
    next = $('#next-arrow'),
    nextBar = $('.next-bar'),
    project = $('#project-link'),
    vcase = $('#case');

function moveBack(e) {
  TweenLite.to(back, 0.3, {left: e.pageX - 25, top: e.pageY - 280});
}

$(backBar).on('mouseover', function(){
   $(backBar).on('mousemove', moveBack);
});

$(backBar).on('mouseout', function(){
   TweenLite.to(back, 0.3, {left: '30%', top: '43%'});
});

//Second Bar

function moveNext(e) {
TweenLite.to(next, 0.3, {right: (window.innerWidth - e.pageX) - 25, top: e.pageY - 280});
}

$(nextBar).on('mouseover',function(){
    $(nextBar).on('mousemove', moveNext);
});

$(nextBar).on('mouseout',function(){
    TweenLite.to(next, 0.3, {right: '30%', top: '43%'});
});

//Case Move

function moveCase(e) {
  TweenLite.to(vcase, 0.3, {left: e.pageX + 20, top: e.pageY + 20});
}
  
$(project).on('mouseover',function(){
    gsap.to(vcase, {duration: .3, opacity: 1})
    $(project).on('mousemove', moveCase);
});
  
$(project).on('mouseout',function(){
    TweenLite.to(vcase, 0.3, {opacity: 0});
});









function remouse(){
  //First Bar

  var back = $('#back-arrow'),
  backBar = $('.back-bar'),
  next = $('#next-arrow'),
  nextBar = $('.next-bar'),
  project = $('#project-link'),
  vcase = $('#case');
  
  function moveBack(e) {
    TweenLite.to(back, 0.3, {left: e.pageX - 25, top: e.pageY - 280});
  }

  $(backBar).on('mouseover', function(){
    $(backBar).on('mousemove', moveBack);
  });

  $(backBar).on('mouseout', function(){
    TweenLite.to(back, 0.3, {left: '30%', top: '43%'});
  });

  //Second Bar

  function moveNext(e) {
    TweenLite.to(next, 0.3, {right: (window.innerWidth - e.pageX) - 25, top: e.pageY - 280});
  }

  $(nextBar).on('mouseover',function(){
    $(nextBar).on('mousemove', moveNext);
  });

  $(nextBar).on('mouseout',function(){
    TweenLite.to(next, 0.3, {right: '30%', top: '43%'});
  });

  //Case Move

  function moveCase(e) {
    TweenLite.to(vcase, 0.3, {left: e.pageX + 20, top: e.pageY + 20});
  }

  $(project).on('mouseover',function(){
    gsap.to(vcase, {duration: .3, opacity: 1})
    $(project).on('mousemove', moveCase);
  });

  $(project).on('mouseout',function(){
    TweenLite.to(vcase, 0.3, {opacity: 0});
  });
}
});





const back = document.querySelector(".back-bar"),
      next = document.querySelector(".next-bar"),
      pLink = document.querySelector("#project-link");

        var current_link = 0;
        const links = ['projects/prj1.html', 'projects/prj2.html', 'projects/prj3.html'];

        CustomEase.create("usmooth", "M0,0 C0,0 0.00462,0.18342 0.01344,0.30078 0.01997,0.38761 0.02339,0.43836 0.03924,0.52203 0.05593,0.61005 0.07326,0.66432 0.09835,0.74877 0.10386,0.7673 0.11016,0.77922 0.12042,0.7952 0.13199,0.8132 0.14156,0.82447 0.15701,0.8401 0.17973,0.86308 0.19491,0.87683 0.2207,0.89664 0.24652,0.91647 0.26346,0.93064 0.29183,0.94363 0.33068,0.96143 0.36005,0.97218 0.40277,0.98004 0.47076,0.99255 0.51563,0.99568 0.58774,0.99809 0.74769,1.00343 1,1 1,1 ");

        function work0(){
          current_link = 0;
          var tl = gsap.timeline({defaults: {duration: .1, ease: "usmooth"}});

              tl.add(disAssign)
                .to(".image-cover",{duration: .6, y: "0", borderRadius: 0, transition: .6})
                .to("#row1", {clearProps:"all"})
                .to("#row2", {clearProps:"all"})
                .to(".image-cover", {duration: .6, y: "-100%"}, "+=1")
                .to(".inverted-radius", {duration: .4, borderRadius: "0 0 0 0"}, "-=.5")
                .to(".images", {duration: .4, backgroundSize: "cover"}, "-=1")
              .to(".image-cover", {clearProps:"all"}, "+=.5").to(".inverted-radius", {clearProps:"all"})

          tl.timeScale(1);

          TweenLite.delayedCall(1, changeImg, [0]); 
          TweenLite.delayedCall(3, btnAssign); 

          function btnAssign(){
            gsap.to(back, {opacity: 1})
            gsap.to(next, {opacity: 1})
            back.setAttribute("onclick", "work2();");
            next.setAttribute("onclick", "work1();");
          } 

          pLink.setAttribute("href", links[current_link]);
        } 

        
        function work1(){
          current_link = 1;
          var tl = gsap.timeline({defaults: {duration: .1, ease: "usmooth"}});

                tl.add(disAssign)
                  .to(".image-cover",{duration: .6, y: "0", borderRadius: 0, transition: .6})
                  .to("#row1", {y: "-33.2%"})
                  .to("#row2", {y: "-33.5%"})
                  .to(".image-cover", {duration: .6, y: "-100%"}, "+=1")
                  .to(".inverted-radius", {duration: .4, borderRadius: "0 0 0 0"}, "-=.5")
                  .to(".images", {duration: .4, backgroundSize: "cover"}, "-=1")
                .to(".image-cover", {clearProps:"all"}, "+=.5").to(".inverted-radius", {clearProps:"all"})

            tl.timeScale(1);

            TweenLite.delayedCall(1, changeImg, [1]);
            TweenLite.delayedCall(3, btnAssign);  

            function btnAssign(){
              gsap.to(back, {opacity: 1})
              gsap.to(next, {opacity: 1})
              back.setAttribute("onclick", "work0();");
              next.setAttribute("onclick", "work2();");
            } 

            pLink.setAttribute("href", links[current_link]);
        }


        function work2(){
          current_link = 2;
          var tl = gsap.timeline({defaults: {duration: .1, ease: "usmooth"}});

              tl.add(disAssign)
                .to(".image-cover",{duration: .6, y: "0", borderRadius: 0, transition: .6})
                .to("#row1", {y: "-66.62%"})
                .to("#row2", {y: "-66.65%"})
                .to(".image-cover", {duration: .6, y: "-100%"}, "+=1")
                .to(".inverted-radius", {duration: .4, borderRadius: "0 0 0 0"}, "-=.5")
                .to(".images", {duration: .4, backgroundSize: "cover"}, "-=1")
              .to(".image-cover", {clearProps:"all"}, "+=.5").to(".inverted-radius", {clearProps:"all"})

          tl.timeScale(1);

          TweenLite.delayedCall(1, changeImg, [2]); 
          TweenLite.delayedCall(3, btnAssign); 

          function btnAssign(){
            gsap.to(back, {opacity: 1})
            gsap.to(next, {opacity: 1})
            back.setAttribute("onclick", "work1();");
            next.setAttribute("onclick", "work0();");
          } 

          pLink.setAttribute("href", links[current_link]);
        }

        
        function disAssign(){
          gsap.to(back, {opacity: .2})
          gsap.to(next, {opacity: .2})
          back.setAttribute("onclick", " ");
          next.setAttribute("onclick", " ");
        }

        function changeImg(num){
          var Images = ["assets/p1.jpg", "assets/p2.jpg", "assets/p3.jpg"];
          var container = document.querySelector(".images");
          container.style = "background-image: url('" + Images[num] + "');";
        }