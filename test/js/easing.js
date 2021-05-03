import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);


let smooth = CustomEase.create("smooth", "M0,0 C0.084,0.514 0.208,0.69 0.3,0.8 0.422,0.92 0.496,1 1,1");

export {smooth}