"use strict";Banner.prototype.start=function(){this.banner=document.querySelector(".banner"),this.bannerWidth=this.banner.offsetWidth,this.bannerHeight=this.banner.offsetHeight,this.images=["images/bg.jpg","images/cta2.svg","images/cta2Over.svg","images/lasagna.png","images/lettuce.png","images/logo.svg","images/plate.png","images/tomatoes.png","images/txt1.svg","images/txt2.svg"];var t=this;this.preloadImages(this.images,function(){t.createElements(),t.setup(),t.hidePreloader(),t.animate(),t.bindEvents()})},Banner.prototype.createElements=function(){this.bg=this.smartObject({backgroundImage:"images/bg.jpg",retina:!0,parent:this.banner}),this.lettuce=this.smartObject({backgroundImage:"images/lettuce.png",retina:!0,parent:this.banner}),this.tomatoes=this.smartObject({backgroundImage:"images/tomatoes.png",retina:!0,parent:this.banner}),this.lasagna=this.smartObject({backgroundImage:"images/lasagna.png",retina:!0,parent:this.banner}),this.plate=this.smartObject({backgroundImage:"images/plate.png",retina:!0,parent:this.banner}),this.logo=this.smartObject({backgroundImage:"images/logo.svg",retina:!1,width:85,height:41,top:187,left:25,parent:this.banner}),this.txt1=this.smartObject({backgroundImage:"images/txt1.svg",width:204,height:42,top:22,left:22,parent:this.banner}),this.txt2=this.smartObject({backgroundImage:"images/txt2.svg",width:176,height:42,top:23,left:22,parent:this.banner}),this.ctaContainer=this.smartObject({width:125,height:31,top:80,left:20,overflow:"hidden",borderRadius:5,parent:this.banner}),this.cta2=this.smartObject({backgroundImage:"images/cta2.svg",retina:!1,width:125,height:31,parent:this.ctaContainer}),this.cta2OverBG=this.smartObject({width:140,height:31,y:-36,overflow:"hidden",backgroundColor:"white",parent:this.ctaContainer}),this.cta2Over=this.smartObject({type:"img",src:"images/cta2Over.svg",retina:!1,width:93,height:10,top:0,parent:this.ctaContainer})},Banner.prototype.setup=function(){this.plate.set({y:250}),this.txt1.set({opacity:0}),this.txt2.set({opacity:0}),this.ctaContainer.set({opacity:0}),this.cta2Over.set({opacity:0}),this.cta2Over.centerHorizontal(),this.cta2Over.centerVertical()},Banner.prototype.hidePreloader=function(){TweenMax.to(".preloader",1,{autoAlpha:0})},Banner.prototype.animate=function(){function t(){}function e(){TweenMax.to(banner.ctaContainer,.3,{scale:1.03,ease:Power3.easeInOut,force3D:!0,z:.1,rotationZ:.01}),TweenMax.to(banner.cta2OverBG,.1,{y:0}),TweenMax.to(banner.cta2Over,.1,{opacity:1})}function a(){TweenMax.to(banner.ctaContainer,.3,{scale:1.01,ease:Power3.easeOut,force3D:!0,z:.1,rotationZ:.01}),TweenMax.to(banner.cta2OverBG,.2,{y:-36}),TweenMax.to(banner.cta2Over,.1,{opacity:0})}this.timeline=new TimelineMax({onComplete:t}).addLabel("start",0).staggerFromTo([this.lasagna,this.lettuce,this.tomatoes],1.9,{delay:.2,y:-250,force3D:!0},{y:250,rotation:-25},.2).to(this.plate,1.75,{y:0,x:20,ease:Expo.easeInOut,force3D:!0,scale:.9},"-=1").to(this.txt1,1,{opacity:1,ease:Expo.easeInOut,force3D:!0},"-=.75").to(this.txt1,1,{opacity:0,ease:Expo.easeInOut,force3D:!0},"+=1.25").to(this.txt2,1,{opacity:1,ease:Expo.easeInOut,force3D:!0},"-=.75").to(this.ctaContainer,1,{opacity:1,ease:Expo.easeInOut,force3D:!0},"+=1.2").to(this.plate,1.5,{y:30,x:40,ease:Expo.easeInOut,force3D:!0},"-=1"),this.ctaContainer.addEventListener("mouseover",e),this.ctaContainer.addEventListener("mouseout",a)};