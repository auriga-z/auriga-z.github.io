import { lscroll } from "./scroll";
import Highway from '@dogstudio/highway';
import home from "./home-transition";
import play from "./play-transition";
import home_js from "./home-renderer";


const H = new Highway.Core({
  renderers: {
    //home: home_js
  },
  transitions: {
    home: home,
    play: play
  }
});


H.on('NAVIGATE_END', () => { 
  console.log("update is called"); 
  lscroll.update();  
});
