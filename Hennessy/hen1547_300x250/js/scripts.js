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
        image1Top = document.getElementById('img1-1'),
        image1Bottom = document.getElementById('img1-2'),
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
        WIDTH = 300,
        HEIGHT = 250;


        mainTl = new TimelineLite();

    // initialize some settings
    mainTl
        .set([image1Top, image1Bottom, frame2, frame3, copy1, copy2, copy3, logo, logoTagline], {force3D:true, rotationZ:0.001})
        .set(frame1, {autoAlpha:0})
        .set(image1Top, {right:0})
        .set(image1Bottom, {y:136})
        .set(bottle, {x:83, y:0, transformOrigin:"50% bottom"})
        .set(copy1, {y:164})
        .set(copy2, {y:44})
        .set(copy3, {x:36, y:48})
        .set([copy1, copy2, copy3], {scale:1.2})
        .set(logo, {x:61, y:51})
        .set(logoTagline, {x:61, y:102})
        .set(cta, {y:147});
    

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
            .to(image1Top, 4, {x:"+=30", ease:Linear.easeNone}, "frame1")
            .from(image1Bottom, 4, {scale:1.1, ease:Linear.easeNone}, "frame1")
            .to(image1Bottom, 4, {y:"+=14"}, "frame1")

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
            .to(frame3, 3.75, {scale:1.5, ease:Power2.easeOut}, "frame3+=0.5")

        // frame 4 - bottle
            .add("frame4", 11)
            .to(frame3, 0.6, {autoAlpha:0}, "frame4")

            .to(bottle, 1.2, {autoAlpha:1, ease:Strong.easeOut}, "frame4+=1")
            .from(bottle, 0.5, {scale:0.8, ease:Linear.easeNone}, "frame4+=1")
            .from(bottle, 3, {y:"+=15", ease:Linear.easeNone}, "frame4+=1")
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


    // starts animation
    main();
})();


