export default class Main {

  constructor(){
    this.$window = $(window);
    this.$container = $('.container');
    this.$sliderWiew = $('.gallery__view');
    this.$viewImg = $('.gallery__img');
    this.$sliderThumbs = $('.gallery__thumbs-wrapper');
    this.$thumbsImg = $('.gallery__thumbs');
    this.$scrollBtn = $('.scroll__btn');
    this.$rightBtn = $(".right__btn");
    this.$leftBtn = $(".left__btn");
    this.$spinner = $('.spinner');
  }
}