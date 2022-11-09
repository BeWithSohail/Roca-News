import Main from './main.js';

export default class Scroll extends Main{
  constructor(){
    super();
  }
  scrollBtn(){
    let btnHeight = this.$sliderThumbs.height(); 
    this.$scrollBtn.css('height', btnHeight);

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.$scrollBtn.fadeIn(300);
    } else{
      this.$sliderThumbs.on('mouseenter mouseleave', (evt)=> {
      evt.type === 'mouseenter' ? this.$scrollBtn.fadeIn(300) : this.$scrollBtn.fadeOut(300);
    });
    }
  }

  scroll(event, direction){
    let thumbWidth = $('.thumb').width();
    let th = this.$thumbsImg.offset();
    let thWidth, thWrapper;
    if(direction === "right"){
      thWrapper = $('.thumb').last().offset();
      thWidth = th.left + this.$thumbsImg.width() - $('.thumb').width();
      if(thWrapper.left >= thWidth ){
        this.$scrollBtn.css('opacity', '0.6');
        $('.thumb').animate({right: '+=' + thumbWidth});
      } else {
        this.$scrollBtn.css('opacity', '0.2');
      }
    } else {
      thWrapper = $('.thumb').first().offset();
      thWidth = th.left;
      if(thWrapper.left != th.left ){
        this.$scrollBtn.css('opacity', '0.6');
        $('.thumb').animate({right: '-=' + thumbWidth});
      } else {
        this.$scrollBtn.css('opacity', '0.2');
      }
    }
    this.$scrollBtn.prop('disabled', true);
    setTimeout(()=> {
      this.$scrollBtn.prop('disabled', false);
    },400);
    thWrapper = 0        
  }
}