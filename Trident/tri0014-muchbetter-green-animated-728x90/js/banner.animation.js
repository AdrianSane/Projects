'use strict';

/**
 * Run the animation functions.
 */

Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');
  this.ad = document.querySelector('.ad');
  this.controls = document.querySelector('.controls');
  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = ['images/action1.jpg', 'images/action2.jpg', 'images/cta.svg', 'images/packaging.png', 'images/pattern.svg', 'images/txt1.png', 'images/txtLegal.png', 'images/replay.svg'];

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
 * Make a bunch of svgs!
 * w = width of the svg
 * h = height of the svg
 * svg = path to svg
 */
Banner.prototype.svgGrid = function (w, h, svg, container) {
  // figure out how many rows and columnns based on the width/height of the banner
  var cols = Math.floor(this.bannerWidth * 2 / w);
  var rows = Math.floor(this.bannerHeight * 4 / h);

  // make an array to hold each svg so we can animate it later
  var tiles = [];

  // make rows
  for (var i = 0; i < rows; i++) {
    // make columns
    for (var j = 0; j < cols; j++) {

      // set the x and y position of each tile
      var xPos = j * w - 1;
      // we want to stagger the y position of each tile,
      // so we're offsetting by half of the height of the tile
      var vOffset = h / 2;
      // set the top position of the tile, but shifted up by half
      // the height of the tile, so it starts above the top border
      // of the banner
      var yPos = i * h - 2 - vOffset;
      // for every even-numbered tile, offset the tile position again
      // to create the staggered pattern effect
      yPos += j % 2 == 0 ? vOffset : 0;

      // create a new smartObject for each of our tiles, setting its properties
      var _svg = this.smartObject({
        backgroundImage: svg,
        parent: container,
        x: xPos,
        y: yPos,
        width: w,
        height: h,
        transfomrOrigin: '50% 50%',
        // set a random opacity for each tile
        opacity: randRange(0.05, 0.10)
      });

      // stash each svg in our tiles array
      tiles.push(_svg);
    }
    // reverse the order of the array so they animate from right to left
    tiles.reverse();
  }

  return tiles;

  // generate a random number between two numbers
  function randRange(min, max) {
    return min + (max - min) * Math.random();
  }
};

/**
 * Create dom elements.
 */
Banner.prototype.createElements = function () {

  this.bg = this.smartObject({
    backgroundColor: "#06b258",
    width: 728,
    height: 90,
    parent: this.ad
  });

  // reference bgs
  this.ref = this.smartObject({
    // backgroundImage: 'images/ref.jpg',
    width: 728,
    height: 90,
    opacity: .5,
    parent: this.ad
  });

  // make a container to hold the grid background for tiles
  this.container = this.smartObject({
    parent: this.ad,
    id: 'grid'
  });

  // character animation
  this.action2 = this.smartObject({
    backgroundImage: 'images/action2.jpg',
    width: 604,
    height: 90,
    parent: this.ad
  });
  this.action1 = this.smartObject({
    backgroundImage: 'images/action1.jpg',
    width: 604,
    height: 90,
    parent: this.ad
  });
  // white bar
  this.whiteBG = this.smartObject({
    backgroundColor: "#fff",
    width: 205,
    height: 90,
    left: 522,
    parent: this.ad
  });
  // trident packaging
  this.package = this.smartObject({
    backgroundImage: 'images/packaging.png',
    retina: true,
    width: 728,
    height: 90,
    parent: this.ad
  });
  // text assets
  this.txt1 = this.smartObject({
    backgroundImage: 'images/txt1.png',
    retina: true,
    parent: this.ad
  });
  this.txtLegal = this.smartObject({
    backgroundImage: 'images/txtLegal.png',
    width: 728,
    height: 90,
    parent: this.ad
  });
  // cta
  this.cta = this.smartObject({
    type: 'img',
    src: 'images/cta.svg',
    width: 93,
    height: 33,
    top: 28,
    left: 613,
    parent: this.ad
  });
  // replay
  this.replay = this.smartObject({
    type: 'img',
    src: 'images/replay.svg',
    width: 20,
    height: 20,
    left: 703,
    parent: this.controls
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {
  this.action1.set({ y: 90 });
  this.action2.set({ y: 90 });
  this.txt1.set({ scale: 0 });

  // build the grid!
  this.tiles = this.svgGrid(81, 86, 'images/pattern.svg', this.container);
  // fix for cta jitter
  TweenMax.set(this.cta, { perspective: 200, transformPerspective: 200, transformStyle: 'preserve-3d', force3D: false, z: 0.01 });

  // replay
  this.doReplayOver = function () {
    TweenMax.to(this, 0.25, { rotation: 360, ease: Power3.easeOut });
  };

  this.doReplayOut = function () {
    TweenMax.to(this, 0.25, { rotation: 0, ease: Power3.easeOut });
  };

  this.doReplayDown = function () {
    banner.timeline.gotoAndPlay(1);
  };
  this.replay.addEventListener('mouseover', this.doReplayOver);
  this.replay.addEventListener('mouseout', this.doReplayOut);
  this.replay.addEventListener('mousedown', this.doReplayDown);
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
    //_this.timeline.gotoAndPlay('start');
  }

  this.timeline = new TimelineLite({ onComplete: loop }).addLabel('start', 0)

  // begin, animate tiles and txt1
  .to(this.txt1, 1, { ease: Elastic.easeOut.config(1, 0.5), scale: 1 }).staggerFrom(_this.tiles, .75, { scale: 0.2, alpha: 0, ease: Back.easeOut, delay: .1 }, 0.04, "-=2.5")

  // shift txt1, tiles container and dude
  .to([this.txt1, this.container], .5, { y: -90, ease: Power4.easeOut }, "+=1").to([this.action1, this.action2], .5, { y: 0, ease: Power4.easeOut }, "-=.5")

  // reset txt1 for next transition
  .to(this.txt1, .01, { opacity: 0, left: 168, y: 0, scale: .2 })

  // animate dude
  .to(this.action1, .1, { opacity: 0, ease: SteppedEase.config(1), repeat: 10, repeatDelay: 0.1, yoyo: true }, "-=.25").to(this.action1, .5, { opacity: 0 }).to([this.action1, this.action2], .5, { y: 600, ease: Power4.easeOut }, "-=.1")

  // move tiles
  .to(this.container, .5, { y: 0, ease: Power4.easeOut }, "-=.5")

  // end frame
  .to(this.package, .75, { left: -426, ease: Back.easeInOut.config(1) }, "-=.5").to(this.txt1, 1, { ease: Elastic.easeOut.config(1, 0.5), scale: 1, opacity: 1 }, "-=.2").to(this.whiteBG, .5, { x: 728, ease: Power4.easeOut }, "-=1.5")
  //.to(this.cta, .5, {y:-130, ease: Power4.easeOut}, "-=1.2")
  .from(this.replay, 0.2, { autoAlpha: 0, ease: Power3.easeOut });

  // cta handlers
  function doCtaOver() {
    TweenLite.to(banner.cta, 0.3, { scale: 1.105, ease: Power3.easeInOut });
  };

  function doCtaOut() {
    TweenLite.to(banner.cta, 0.4, { scale: 1, ease: Power3.easeOut });
  };

  // cta event listeners
  this.cta.addEventListener('mouseover', doCtaOver);
  this.cta.addEventListener('mouseout', doCtaOut);

  // Add timeline to GSAP scrubber. Delete this before running gulp prod.
  //ScrubGSAPTimeline(this.timeline);
};