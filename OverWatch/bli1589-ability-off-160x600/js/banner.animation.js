'use strict';

/**
 * Run the animation functions.
 */

Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = ['images/bg.jpg', 'images/logo.svg', 'images/logo-2.svg', 'images/gBox-1.png', 'images/gBox-2.png', 'images/gBox-3.png', 'images/txt-1.png', 'images/txt-2.png', 'images/txt-3.png', 'images/txt-4.png', 'images/txt-5.png', 'images/txt-sale.png', 'images/txt-cta.svg', 'images/txt-cta-over.png', 'images/txt-cta-label.svg'];

  var _this = this;
  this.preloadImages(this.images, function () {
    _this.createElements();
    _this.setup();
    _this.hidePreloader();
    _this.animate();
    _this.bindEvents();
  });
};

/**
 * Create dom elements.
 */
Banner.prototype.createElements = function () {
  // background elements
  this.bg = this.smartObject({
    backgroundImage: 'images/bg.jpg',
    retina: true,
    parent: this.banner
  });
  this.bgBlack = this.smartObject({
    backgroundColor: 'rgba(0,0,0,0.5)',
    //retina: true,
    width: 160,
    height: 600,
    parent: this.banner
  });
  // logo assets
  this.logo = this.smartObject({
    backgroundImage: 'images/logo.svg',
    retina: true,
    width: 142,
    height: 31,
    x: 0,
    y: '-35',
    parent: this.banner
  });
  this.logo2 = this.smartObject({
    backgroundImage: 'images/logo-2.svg',
    retina: true,
    width: 150,
    height: 31,
    x: 6,
    y: 36,
    parent: this.banner
  });
  this.blackBar = this.smartObject({
    //backgroundImage: 'images/logo-2.svg',
    //retina: true,
    backgroundColor: 'rgba(0,0,0,0.21)',
    width: 58,
    height: 3,
    x: 54,
    y: 102,
    parent: this.banner
  });
  // text assets
  this.txt1 = this.smartObject({
    backgroundImage: 'images/txt-1.png',
    retina: true,
    y: '-90',
    parent: this.banner
  });
  this.txt2 = this.smartObject({
    backgroundImage: 'images/txt-2.png',
    retina: true,
    x: '-160',
    parent: this.banner
  });
  this.txt3 = this.smartObject({
    backgroundImage: 'images/txt-3.png',
    retina: true,
    x: '320',
    parent: this.banner
  });
  this.txt4 = this.smartObject({
    backgroundImage: 'images/txt-4.png',
    retina: true,
    x: '-160',
    parent: this.banner
  });
  this.txt5 = this.smartObject({
    backgroundImage: 'images/txt-5.png',
    retina: true,
    x: '320',
    parent: this.banner
  });
  this.txtSale = this.smartObject({
    backgroundImage: 'images/txt-sale.png',
    retina: true,
    parent: this.banner
  });
  // cta assets
  this.cta = this.smartObject({
    backgroundImage: 'images/txt-cta.svg',
    //retina: true,
    width: 131,
    height: 46,
    x: 15,
    y: 495,
    parent: this.banner
  });
  this.ctaOver = this.smartObject({
    backgroundImage: 'images/txt-cta-over.png',
    retina: true,
    width: 131,
    height: 46,
    parent: this.cta
  });
  this.ctaLabel = this.smartObject({
    backgroundImage: 'images/txt-cta-label.svg',
    retina: true,
    width: 131,
    height: 46,
    parent: this.cta
  });
  // game box assets
  this.box1 = this.smartObject({
    backgroundImage: 'images/gBox-1.png',
    retina: true,
    parent: this.banner
  });
  this.box2 = this.smartObject({
    backgroundImage: 'images/gBox-2.png',
    retina: true,
    parent: this.banner
  });
  this.box3 = this.smartObject({
    backgroundImage: 'images/gBox-3.png',
    retina: true,
    parent: this.banner
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {
  this.logo.center();
  this.logo.set({ autoAlpha: 0 });
  this.logo2.set({ autoAlpha: 0 });
  this.blackBar.set({ autoAlpha: 0, scale: 0 });
  this.bgBlack.set({ autoAlpha: 0 });
  this.txt2.set({ scale: .85 });
  this.txt3.set({ scale: .85 });
  this.txt4.set({ scale: .85 });
  this.txt5.set({ scale: .85 });
  this.txtSale.set({ autoAlpha: 0 });
  this.cta.set({ autoAlpha: 0 });
  this.ctaOver.set({ autoAlpha: 0 });
  this.box1.set({ autoAlpha: 0, scale: 1.4, z: 0.1, rotationZ: 0.01, force3D: true });
  this.box2.set({ autoAlpha: 0, scale: 1.4, z: 0.1, rotationZ: 0.01, force3D: true });
  this.box3.set({ autoAlpha: 0, scale: 1.4, z: 0.1, rotationZ: 0.01, force3D: true });

  // cta event listeners
  this.banner.addEventListener('mouseover', function (e) {
    TweenLite.to(banner.ctaOver, 1, { autoAlpha: 1, ease: Expo.easeOut });
  });
  this.banner.addEventListener('mouseout', function (e) {
    TweenLite.to(banner.ctaOver, 0.2, { autoAlpha: 0, ease: Expo.easeOut });
  });
};

/**
 * Hide the preloader.
 */
Banner.prototype.hidePreloader = function () {
  TweenLite.to('.preloader', 1, { autoAlpha: 0 });
};

/**
 * Animation timeline.
 */
Banner.prototype.animate = function () {
  var _this = this;

  function loop() {
    _this.timeline.gotoAndPlay('start');
  }

  this.timeline = new TimelineLite({/*onComplete: loop*/}).addLabel('start', 0).to(this.txt1, 1, { y: 0, ease: Expo.easeOut }, 'start+=1').to(this.blackBar, .5, { autoAlpha: 1, scale: 1 }, 'start+=1.75').to(this.txt2, .75, { x: 0, ease: Expo.easeOut, scale: 1 }, 'start+=2.25').to(this.txt3, .75, { x: 0, ease: Expo.easeOut, scale: 1 }, 'start+=2.25').to(this.logo, .5, { autoAlpha: 1, ease: Expo.easeOut }, '-=.75')

  // endframe animations
  .addLabel('endFrame', 4.5).to([this.txt1, this.blackBar, this.txt2, this.txt3, this.logo], 0.75, { autoAlpha: 0, ease: Expo.easeOut }, 'endFrame+=1').to(this.bgBlack, .5, { autoAlpha: 1, ease: Sine.easeIn }, 'endFrame+=1.25').to(this.txt4, .75, { x: 0, ease: Expo.easeOut, scale: 1 }).to(this.txt5, .75, { x: 0, ease: Expo.easeOut, scale: 1 }, '-=.75').staggerTo([this.box1, this.box2, this.box3], 1, { autoAlpha: 1, ease: Elastic.easeOut.config(1, 0.75), scale: 1, z: 0, rotationZ: 0 }, 0.25, '-=1').to([this.logo2, this.txtSale, this.cta], 1, { autoAlpha: 1, ease: Expo.easeOut }, '-=1.5');
};