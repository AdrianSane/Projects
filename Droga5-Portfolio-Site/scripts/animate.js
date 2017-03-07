$(document).ready(function(){
  var black = document.getElementsByClassName("black"),
      clientLogo = document.getElementsByClassName("clientLogo"),
      client = document.getElementsByClassName("client"),
      clientArrow = document.getElementsByClassName("client_arrow"),
      typeArrow = document.getElementsByClassName("type_arrow"),
      clientFilterEntry = document.getElementsByClassName("clientFilterEntry"),
      typeFilterEntry = document.getElementsByClassName("typeFilterEntry"),
      master = document.getElementsByClassName("master"),
      tl = new TimelineMax();

  // intial setup of animated elements
  TweenLite.set(black, {scale:.95, opacity:0});
  TweenLite.set([clientArrow, typeArrow], {x:0});
  TweenLite.set(clientLogo, {scale:.85, opacity:0});

  // animate banners in on page load
  TweenMax.staggerFrom(client, 2.2, {x:-5, rotation:-7, scale:0.8, delay:0.25, opacity:0, ease:Elastic.easeOut}, 0.2);
  //TweenMax.staggerFrom(client, 1, {x:-100, y:-50, scale:1.25, delay:0.25, opacity:0, ease:Circ.easeOut}, 0.2);

  // banner mouseover function
  $(black).on("mouseover", function(e){
    TweenMax.to($(this), .3, {opacity:.9, scale:1, ease: Expo.easeIn});
    TweenMax.to(clientLogo, .35, {scale:1, ease: Sine.easeIn, opacity:1, delay:.2});
    e.preventDefault();
  })

  // banner mouseleave function
  $(black).on("mouseleave", function(e){
    TweenMax.to($(this), .4, {opacity:0, scale:.95, ease: Expo.easeOut});
    TweenMax.to(clientLogo, .15, {scale:0});
    e.preventDefault();
  })

  // filter client arrow event animation
  $(clientFilterEntry).on("mouseover", function(){
    TweenMax.to(clientArrow, .15, {x:5, rotation: 90});
  })

  $(clientFilterEntry).on("mouseleave", function(){
    TweenMax.to(clientArrow, .2, {x:0, rotation:0});
  })

  // filter type arrow event animation
  $(typeFilterEntry).on("mouseover", function(){
    TweenMax.to(typeArrow, .15, {x:5, rotation: 90});
  })

  $(typeFilterEntry).on("mouseleave", function(){
    TweenMax.to(typeArrow, .2, {x:0, rotation:0});
  })

});
