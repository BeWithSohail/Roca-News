import Main from './main.js';

export default class Renderer extends Main {
  constructor(){
    super();
  }
  showImages(data) {
    let thumbs = data;
    let imageSrc = [];
    let images = [];
    let i;
    for(i = 0; i< thumbs.length; i++){
      imageSrc.push(thumbs[i].src);
    }
    for (i = 0; i < imageSrc.length; i++) {
      images[i] = new Image();
      images[i].src = imageSrc[i]+'.jpg';
    }
    
    this.$sliderWiew.css('background-image','url(' + thumbs[0].src + '.' + thumbs[0].type + ')');
    for(i = 0; i < thumbs.length; i++){
      this.$thumbsImg.append(
        `<div class = "thumb">
          <a href="${thumbs[i].link}" class="thumb__link">
            <img class = "thumb__img" src = "${thumbs[i].src}-thumb.${thumbs[i].type}">
          </a>
        </div>`
      );
    }
  }

  changeBackImage(thumbs) {
    $('.thumb__link').each((index, link)=>{
      $(link).on('click',()=> {
        this.$sliderWiew.animate({
          opacity: 0
        }, 'fast', ()=> {
          this.$sliderWiew
            .css({
            'background-image': 'url(' + thumbs[index].src + '.' + thumbs[index].type + ')'
          })
            .animate({
            opacity: 1
          });
        });
      });
    });
  }

  showContent() {
    this.$container.animate({opacity:'1'},1000);
    this.$spinner.fadeOut();
  }
}