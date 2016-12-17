/*

    Droga5 Banner JS
    Simon Abrams
    --------------------
    sabrams@droga5.com

*/


(function() {

    /**

    Initialize banner elements

    */
    var banner = document.getElementById('banner'),
        hit = document.getElementsByClassName('hit')[0],
        
        // cta elements
        cta = document.getElementsByClassName('cta-container')[0],
        ctaBg = document.getElementsByClassName('cta-bg'),
        ripple = document.getElementsByClassName('ripple-effect'),
        radius = 100,
        btn_defaultColor = "#4285f4",
        btn_hoverColor = "#42A5F5",
        btn_defaultShadow = "0px 1px 5px rgba(0,0,0,0.25)",
        btn_hoverShadow = "1px 2px 5px rgba(0,0,0,0.25)",

        logo = document.getElementsByClassName('logo'),
        carrierLogo = document.getElementsByClassName('carrier-logo'),
        product = document.getElementsByClassName('product-container'),
        headline = document.getElementsByClassName('headline'),
        
        // constants for banner dimensions
        WIDTH = 160,
        HEIGHT = 600;

    var mainTl = new TimelineMax();
    var phoneTl = new TimelineMax({paused:true});
    phoneTl.add(spriteAnim(product, -3680, 1, 23));
    phoneTl.add("rollover", 0.75);

    /**

    Main animation function

    */

    // initialize banner visibility
    mainTl.set(banner, {autoAlpha:1});

    // set logo size
    TweenMax.set(logo, {scale:0.5});

    // add tweens to main timeline
    mainTl
        // add a start label
        .add("start", 0.5)

        // play logo animation
        .to(logo, 1, {backgroundPosition:"-4114px", ease:SteppedEase.config(42) }, "start")
        
        // play product animation
        // .from(product, 0.5, {autoAlpha:0, ease:Sine.easeInOut}, "start")
        
        // show headline and carrier logo
        .from([headline, carrierLogo], 2, {autoAlpha:0}, "start")
       
        // show cta
        .fromTo(cta, 1.5, {autoAlpha:0}, {autoAlpha:1, ease:Back.easeInOut.config(0.8)}, 'start');


    /**

    CTA and clickthrough event listeners

    */

    // initialize ripple element
    TweenMax.set(ripple, {
        autoAlpha: 0
    });

    // mouse over
    cta.addEventListener('mouseover', function(event) {
      // change the background color
      TweenMax.to(ctaBg, 0.4, {
        backgroundColor: btn_hoverColor
      });
      // animate the drop shadow
      TweenMax.to(cta, 0.4, {
        boxShadow: btn_hoverShadow
      });
    });

    // roll out
    cta.addEventListener('mouseout', function(event) {
      //   resets background color
      TweenMax.to(ctaBg, 0.4, {
        backgroundColor: btn_defaultColor
      });
      //   resets drop shadow
      TweenMax.to(cta, 0.4, {
        boxShadow: btn_defaultShadow
      });
    });


    // mouse down
    cta.addEventListener('mousedown', function(event) {
      // get mouse x and y
      mouseX = event.clientX;
      mouseY = event.clientY;
      // position ripple container
      // TweenMax.set(ripple, {
      //   x: mouseX - radius / 2,
      //   y: mouseY - radius / 2
      // });
      // fade in and grow the ripple
      TweenMax.fromTo(ripple, 1, {
        autoAlpha: 0,
        scale: 0
      }, {
        autoAlpha: 1,
        scale: 4
      });
      // start fading out the ripple
      TweenMax.to(ripple, 0.8, {
        autoAlpha: 0,
        delay: 0.4,
        ease: Sine.easeOut
      });

      Enabler.exit('CTA Exit');

    });
})();

// sprite animation
/*
    elem: the <img> tag of the element you're animating
    distX: the x-position of the last frame of the animation on the sprite sheet
    distY: the y-position of the last frame of the animation on the sprite sheet
    dur: the duration of the animation
    steps: how many frames make up the animation
    repeat: the number of times the animation should loop. Defaults to 1. -1 loops forever.
*/
function spriteAnim(elem, dist, dur, steps, reps) {
    // make a new TimelineMax to hold the animation
    var _tl = new TimelineMax();
    // congfigure an instance of SteppedEase with the number of animation frames
    var steppedEase = new SteppedEase(steps);
    // set the number of loops
    var repeat = (reps === undefined) ? 0 : reps;
    // animate!
    _tl.to(elem, dur, {
        x:dist,
        repeat:repeat,
        ease:steppedEase});

    return _tl;
}

