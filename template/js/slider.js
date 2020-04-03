var title = document.getElementsByClassName("ptitle");

const links = ['prj1.html', 'prj1.html', 'prj1.html'];

function work0(){
var tl = gsap.timeline({defaults: {duration: .1, ease: "power4. out"}});

  tl.add(disAssign)
    .to(".image-cover",{duration: .5, y: "0", borderRadius: 0}) 
    .to(title[2], {y: "-200%", opacity: 0})
    .to(title[5], {y: "-200%", opacity: 0})
    .to(title, {duration: 0, clearProps:"y"}, "+=.5")
    .to(title[0], {y: "100%", opacity: 1})
    .to(title[3], {y: "100%", opacity: 1})
    .to(".image-cover", {duration: .5, y: "-100%"}, "+=.5")
    .to(".inverted-radius", {duration: .4, borderRadius: "0 0 0 0"}, "-=.5")
    .to(".images", {duration: .4, backgroundSize: "cover"}, "-=1")
    .to(".image-cover", {clearProps:"all"}, "+=.5").to(".inverted-radius", {clearProps:"all"})

TweenLite.delayedCall(1, changeImg, [0]); 
TweenLite.delayedCall(3.1, btnAssign, ["work2();", "work1();"]); 

document.querySelector("#project-link").setAttribute("href", links[0]);
} 


function work1(){
var tl = gsap.timeline({defaults: {duration: .1, ease: "power4. out"}});

    tl.add(disAssign)
      .to(".image-cover",{duration: .5, y: "0", borderRadius: 0})
      .to(title[0], {y: "-200%", opacity: 0})
      .to(title[3], {y: "-200%", opacity: 0})
      .to(title, {duration: 0, clearProps:"y"}, "+=.5")
      .to(title[1], {y: "100%", opacity: 1})
      .to(title[4], {y: "100%", opacity: 1})
      .to(".image-cover", {duration: .5, y: "-100%"}, "+=.5")
      .to(".inverted-radius", {duration: .4, borderRadius: "0 0 0 0"}, "-=.5")
      .to(".images", {duration: .4, backgroundSize: "cover"}, "-=1")
    .to(".image-cover", {clearProps:"all"}, "+=.5").to(".inverted-radius", {clearProps:"all"})

TweenLite.delayedCall(1, changeImg, [1]);
TweenLite.delayedCall(3.1, btnAssign, ["work0();", "work2();"]);  

document.querySelector("#project-link").setAttribute("href", links[1]);
}


function work2(){
var tl = gsap.timeline({defaults: {duration: .1, ease: "power4. out"}});

  tl.add(disAssign)
    .to(".image-cover",{duration: .5, y: "0", borderRadius: 0})
    .to(title[1], {y: "-200%", opacity: 0})
    .to(title[4], {y: "-200%", opacity: 0})
    .to(title, {duration: 0, clearProps:"all"}, "+=.5")
    .to(title[2], {y: "100%", opacity: 1})
    .to(title[5], {y: "100%", opacity: 1})
    .to(".image-cover", {duration: .5, y: "-100%"}, "+=.5")
    .to(".inverted-radius", {duration: .4, borderRadius: "0 0 0 0"}, "-=.5")
    .to(".images", {duration: .4, backgroundSize: "cover"}, "-=1")
  .to(".image-cover", {clearProps:"all"}, "+=.5").to(".inverted-radius", {clearProps:"all"})

TweenLite.delayedCall(1, changeImg, [2]); 
TweenLite.delayedCall(3.1, btnAssign, ["work1();", "work0();"]); 

document.querySelector("#project-link").setAttribute("href", links[2]);
}


function btnAssign(a, b){
  gsap.to(".back-bar", {opacity: 1})
  gsap.to(".next-bar", {opacity: 1})
  document.querySelector(".back-bar").setAttribute("onclick", a);
  document.querySelector(".next-bar").setAttribute("onclick", b);
} 

function disAssign(){
  gsap.to(".back-bar", {opacity: .2})
  gsap.to(".next-bar", {opacity: .2})
  document.querySelector(".back-bar").setAttribute("onclick", " ");
  document.querySelector(".next-bar").setAttribute("onclick", " ");
}

function changeImg(num){
  var Images = ["assets/p1.jpg", "assets/p2.jpg", "assets/p3.jpg"];
  var container = document.querySelector(".images");
  container.style = "background-image: url('" + Images[num] + "');";
}