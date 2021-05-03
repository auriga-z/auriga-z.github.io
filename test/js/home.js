import { gsap } from "gsap";
import { lscroll } from "./scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";
import { smooth } from "./easing";


gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrollTrigger);



// ARROW BTN ANIMATION

let arrow_btn = document.querySelectorAll(".c-project-info");

arrow_btn.forEach(arrow);

let btn_anim = gsap.timeline({ease: smooth});

function arrow(btn){
    btn.addEventListener("mouseenter", ()=>{

      btn_anim.set(btn.querySelector("#line1"), {drawSVG: "100%"})
      .set(btn.querySelector("#line2"), {drawSVG: 0})
      .set(btn.querySelector("#arrow-head-1"), {drawSVG: "100%"})
      .set(btn.querySelector("#arrow-head-2"), {drawSVG: 0})
      .to(btn.querySelector("#line1"), {drawSVG: "100% 100%", duration: .2})
      .to(btn.querySelector("#arrow-head-1"), {drawSVG: "100% 100%", duration: .2})
      .to(btn.querySelector("#arrow-head-2"), {drawSVG: "100%", duration: .4})
      .to(btn.querySelector("#line2"), {drawSVG: "100%", duration: .2});

    });
}




// SPLIT THE TEXT

let parent = new SplitText(".js-split", {type: "lines", linesClass: "line-parent"});
let child = new SplitText(".js-split > .line-parent", {type: "lines", linesClass: "line-child"});




// ONLOAD ANIMATION

let first_reveal = gsap.timeline({paused: true, defaults:{ease: smooth}}),
    home_title_anim = gsap.timeline({paused: true, defaults:{ease: smooth}});

first_reveal.to(".js-split .line-child", {y: "-100%"})
.to(".js-loader-title-child", {y: 0, rotate: 0, stagger: .4, duration: 1.4})
.to(".js-loader-title-child", {y: "-108%", rotate: -3, stagger: .4, duration: 1.4}, "+=1")
.fromTo(".c-loader__bg", {y: "0", stagger: .4}, {y: "-100%", duration: 1, stagger: .1, onComplete: ()=>{home_title_anim.play()}})
.set(".c-loader__bg", {y: "100%"})
.set(".js-loader-title-child", {clearProps: "y,rotate"});

home_title_anim.from(".js-hero-title .line-child", {y: "100%", stagger: .4, duration: 1.9})
.from(".c-visual-line", {scaleX: 0, duration:.6})
.fromTo("#v_path", {drawSVG: 0}, {drawSVG: "100%", duration: .2, ease: "power1.out"}, "-=1")
.fromTo("#i_path", {drawSVG: 0}, {drawSVG: "100%", duration: .3, ease: "power1.out"})
.fromTo("#s_path", {drawSVG: 0}, {drawSVG: "100%", duration: .4, ease: "power1.out"})
.fromTo("#u_path", {drawSVG: 0}, {drawSVG: "100%", duration: .5, ease: "power1.out"})
.fromTo("#a_path", {drawSVG: 0}, {drawSVG: "100%", duration: .6, ease: "power1.out"})
.fromTo("#l_path", {drawSVG: 0}, {drawSVG: "100%", duration: .8, ease: smooth})
.fromTo("#dot_path", {drawSVG: 0}, {drawSVG: "100%", duration: .3, ease: "power1.out"})
.from(".c-title .o-title-small .line-child", {y: "100%", duration: .8}, "-=1");

window.onload = ()=>{
  first_reveal.play();
}





// MAKE SCROLL TRIGGER WORK WITH LOCO

lscroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#js-scroll", {
    scrollTop(value) {
      return arguments.length ? lscroll.scrollTo(value, 0, 0) : lscroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#js-scroll").style.transform ? "transform" : "fixed"
});

ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize" // notice "resize" isn't in the list
});


// SCROLL TRIGGER ANIMATIONS

gsap.utils.toArray(".js-reveal").forEach(section => {
    gsap.from(section.querySelectorAll(".line-child"), {
      scrollTrigger:{
        trigger: section,
        scroller: "#js-scroll"
      },
      y: "100%",
      ease: smooth,
      duration: 1.8,
      stagger: 0.2
    })
});

gsap.utils.toArray(".c-project").forEach(section => {
  gsap.from(section.querySelectorAll("a > img"), {
    scrollTrigger:{
      trigger: section,
      scroller: "#js-scroll"
    },
    scale: 1.4,
    ease: "Power4.out",
    duration: .9,
  })
});

gsap.utils.toArray(".c-project").forEach(section => {
  gsap.from(section.querySelectorAll("a > img"), {
    scrollTrigger:{
      trigger: section,
      scroller: "#js-scroll",
      scrub: true
    },
    y: "-20%",
    ease: "Power4.out",
    duration: .8,
  })
});

// window.addEventListener("resize", resize)

// resize();

// function resize() {
    
//   if (window.matchMedia("(min-width: 900px)").matches) {
//     let card = document.querySelectorAll(".js-cards > div");

//     gsap.from(card[0], {scrollTrigger:{trigger: ".c-about", scroller: "#js-scroll", scrub: true}, y: "-10%", rotate:"-20deg"})
//     gsap.from(card[1], {scrollTrigger:{trigger: ".c-about", scroller: "#js-scroll", scrub: true}, y: "-5%", rotate:"-10deg"})
//     gsap.from(card[2], {scrollTrigger:{trigger: ".c-about", scroller: "#js-scroll", scrub: true}, y: "-5%", rotate:"-5deg"})
//   }
// }



//MAKE SCROLLTRIGGER WORK AGAIN

ScrollTrigger.addEventListener("refresh", () => lscroll.update());
ScrollTrigger.refresh();




// TIME FUNCTIONS

function calcTime(offset) {
  let d = new Date();
  let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  let nd = new Date(utc + (3600000*offset));
  return nd.getHours() + ":" + nd.getMinutes();
}

(() => {
  if(window.matchMedia("(min-width: 900px)").matches) {
    let card = document.querySelectorAll(".js-cards > div");

    gsap.from(card[0], {scrollTrigger:{trigger: ".c-about", scroller: "#js-scroll", scrub: true}, y: "-10%", rotate:"-20deg"})
    gsap.from(card[1], {scrollTrigger:{trigger: ".c-about", scroller: "#js-scroll", scrub: true}, y: "-5%", rotate:"-10deg"})
    gsap.from(card[2], {scrollTrigger:{trigger: ".c-about", scroller: "#js-scroll", scrub: true}, y: "-5%", rotate:"-5deg"})
  }

  document.querySelectorAll(".js-year").forEach((elm)=>{elm.innerHTML ="©" + new Date().getFullYear()});
  document.querySelectorAll(".js-time")[0].innerHTML = calcTime(+5.5);
})();

setInterval(() => {
document.querySelectorAll(".js-time")[0].innerHTML = calcTime(+5.5);
}, 60000);