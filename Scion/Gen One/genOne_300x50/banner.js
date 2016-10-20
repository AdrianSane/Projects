var clickTag = "http://google.com";
var d5banner = d5banner || {};

d5banner.main = function(){
//----------------------------------------------------------------------clickTag
  document.getElementById("banner").addEventListener("click",
  function(e){
    if(e.target.id == "disclaimer-btn"){
        return;
      }
      if(e.target.id == "disclaimer-x"){
        return;
      }
      window.open(window.clickTag);
  });
  //--------------------------------------------------------setup vars and objects
  var mainTl = new TimelineLite(),
      bgTl = new TimelineLite(),
      carTl = new TimelineLite(),
      copyTl = new TimelineLite()
      banner = document.getElementById('banner'),
      logoBig = document.getElementsByClassName('logo-big'),
      logoSmall = document.getElementsByClassName('logo-small'),
      white = document.getElementsByClassName('white'),
      blue = document.getElementsByClassName('blue'),
      copy = document.getElementById('text'),
      genone = document.getElementsByClassName('genone'),
      endFrame = document.getElementById('endFrame'),
      cta = document.getElementsByClassName('cta'),
      mask = document.getElementById('clipPolygon'),
      disclaimerBtn = document.getElementById('disclaimer-btn'),
      disclaimerPanel = document.getElementById('disclaimer-panel'),
      closeBtn = document.getElementById('disclaimer-x');
      //Set up car objects
      im = {};
      im.car = document.getElementById('iM');
      im.rearwheel = document.getElementById('iM').getElementsByClassName('wheel rear');
      im.frontwheel = document.getElementById('iM').getElementsByClassName('wheel front');
      im.body = document.getElementById('iM').getElementsByClassName('car-body');
      mainTl.set(banner, {autoAlpha:0});

//---------------------------------------------------------------------animation
  function bgIn(e){
    var _bg = e;
    var _tl = new TimelineLite();
    _tl
    .from(_bg, 1.2, { clip:"rect(0, -450px, 250px, -450px)", ease:Power3.easeInOut});
    return _tl;
  };
  //car transitions
  function car(e){
    var _car = e.car;
    var _wheels = [e.frontwheel, e.rearwheel];
    var _body = e.body;
    var _tl = new TimelineLite();
    _tl
    .to(_car, 1, {x:405, ease:Power3.easeIn})
    .to(_wheels, 1, {rotation:360, ease:Power3.easeIn}, "-=1")
    .to(_body, 0.5, {rotation:1}, "-=0.3")
    .to(_body, 0.3, {rotation:0});
    return _tl;
  };
  //text transitions
  function textIn(e){
    var copy = e;
    var _tl = new TimelineLite();
    _tl
    .to(copy, .25, {x:160});
    return _tl;
  };
  function textOut(e){
    var copy = e;
    var _tl = new TimelineLite();
    _tl
    .to(copy, .25, {x:455});
    return _tl;
  };
//----------------------------------------------------------------button actions
  function enableDisclaimer(){
      disclaimerBtn.style.cursor = "pointer";
      closeBtn.style.cursor = "pointer";

      disclaimerBtn.onclick = function showDisclaimer(e) {
          e.preventDefault();
            TweenLite.to(disclaimerPanel, 0.6, {top: 0, parseTransform:true, ease:Power2.easeOut});
            return false;
        }

        closeBtn.onclick = function hideDisclaimer(e) {
          e.preventDefault();
            TweenLite.to(disclaimerPanel, 0.4, {top: 50, parseTransform:true, ease:Power2.easeIn});
            return false;
        }
      banner.onmouseover = ctaOver;
      banner.onmouseout = ctaOut;
  };

  function ctaOver(){
      TweenLite.to(cta, 0.6, {backgroundColor:"#4670a8", ease:Power3.easeOut});
  };
  function ctaOut(){
      TweenLite.to(cta, 0.6, {backgroundColor:"#1d4e8f", ease:Power3.easeOut});
  };
//---------------------------------------------------------------master timeline
  function mainAnimation(){
    mainTl
      .set(banner, {autoAlpha:1})
      .from(logoBig, 1.2, {scale:1.5, autoAlpha:0, ease:Power3.easeInOut}, 0.5)
      .add(bgIn(blue), "blueIn")//BLUE BG TRANSITION
      .add(car(im), "blueIn-=0.3")
      .to(logoBig, .1, {autoAlpha:0, ease:Power3.easeInOut}, "-=.75")
      .add("blueOut", 2.5)
      .add("whiteIn", 4)
      .add(textIn(copy), "blueIn+=.5")
      .add(textOut(copy), "blueOut+=2.125")
      .add(bgIn(white), "whiteIn")
      .add("whiteOut", 11)
      .to(endFrame, .35, {autoAlpha:1, ease:Power2.easeOut}, "-=.59")
      .from(disclaimerBtn, 0.5, {autoAlpha:0, ease:Power2.easeOut,                            onComplete:enableDisclaimer});
  };
  mainAnimation();
};
