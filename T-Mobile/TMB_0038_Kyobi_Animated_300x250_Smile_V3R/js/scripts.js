(function(){
    // define banner elements
    var banner = document.getElementById('banner'),
        logo = document.getElementsByClassName('logo'),
        dude = document.getElementsByClassName('dude'),
        endFrame = document.getElementsByClassName('endFrame'),
        button = document.getElementsByClassName('button'),

        // all text assets for first frame animation
        txt = document.getElementsByClassName('txt'),

        // txt assets that need more animating placed in an object for further manipulation
        txtAssets = {
          txt1 : document.getElementsByClassName('txt1'),
          txt2 : document.getElementsByClassName('txt2'),
          txt3 : document.getElementsByClassName('txt3'),
          txt4 : document.getElementsByClassName('txt4'),
          txt5 : document.getElementsByClassName('txt5')
        },

        // white text on pink bg
        txtAssets2 = [
          txtAssets.txt2,
          txtAssets.txt3,
          txtAssets.txt4,
        ],

        // initialize the main timeline
        mainTl = new TimelineLite();

      // initialize some settings
      mainTl
          .set(txtAssets.txt1, {x:-100})
          .set(txtAssets2, {x:310})
          .set(dude, {y:260});

  // main animation function
    function main() {

        mainTl
        // show logo
        .to(logo, .03, {opacity:1, delay:.5})

        // animate text
        .staggerTo(txtAssets.txt1, 1.5, {x:0, opacity:1, ease:Elastic.easeOut.config(1, 0.75)}, .15)
        .to(txtAssets.txt1, .5, {y:-50, ease: Expo.easeOut})
        .staggerTo(txt, 1, {x:0,  opacity:1, ease:Elastic.easeOut.config(1, 1)}, .45, "-=.25")
        .to(txtAssets.txt1, 1, {x:310, ease:Elastic.easeOut.config(1, 0.75)}, "+=2")
        .to(txtAssets2, 1, {x:-300, ease:Elastic.easeOut.config(1, 0.75)}, "-=1")

        // fade out logo
        .to(logo, .25, {opacity:0}, "-=.75")

        // animate dude
        .to(dude, 1.5, {y:0, opacity:1, ease:Expo.easeOut}, "-=.5")

        // fade in endFrame
        .to(endFrame, .25, {opacity:1}, "+=1.5")

        // reveal masked copy and app logos
        .from (txtAssets.txt5, 1, {y: 100, ease:Expo.easeOut, rotationX:.01})
        .from(button, .5, {y: "-=50", ease:Back.easeOut});

    }
  // end main animation function

  // cta hover effect
  document.getElementById('hit').onmouseover =
    function(event)
    {
      {
         // cta over actions
         TweenMax.to(button, .1, {scale:1.02,  ease: Sine.easeOut});

      }
    };

  document.getElementById('hit').onmouseout =
    function(event)
    {
      {
          // cta out actions
          TweenMax.to(button, .2, {scale:1,  ease: Sine.easeIn});
      }
    };

    // start animation
    main();
})();
