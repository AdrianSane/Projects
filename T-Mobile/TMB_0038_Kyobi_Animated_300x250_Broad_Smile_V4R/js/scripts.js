(function(){
    // define banner elements
    var banner = document.getElementById('banner'),
        logo = document.getElementsByClassName('logo'),
        dude = document.getElementsByClassName('dude'),
        endFrame = document.getElementsByClassName('endFrame'),
        button = document.getElementsByClassName('button'),
        legal = document.getElementsByClassName('legal'),

        // all text assets for first frame animation
        txt = document.getElementsByClassName('txt'),

        // txt assets that need more animating placed in an array for further manipulation
        txtAssets1 = [
          txt1 = document.getElementsByClassName('txt1'),
          txt2 = document.getElementsByClassName('txt2')
        ],

        // txt assets that need more animating placed in an array for further manipulation
        txtAssets2 = [
          txt3 = document.getElementsByClassName('txt3'),
          txt4 = document.getElementsByClassName('txt4')
        ],

        // endframe text
        txt5 = document.getElementsByClassName('txt5'),

        // initialize the main timeline
        mainTl = new TimelineLite();

      // initialize some settings
      mainTl
          .set(txtAssets1, {x:-100})
          .set(txtAssets2, {x:300})
          .set(dude, {y:260});

  // main animation function
    function main() {

        mainTl
        // show logo
        .to(logo, .03, {opacity:1, delay:.5})

        // animate text
        .staggerTo(txtAssets1, 1.2, {x:0, opacity:1, ease:Elastic.easeOut.config(1, 0.75)}, .45)
        .to(txtAssets1, .5, {y:-30, ease: Expo.easeOut})
        .staggerTo(txtAssets2, 1.5, {x:0, opacity:1, ease:Elastic.easeOut.config(1, 1.25)}, .45)
        .to(txtAssets1, 1, {x:310, ease:Elastic.easeOut.config(1, 0.75)}, "+=2")
        .to(txtAssets2, 1, {x:-500, ease:Elastic.easeOut.config(1, 0.75)}, "-=1")

        // fade out logo, change bg color
        .to(logo, .5, {opacity:0, ease: Expo.easeOut}, "-=.5")
        .to(banner, .5, {css:{backgroundColor:"#e9e9e9"}, ease: Expo.easeOut}, "-=.5")

        // animate dude
        .to(dude, 1.5, {y:0, opacity:1, ease:Expo.easeOut}, "-=.5") //fade in
        .to(dude, 1, { opacity:0, ease:Expo.easeOut}, "+=1.5") //fade out

        // fade in endFrame
        .to(banner, 1, {css:{backgroundColor:"#e20074"}, ease: Expo.easeOut}, "-=1")
        .to(endFrame, .25, {opacity:1}, "-=.75")

        // reveal masked copy and app logos
        .from (txt5, 1, {y: 100, ease:Expo.easeOut}, "-=.75")
        .from(button, .5, {y: "-=50", ease:Back.easeOut})
        .from(legal, .5, {opacity:0, ease: Expo.easeIn}, "-=1");

    }
  // end main animation function

  // cta hover effect
  document.getElementById('hit').onmouseover =
    function(event)
    {
      {
         // cta over actions
         TweenMax.to(button, .1, {scale:1.1,  ease:Power1.easeInOut});

      }
    };

  document.getElementById('hit').onmouseout =
    function(event)
    {
      {
          // cta out actions
          TweenMax.to(button, .2, {scale:1,  ease:Back.easeInOut});
      }
    };

    // start animation
    main();
})();
