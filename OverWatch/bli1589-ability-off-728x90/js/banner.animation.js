'use strict';

/**
 * Run the animation functions.
 */

Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');
  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = ['images/bg.jpg', 'images/logo.svg', 'images/logo-2.svg', 'images/gBoxes.png', 'images/txt-1.png', 'images/txt-2.png', 'images/txt-3.png', 'images/txt-4.png', 'images/txt-5.png', 'images/txt-sale.png', 'images/txt-cta-over.png', 'images/txt-cta-label.svg'];

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

  // reference images
  /*
  this.ref1 = this.smartObject({
    backgroundImage: 'images/ref1.jpg',
    parent: this.banner
  });
  this.ref2 = this.smartObject({
    backgroundImage: 'images/ref2.jpg',
    parent: this.banner
  });
  */

  this.bgBlack = this.smartObject({
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 728,
    height: 90,
    autoAlpha: 0,
    parent: this.banner
  });
  // logo assets
  this.logo = this.smartObject({
    backgroundImage: 'images/logo.svg',
    retina: true,
    width: 218,
    height: 47,
    x: 241,
    y: 2,
    autoAlpha: 0,
    parent: this.banner
  });
  this.logo2 = this.smartObject({
    backgroundImage: 'images/logo-2.svg',
    retina: true,
    width: 209,
    height: 45,
    x: 356,
    y: 22,
    autoAlpha: 0,
    scale: 0.5,
    parent: this.banner
  });
  // text assets
  this.txt1 = this.smartObject({
    backgroundImage: 'images/txt-1.png',
    retina: true,
    x: '-500',
    autoAlpha: 0,
    parent: this.banner
  });
  this.txt2 = this.smartObject({
    backgroundImage: 'images/txt-2.png',
    retina: true,
    scale: .9,
    y: '180',
    parent: this.banner
  });
  this.txt3 = this.smartObject({
    backgroundImage: 'images/txt-3.png',
    retina: true,
    scale: .9,
    y: '180',
    parent: this.banner
  });
  this.txt4 = this.smartObject({
    backgroundImage: 'images/txt-4.png',
    retina: true,
    scale: .9,
    y: '180',
    parent: this.banner
  });
  this.txt5 = this.smartObject({
    backgroundImage: 'images/txt-5.png',
    retina: true,
    autoAlpha: 0,
    x: '50',
    scale: 0.5,
    parent: this.banner
  });
  this.txtSale = this.smartObject({
    backgroundImage: 'images/txt-sale.png',
    retina: true,
    autoAlpha: 0,
    parent: this.banner
  });
  // cta assets
  this.cta = this.smartObject({
    backgroundColor: "#ff7400",
    width: 104,
    height: 29,
    x: 588,
    y: 32,
    autoAlpha: 0,
    parent: this.banner
  });
  this.ctaOver = this.smartObject({
    backgroundImage: 'images/txt-cta-over.png',
    retina: true,
    width: 104,
    height: 29,
    parent: this.cta
  });
  this.ctaLabel = this.smartObject({
    backgroundImage: 'images/txt-cta-label.svg',
    retina: true,
    width: 104,
    height: 29,
    parent: this.cta
  });
  // game box assets
  this.boxes = this.smartObject({
    backgroundImage: 'images/gBoxes.png',
    retina: true,
    autoAlpha: 0,
    scale: .5,
    z: 0.1,
    rotationZ: 0.01,
    force3D: true,
    transformOrigin: "40% center",
    parent: this.banner
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {
  this.logo.center();
  this.logo2.set({ x: 250 });
  this.ctaOver.set({ autoAlpha: 0 });

  // reference images
  //this.ref1.set({ autoAlpha: 0 });
  //this.ref2.set({ autoAlpha: 0 });

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

  this.timeline = new TimelineLite({/*onComplete: loop*/}).addLabel('start', 0).to(this.txt1, 1, { x: 0, autoAlpha: 1, ease: Expo.easeOut }, 'start+=1').staggerTo([this.txt2, this.txt3, this.txt4], 0.5, { y: 0, ease: Expo.easeOut, scale: 1 }, 0.2, "start+=1.75").to(this.logo, .5, { autoAlpha: 1, ease: Expo.easeOut }, "start+=2.25")

  // endframe animations

  .addLabel('endFrame', 3).to([this.txt1, this.txt2, this.txt3, this.txt4, this.logo], 0.75, { autoAlpha: 0, ease: Expo.easeOut }, 'endFrame+=1.5').to(this.bgBlack, .5, { autoAlpha: 1, ease: Sine.easeIn }, 'endFrame+=1.5').to(this.boxes, 1, { autoAlpha: 1, ease: Elastic.easeOut.config(1, 0.75), scale: 1, z: 0, rotationZ: 0 }).to(this.txt5, .75, { autoAlpha: 1, x: 0, ease: Expo.easeOut, scale: 1 }).to(this.logo2, .75, { autoAlpha: 1, x: 356, ease: Expo.easeOut, scale: 1 }, "-=0.75").to([this.txtSale, this.cta], 1, { autoAlpha: 1, ease: Expo.easeOut });
};