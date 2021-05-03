import Highway from '@dogstudio/highway';
import { gsap } from "gsap";
import { lscroll } from './scroll';
import { smooth } from "./easing";


class home extends Highway.Transition {
    in({ from, to, trigger, done }) {

        console.log("Home In");

        const loader = gsap.timeline({defaults:{ease: smooth}}),
              home_title_anim = gsap.timeline({defaults:{ease: smooth}});



        home_title_anim.from(".js-hero-title .line-child", {y: "100%", stagger: .4, duration: 1.9})
        .from(".c-visual-line", {scaleX: 0, duration: .6})
        .fromTo("#v_path", {drawSVG: 0}, {drawSVG: "100%", duration: .2, ease: "power1.out"}, "-=1")
        .fromTo("#i_path", {drawSVG: 0}, {drawSVG: "100%", duration: .3, ease: "power1.out"})
        .fromTo("#s_path", {drawSVG: 0}, {drawSVG: "100%", duration: .4, ease: "power1.out"})
        .fromTo("#u_path", {drawSVG: 0}, {drawSVG: "100%", duration: .5, ease: "power1.out"})
        .fromTo("#a_path", {drawSVG: 0}, {drawSVG: "100%", duration: .6, ease: "power1.out"})
        .fromTo("#l_path", {drawSVG: 0}, {drawSVG: "100%", duration: .8, ease: smooth})
        .fromTo("#dot_path", {drawSVG: 0}, {drawSVG: "100%", duration: .3, ease: "power1.out"})
        .from(".c-title .o-title-small .line-child", {y: "100%", duration: .8}, "-=1");
    
        // loader.to(".js-split .line-child", {y: "-100%", stagger: .2})
        // //.to(".js-loader-title-child", {y: 0, rotate: -3, stagger: .4})
        // .to(".js-loader-title-child", {y: "-108%", rotate: -3, duration: 1.6, stagger: .4}, "+=.5")
        // .fromTo(".c-loader__bg", {y: "0"}, {y: "-100%", duration: .8, stagger: .1, onComplete:()=>{done();}})
        // .set(".c-loader__bg", {y: "100%"})
        // .set(".js-loader-title-child", {clearProps: "y,rotate"})
        
        // .to(".js-loader_bg", {y: "100%", duration: 1, clearProps: 'all', onComplete: ()=> {done();}})
        
        lscroll.update(); 
    }

    out({from, done}){
        //this is called first

        console.log("Home Out");

        const loader = gsap.timeline({defaults:{ease: smooth}});
    
        loader.to(from, {y: "-10%", opacity: 0, duration: 1, onComplete: ()=>{from.remove();}})
        .to(".c-play__bg", {y: 0, duration: .8, onComplete:()=>{done();}})
        //.set(".c-play__bg", {opacity: 0, duration: .8, onComplete:()=>{done();}})
        
    }
}

export default home;
