"use strict";Banner.prototype.start=function(){this.banner=document.querySelector(".banner"),this.bannerWidth=this.banner.offsetWidth,this.bannerHeight=this.banner.offsetHeight,this.images=["images/bg.jpg","images/txtMaster.png","images/txt1.png","images/txt2.png","images/txt3.png","images/txt4.png","images/txt5.png","images/cta.svg","images/ctaArrow.svg"];var t=this;this.preloadImages(this.images,function(){t.createElements(),t.setup(),t.hidePreloader(),t.animate(),t.bindEvents()})},Banner.prototype.createElements=function(){this.bg=this.smartObject({backgroundImage:"images/bg.jpg",parent:this.banner}),this.txtBG=this.smartObject({backgroundColor:"#000",opacity:.25,width:310,height:54,top:18,left:124,parent:this.banner}),this.txtMaster=this.smartObject({backgroundImage:"images/txtMaster.png",parent:this.banner}),this.txt1=this.smartObject({backgroundImage:"images/txt1.png",parent:this.txtMaster}),this.txt2=this.smartObject({backgroundImage:"images/txt2.png",parent:this.txtMaster}),this.txt3=this.smartObject({backgroundImage:"images/txt3.png",parent:this.txtMaster}),this.txt4=this.smartObject({backgroundImage:"images/txt4.png",parent:this.banner}),this.txt5=this.smartObject({backgroundImage:"images/txt5.png",parent:this.banner}),this.cta=this.smartObject({backgroundImage:"images/cta.svg",width:162,height:28,left:126,pointerEvents:"none",parent:this.banner}),this.ctaInner=this.smartObject({border:"2px solid #19458d",width:160,height:26,parent:this.cta}),this.ctaMask=this.smartObject({width:12,height:9,overflow:"hidden",top:9,left:147,parent:this.cta}),this.ctaArrow=this.smartObject({backgroundImage:"images/ctaArrow.svg",width:7,height:9,parent:this.ctaMask})},Banner.prototype.setup=function(){this.cta.set({autoAlpha:0,top:58}),this.ctaInner.set({autoAlpha:0}),this.txt2.set({autoAlpha:0}),this.txt3.set({autoAlpha:0}),this.txt4.set({autoAlpha:0,y:10}),this.txt5.set({autoAlpha:0,y:10})},Banner.prototype.hidePreloader=function(){TweenLite.to(".preloader",1,{autoAlpha:0})},Banner.prototype.animate=function(){function t(){}function e(){TweenLite.to(banner.ctaInner,.2,{autoAlpha:1,width:156,height:22,top:1,left:1,ease:Circ.easeOut,tranformOrigin:"center center",z:.1,rotationZ:.01,onComplete:function(){this.timeline=(new TimelineLite).to(banner.ctaArrow,.18,{left:15,ease:Circ.easeIn}).set(banner.ctaArrow,{left:-7}).to(banner.ctaArrow,.18,{left:0,ease:Circ.easeOut})}})}function a(){TweenLite.to(banner.ctaInner,.2,{autoAlpha:0,width:160,height:26,ease:Circ.easeOut,tranformOrigin:"center center",z:.1,rotationZ:.01})}this.timeline=new TimelineLite({onComplete:t}).addLabel("start",0).to(this.txt1,1,{autoAlpha:0},"+=1").to(this.txt2,1,{autoAlpha:1}).to(this.txt2,1,{autoAlpha:0},"+=1").to(this.txt3,1,{autoAlpha:1}).to([this.txt3,this.txtMaster,this.txtBG],1,{autoAlpha:0},"+=1").to(this.txt4,1,{autoAlpha:1,y:0}).to(this.txt4,1,{autoAlpha:0,y:-10,ease:Circ.easeIn},"+=1").to(this.txt5,1,{autoAlpha:1,y:0}).to(this.cta,1,{autoAlpha:1,top:43,ease:Circ.easeOut,z:.1,rotationZ:.01},"-=.8"),this.banner.addEventListener("mouseover",e),this.banner.addEventListener("mouseout",a)};