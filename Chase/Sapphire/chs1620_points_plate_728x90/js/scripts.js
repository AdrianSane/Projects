/*

    Droga5 Banner JS
    Adrian Velazquez
    --------------------
    avelazquez@droga5.com

*/


(function() {

    // defines banner elements
    var banner = document.getElementById('banner'),
        hit = document.getElementById('hit'),
        cta = document.getElementById('cta'),

        controls = document.getElementById('controls'),
        btn_play = document.getElementById('btn_play'),
        btn_pause = document.getElementById('btn_pause'),
        btn_replay = document.getElementById('btn_replay'),

        logo = document.getElementsByClassName('logo-syc'),
        logo_sapphire = document.getElementsByClassName('logo-sapphire'),

        // elements
        plate = document.getElementsByClassName('plate'),
        glass_right = document.getElementsByClassName('glass-right'),
//glass_top = document.getElementsByClassName('glass-top'),
//glass_bottom = document.getElementsByClassName('glass-bottom'),
        silverware = document.getElementsByClassName('silverware'),
        footer = document.getElementsByClassName('footer'),
        card_footer = document.getElementsByClassName('card-footer'),
        card_main = document.getElementsByClassName('card-main'),
        headline1 = document.getElementsByClassName('headline1'),
        headline2 = document.getElementsByClassName('headline2'),
        headline3 = document.getElementsByClassName('headline3'),

        // constants for banner dimensions
        WIDTH = 728,
        HEIGHT = 90,

        ctaOverColor = "#000",
        ctaDefaultColor = "#0092ff";



    var mainTl = new TimelineLite({onComplete:completeHandler});
    mainTl.defaultEase = Power2.easeOut;


    // main animation function

    // initialize banner here
    mainTl.set(banner, {autoAlpha:1});
    mainTl.set(logo, {x:623, y:186});
    mainTl.set(footer, {x:728});
    mainTl.set(plate, {scale:.501, rotationZ: 15, z: 0.1, top: -102, left: -60,transformOrigin:"center center"});

    // add tweens to main timeline
    mainTl
        // add a start label
        .add("start", 0.4)

        // show footer
        .to(footer, 0.4, {x:620, ease:Sine.easeOut}, "start")
        .from([card_footer, logo], 0.4, {x:"+=160", autoAlpha:0, ease:Sine.easeOut}, "start+=0.1")

        .add("headline1", "+=0.5")
        .from(headline1, 0.8, {autoAlpha:0}, "headline1")

        // plate wiggle
        .set(".table-elements", {perspective:1000})
        .to(plate, 1, {rotationZ: 0.1, z: 0.1, ease: Expo.easeOut}, "-=1")
        //.to(plate, 0.5, {rotationZ: 0,rotationY:0})

        // transition table elements
        .add("elements", "+=0.4")
        // .from(plate, 1.2, {y:"+=200", ease:Sine.easeOut}, "elements")
        .staggerFrom(glass_right, 1, {x:"+=150"}, 0.1, "elements+=0.2")
        .from(silverware, 1, {x:"-=100"}, "elements-=0.75")


        // show headline
        .add("headline1", "+=0.3")

        // wipe footer right
        .add("wipe", "+=1.2")
        .to(card_footer, 1, {x:900 , ease:Power3.easeIn}, "wipe+=0.8")
        .set(logo, {css: {width: "146", height: "18"}})
        .set(logo, {x:161, y:65, autoAlpha:0})

        .to(footer, .5, {width:WIDTH, top:0, x:0, ease:Power3.easeIn}, "wipe+=1")
        .from(headline2, 0.8, {autoAlpha:0, y:"+=30", ease:Circ.easeOut}, "wipe+=2.4")
        .from(card_main, 0.8, {x:"-=20", ease:Circ.easeOut}, "wipe+=2.4")
        .from(card_main, 0.4, {autoAlpha:0}, "wipe+=2.6")

        // show cta and logo
        .to(logo, 0.6, {autoAlpha:1})
        .from(cta, 0.75, {autoAlpha:0, y:"+=60", ease:Circ.easeOut}, "wipe+=2.6")

        // endframe
        .add("endframe", "+=1.5")
        .to(headline2, 0.6, {autoAlpha:0}, "endframe")
        .to(logo, 0.4, {autoAlpha:0}, "endframe")
        .to(headline3, 0.8, {autoAlpha:1}, "endframe+=0.7")
        .to(logo_sapphire, 0.4, {autoAlpha:1}, "endframe+=0.8");



    // banner complete - show replay button
    function completeHandler() {
    	TweenMax.to(btn_pause, 0.1, {autoAlpha: 0});
    	TweenMax.to(btn_replay, 0.1, {autoAlpha: 1});
    }

    // cta event handlers
    cta.addEventListener('mouseover', function(e) {
        TweenMax.to(cta, 0.25, {scale:1.1, ease:Power1.easeInOut});
    }, false);


    cta.addEventListener('mouseout', function(e) {
        TweenMax.to(cta, 0.25, {scale:1, ease:Power1.easeInOut});
    }, false);

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
	    	TweenMax.set(btn_pause, {backgroundPositionX:'-5px'});
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



    document.addEventListener('keydown', keyboardEventHandler, false);



})();
