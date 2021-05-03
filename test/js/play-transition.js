import Highway from '@dogstudio/highway';
import { gsap } from "gsap";
import { lscroll } from './scroll';
import { smooth } from "./easing";


class play extends Highway.Transition {
    in({ from, to, trigger, done }) {

        console.log("Play In");

        const loader = gsap.timeline({defaults:{ease: smooth}});
    
        loader.set(".c-play__bg", {zIndex: 1, opacity: 1})
        //.to(".js-loader-title-child", {y: 0, rotate: -3, stagger: .4})
        .fromTo(".js-hero-title .line-child", {y: "100%"}, {y: "0", duration: 1.6})
        .fromTo(".c-play-title > a", {x: "50%", opacity: 0}, {x: 0, opacity: 1, duration: .6})
        .fromTo(".js-play-row", {y: "50%", opacity: 0}, {y: 0, opacity: 1, duration: .8, onComplete:()=>{done();}})
        //.set(".c-loader__bg", {y: "100%"})
        //.set(".js-loader-title-child", {clearProps: "y,rotate"})
        
        // .to(".js-loader_bg", {y: "100%", duration: 1, clearProps: 'all', onComplete: ()=> {done();}})
        
        lscroll.update(); 
    }

    out({ from, done }){
        //this is called first

        console.log("Play Out");

         const loader = gsap.timeline({defaults:{ease: smooth}});
    
         loader.to(from, {y: "-10%", opacity: 0, duration: 1, onComplete: ()=>{from.remove();}})
         .to(".c-play__bg", {y: "-100%", duration: .8})
         .set(".c-play__bg", {opacity: 0, onComplete:()=>{done();}})
        // .set(".c-play__bg", {opacity: 0, duration: .8, onComplete:()=>{done();}})
        //.to(".js-loader-title-child", {y: 0, duration: 1.6, rotate: 0, stagger: .4})
    }
}

export default play;
