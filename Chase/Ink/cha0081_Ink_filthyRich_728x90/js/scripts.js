(function() {

    // defines banner elements
    var banner = document.getElementById('banner'),
        hit = document.getElementById('hit'),
        bg_gradient = document.getElementById('bg_gradient'),
        bg = document.getElementById('bg'),
        bottom_white = document.getElementById('bottom_white'),
        card = document.getElementById('card'),
        chase_logo = document.getElementById('chase_logo'),
        chase_logo_2 = document.getElementById('chase_logo_2'),
        text_1 = document.getElementById('text_1'),
        text_2 = document.getElementById('text_2'),
        text_3 = document.getElementById('text_3'),
        cta = document.getElementById('cta'),
        replay = document.getElementById('replay'),
        WIDTH = 728,
        HEIGHT = 90;


        mainTl = new TimelineLite({onComplete:completeHandler});

    document.execCommand("BackgroundImageCache",false,true);


    // main animation function

    function main() {


        mainTl
            .set(chase_logo, {x: 728, y: 18})
            // add a start label
            .add("start", 0.5)
            .set(banner, {autoAlpha: 1})
            // show the card
            .fromTo(card, 0.75, {x:728, y: 6, force3D: true, rotateZ:0.001},{x: 346, ease:Power3.easeOut}, "start+=0.2")
            // show the bottom white footer area
            .fromTo(bottom_white, 0.5, {x: 728}, {x: 413, ease:Power3.easeOut}, "start+=0.2")
            // show the logo
            .to(chase_logo, 0.4, {x:540, autoAlpha: 1, ease:Power3.easeOut}, "start+=0.4")

            // show the text and animate it in
            .to(text_1, 0.8, {autoAlpha: 1}, "start")
            .from(text_1, 0.4, {y: "+=10", ease:Power3.easeOut}, "start+=0.1")

            // frame 2
            .add("frame2", "+=1.25")
            .to(text_1, 0.4, {autoAlpha:0}, "frame2")

            // show the background image
            .set(bg, {scale: 1.5, transformOrigin:"40% 50%", left: "50%", marginLeft:"-50%"}, "frame2+=0.2")
            .to(bg, 1, {y: 0, autoAlpha: 1, ease:Power3.easeOut}, "frame2+=0.2")
            .to(bg, 5, {scale: 1, ease:Linear.easeNone, force3D:true, z:0.1, rotationZ:0.01},"frame2+=0.2")

            // move the card left
            .to(card, 0.8, { x:396, ease:Power3.easeOut}, "frame2+=0.2")
            .to(bottom_white, 0.8, {x: 463, ease: Power3.easeOut}, "frame2+=0.2")

            .to(text_2, 0.8, {autoAlpha:1}, "frame2+=0.6")
            .from(text_2, 0.4, {y: "+=10", ease:Power3.easeOut}, "frame2+=0.6")

            // end frame
            .to(text_2, 0.4, {autoAlpha: 0})

            .add("endframe")
            .to(bg, 0.65, {scale: 1.5, autoAlpha: 0, ease:Power3.easeIn}, "endframe")

            // scale card
            .to(card, 0.6, {x:346, ease:Power3.easeOut}, "endframe+0.25")
            .to(bottom_white, 0.6, {x: 413, ease:Power3.easeOut}, "endframe+0.25")

            .to(text_3, 0.8, {autoAlpha: 1}, "endframe+=0.4")
            .from(text_3, 0.4, {y:"+=10", ease:Power3.easeOut}, "endframe+=0.4")

            .to(chase_logo, 0.4, {y:0, autoAlpha:0, ease:Power3.easeOut}, "endframe+=0.75")
            .from(chase_logo_2, 0.4, {y:25, autoAlpha:0, ease:Power3.easeOut}, "endframe+=0.75")

            .to(cta, 0.4, {autoAlpha:1}, "endframe+=0.85")
            .from(cta, 0.4, {y: "+=30", ease: Back.easeOut}, "endframe+=0.85");

    }

    // banner complete - show replay button
    function completeHandler() {
        TweenMax.to(btn_pause, 0.1, {autoAlpha: 0});
        TweenMax.to(btn_replay, 0.1, {autoAlpha: 1});
    }

    cta.addEventListener('mouseover', function(event) {
        mainTl.set(cta, {backgroundColor:"rgb(47, 125, 72)", ease:Power1.easeInOut});
    });

    cta.addEventListener('mouseout', function(event) {
        mainTl.set(cta, {backgroundColor:"#2ba854", ease:Power1.easeInOut});
    });

    cta.addEventListener('mousedown', function(e) {
        vendorClickHandler();
    }, false);

    // play/pause
    controls.addEventListener('mousedown', togglePlayPause, false);

    // btn_pause.addEventListener('keydown', togglePlayPause, false);

    function togglePlayPause(e){
        if (e.target.id == 'btn_pause' || e.target.id == 'btn_play') {
            doPlayPause(e);
        }
    }

    // replay
    btn_replay.addEventListener('mouseover', function(){
        TweenMax.to(this, 0.3, {rotationZ: 360, transformOrigin:"50% 4.5px",
            onComplete:function(){
                TweenMax.set(btn_replay, {rotationZ:0});
            }});
    });
    btn_replay.addEventListener('mousedown', replayBanner, false);
    // btn_replay.addEventListener('keydown', replayBanner, false);

    function replayBanner(e){
        if (e.target.id == 'btn_replay') {
            TweenMax.set(btn_pause, {backgroundPositionX:'0px'});
            TweenMax.to(btn_pause, 0.1, {autoAlpha: 1});
            TweenMax.to(btn_replay, 0.1, {autoAlpha: 0});
            mainTl.restart();
        }
    }

    // respond to keyboard events
    function keyboardEventHandler(e){
        var keyCode = e.which || e.keyCode;
        if (keyCode == 32) {
            switch(document.activeElement.id) {
                // we're on the pause button - play or pause the banner
                case 'hit':
                    vendorClickHandler();
                    break;
                case 'controls':

                    if (mainTl.progress() < 1) {
                        doPlayPause();
                    } else if (mainTl.progress() == 1) {
                        restartBanner();
                    }
                    break;

                case 'cta':
                    vendorClickHandler();
                    break;
                default:
                    break;
            }
        }
    }

    document.addEventListener('keydown', keyboardEventHandler, false);


    function doPlayPause() {
        if (mainTl.paused()){
            TweenMax.set(btn_pause, {autoAlpha:1});
            TweenMax.set(btn_play, {autoAlpha:0});
        } else {
            TweenMax.set(btn_pause, {autoAlpha:0});
            TweenMax.set(btn_play, {autoAlpha:1});
        }
        mainTl.paused(!mainTl.paused());
    }

    function restartBanner() {
        TweenMax.set(btn_play, {autoAlpha: 0});
        TweenMax.to(btn_pause, 0.1, {autoAlpha: 1});
        TweenMax.to(btn_replay, 0.1, {autoAlpha: 0});
        mainTl.restart();
    }


    main();
})();
