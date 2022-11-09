import _ from 'lodash';
import './css/style.css';
import Data from './js/data.js';
import Main from './js/main.js';
import Scroll from './js/scroll.js';
import Renderer from './js/renderer.js';

let data = new Data();
$(window).on("load", ()=>{
  let main = new Main();
  let scroll = new Scroll();
  $.when(data.getData()).then((data)=>{
    let renderer = new Renderer();
    renderer.showImages(data);
    renderer.changeBackImage(data);
    $('.thumb__img').on('load', ()=>renderer.showContent());
    main.$rightBtn.on('click',(event)=>scroll.scroll(event, "right"));
    main.$leftBtn.on('click',(event)=>scroll.scroll(event, "left"));
    setTimeout(()=>scroll.scrollBtn(),300);
    main.$window.on('mouseenter resize', (event)=>scroll.scrollBtn(event));
  })
})