/*

    Droga5 Banner JS
    Simon Abrams
    --------------------
    sabrams@droga5.com

*/


(function() {

    // defines banner elements
    var banner = document.getElementById('banner'),
        hit = document.getElementById('hit'),
        cta = document.getElementById('cta'),
        frame1 = document.getElementById('frame1'),
        imageLeft = document.getElementById('img1-1'),
        imageRight = document.getElementById('img1-2'),
        imageTransition = document.getElementById('transition'),
        frame2 = document.getElementById('frame2'),
        frame3 = document.getElementById('frame3'),
        copy1 = document.getElementById('copy1'),
        copy2 = document.getElementById('copy2'),
        copy3 = document.getElementById('copy3'),
        logo = document.getElementById('logo'),
        logoTagline = document.getElementById('logo-tagline'),
        ctaSheen = document.getElementById('cta-sheen'),
        ctaSheenBg = document.getElementById('cta-sheen-bg'),

        // colors
        ctaColor = "#44413d",
        ctaOverColor = "#3d3d3d",
        
        // constants for banner dimensions
        WIDTH = 728,
        HEIGHT = 90;


        mainTl = new TimelineLite();
        // debug: uncomment this
        // mainTl = new TimelineLite({onUpdate:updateSlider});

    // initialize some settings
    mainTl
        .set([imageLeft, imageRight, frame2, frame3, copy1, copy2, copy3, logo, logoTagline], {force3D:true, rotationZ:0.001})
        .set(frame1, {autoAlpha:0})
        .set(imageLeft, {x:-20})
        .set(imageRight, {x:329})
        .set(bottle, {x:78, y:-20})
        .set(frame3, {y:-55, x:-10})
        .set(copy1, {y:37})
        .set(copy2, {y:44})
        .set(copy3, {x:323, y:37})
        .set([copy1, copy2, copy3], {scale:1.2})
        .set(logo, {x:92, y:18})
        .set(logoTagline, {x:117, y:66});
    

    // main animation function

    function main() {

        // initialize banner here
        mainTl.set(banner, {autoAlpha:1});

        // add tweens to main timeline
        mainTl
            // add a start label
            .add("start", 0.5)
            .to(frame1, 1, {autoAlpha:1}, "start")

        // frame 1
            .add("frame1", 0.5)
            .to(imageLeft, 4, {x:"+=30", ease:Linear.easeNone}, "frame1")
            .to(imageRight, 4, {x:"+=20", ease:Linear.easeNone}, "frame1")

            // show copy1
            .to(copy1, 1, {scale:1, autoAlpha:1}, "frame1+=0.5")

        // frame 2
            .add("frame2", 4)
            .to(copy1, 0.4, {autoAlpha:0}, "frame2")
            .to(frame1, 0.6, {autoAlpha:0}, "frame2+=0.2")

            .to(frame2, 0.5, {autoAlpha:1}, "frame2+=0.75")
            .from(frame2, 3.75, {scale:1.5, ease:Linear.easeNone}, "frame2+=0.75")
            .to(copy2, 1, {scale:1, autoAlpha:1}, "frame2+=1.25")

        // frame 3
            .add("frame3", 8)
            .to(copy2, 0.4, {autoAlpha:0}, "frame3")
            .to(frame2, 0.6, {autoAlpha:0}, "frame3+=0.2")

            .to(frame3, 0.5, {autoAlpha:1}, "frame3+=0.5")
            .from(frame3, 3.75, {scale:1.5, ease:Power2.easeOut}, "frame3+=0.5")

        // frame 4 - bottle
            .add("frame4", 11)
            .to(frame3, 0.6, {autoAlpha:0, delay:.1}, "frame4")

            .to(bottle, 1.2, {autoAlpha:1, ease:Strong.easeOut}, "frame4+=1")
            .to(bottle, 3.2, {y:-242, ease:Strong.easeOut}, "frame4+=1")
            .to(copy3, 1, {scale:1, autoAlpha:1}, "frame4+=1")


        // endframe
            .add("endframe", 15)
            .to(copy3, 0.4, {autoAlpha:0}, "endframe")
            .to(bottle, 0.6, {autoAlpha:0}, "endframe+=0.2")

            
            .to(logo, 0.8, {autoAlpha:1}, "endframe+=0.5")
            .from(logo, 1.2, {scale:3.5, y:"+=20", ease:Strong.easeOut}, "endframe+=0.5")
            .to(logoTagline, 0.8, {autoAlpha:1}, "endframe+=0.8")
            .from(logoTagline, 0.4, {scale:1.2}, "endframe+=0.8")

            .to(legal, 0.6, {autoAlpha:1}, "endframe+=0.5")

            .to(cta, 1, {autoAlpha:1}, "endframe+=0.5")
            .fromTo([ctaSheen, ctaSheenBg], 1.4, {x:-180}, {x:200, ease:Strong.easeInOut});

            mainTl.timeScale(1.2);
            console.log(mainTl.endTime())

    }

    // cta event handlers
    document.getElementById('hit').onmouseover =
      function(event)
      {
        {
           // cta over actions
           TweenMax.fromTo([ctaSheen, ctaSheenBg], 1.4, {x:-180}, {x:200, ease:Strong.easeInOut});
           TweenMax.to(cta, 0.4, { backgroundColor: ctaOverColor } );
        }
      };

    document.getElementById('hit').onmouseout =
      function(event)
      {
        {
            // cta out actions
            TweenMax.to(cta, 0.4, { backgroundColor: ctaColor } );
        }
      };


    /***************** debug functions - uncomment the slider div in the html file ****************/

    //mainTl.onUpdate = updateSlider;
    // function updateSlider(e) {
    //     slider.value = Math.round(mainTl.progress()*100);
    // }

    // slider.addEventListener('change', function(){
    //     var pos = slider.value/100;
    //     mainTl.progress(pos).pause();
    // });

    //pause the animation on spacebar
    // window.addEventListener('keypress', function(e){
    //     console.log(e.keyCode);
    //     if (e.keyCode == 32 ) {
    //         mainTl.paused( !mainTl.paused() );
    //     }
    // });

    // window.addEventListener('keypress', function(e){
    //     if (e.keyCode == 32) {
    //         mainTl.paused( !mainTl.paused() );
    //     }
    // })



    // starts animation
    main();
})();


