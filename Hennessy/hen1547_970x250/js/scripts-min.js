!function(){function e(){mainTl.set(t,{autoAlpha:1}),mainTl.add("start",.5).to(n,1,{autoAlpha:1},"start").add("frame1",.5).from(n,2,{x:"-=60",ease:Strong.easeOut},"frame1").to(d,1,{scale:1,autoAlpha:1},"frame1+=0.5").add("frame2",4).to(d,.4,{autoAlpha:0},"frame2").to(n,.6,{autoAlpha:0},"frame2+=0.2").to(m,.5,{autoAlpha:1},"frame2+=0.75").from(m,3.75,{scale:1.5,ease:Linear.easeNone},"frame2+=0.75").to(r,1,{scale:1,autoAlpha:1},"frame2+=1.25").add("frame3",8).to(r,.4,{autoAlpha:0},"frame3").to(m,.6,{autoAlpha:0},"frame3+=0.2").to(l,.5,{autoAlpha:1},"frame3+=0.5").from(l,3.75,{scale:1.5,x:"+=50",y:"+=50",ease:Power2.easeOut},"frame3+=0.5").add("frame4",11).to(l,.6,{autoAlpha:0,delay:.1},"frame4").to(bottle,1.2,{autoAlpha:1,ease:Strong.easeOut},"frame4+=1").to(bottle,3.2,{y:-314,ease:Strong.easeOut},"frame4+=1").to(u,1,{scale:1,autoAlpha:1},"frame4+=1").add("endframe",15).to(u,.4,{autoAlpha:0},"endframe").to(bottle,.6,{autoAlpha:0},"endframe+=0.2").to(f,.8,{autoAlpha:1},"endframe+=0.5").from(f,1.2,{scale:3.5,y:"+=20",ease:Strong.easeOut},"endframe+=0.5").to(s,.8,{autoAlpha:1},"endframe+=0.8").from(s,.4,{scale:1.2},"endframe+=0.8").to(legal,.6,{autoAlpha:1},"endframe+=0.5").to(o,1,{autoAlpha:1},"endframe+=0.5").fromTo([c,g],1.4,{x:-180},{x:260,ease:Strong.easeInOut}),mainTl.timeScale(1.2),console.log(mainTl.endTime())}var t=document.getElementById("banner"),a=document.getElementById("hit"),o=document.getElementById("cta"),n=document.getElementById("frame1"),m=document.getElementById("frame2"),l=document.getElementById("frame3"),d=document.getElementById("copy1"),r=document.getElementById("copy2"),u=document.getElementById("copy3"),f=document.getElementById("logo"),s=document.getElementById("logo-tagline"),c=document.getElementById("cta-sheen"),g=document.getElementById("cta-sheen-bg"),y="#44413d",h="#3d3d3d",p=970,i=250;mainTl=new TimelineLite,mainTl.set([n,m,l,d,r,u,f,s],{force3D:!0,rotationZ:.001}).set(n,{autoAlpha:0}).set(d,{x:501,y:45}).set(r,{x:715,y:118}).set(u,{x:496,y:117}).set([d,r,u],{scale:1.2}).set(f,{x:109,y:77}).set(s,{x:153,y:161}),document.getElementById("hit").onmouseover=function(e){TweenMax.fromTo([c,g],1.4,{x:-180},{x:260,ease:Strong.easeInOut}),TweenMax.to(o,.4,{backgroundColor:h})},document.getElementById("hit").onmouseout=function(e){TweenMax.to(o,.4,{backgroundColor:y})},e()}();