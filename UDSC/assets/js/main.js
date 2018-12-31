/*
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$head = $('head'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ],
			'xlarge-to-max':    '(min-width: 1681px)',
			'small-to-xlarge':  '(min-width: 481px) and (max-width: 1680px)'
		});

	// Stops animations/transitions until the page has ...

		// ... loaded.
			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-preload');
				}, 100);
			});

		// ... stopped resizing.
			var resizeTimeout;

			$window.on('resize', function() {

				// Mark as resizing.
					$body.addClass('is-resizing');

				// Unmark after delay.
					clearTimeout(resizeTimeout);

					resizeTimeout = setTimeout(function() {
						$body.removeClass('is-resizing');
					}, 100);

			});

	// Fixes.

		// Object fit images.
			if (!browser.canUse('object-fit')
			||	browser.name == 'safari')
				$('.image.object').each(function() {

					var $this = $(this),
						$img = $this.children('img');

					// Hide original image.
						$img.css('opacity', '0');

					// Set background.
						$this
							.css('background-image', 'url("' + $img.attr('src') + '")')
							.css('background-size', $img.css('object-fit') ? $img.css('object-fit') : 'cover')
							.css('background-position', $img.css('object-position') ? $img.css('object-position') : 'center');

				});

	// Sidebar.
		var $sidebar = $('#sidebar'),
			$sidebar_inner = $sidebar.children('.inner');

		// Inactive by default on <= large.
			breakpoints.on('<=large', function() {
				$sidebar.addClass('inactive');
			});

			breakpoints.on('>large', function() {
				$sidebar.removeClass('inactive');
			});

		// Hack: Workaround for Chrome/Android scrollbar position bug.
			if (browser.os == 'android'
			&&	browser.name == 'chrome')
				$('<style>#sidebar .inner::-webkit-scrollbar { display: none; }</style>')
					.appendTo($head);

		// Toggle.
			$('<a href="#sidebar" class="toggle">Toggle</a>')
				.appendTo($sidebar)
				.on('click', function(event) {

					// Prevent default.
						event.preventDefault();
						event.stopPropagation();

					// Toggle.
						$sidebar.toggleClass('inactive');

				});

		// Events.

			// Link clicks.
				$sidebar.on('click', 'a', function(event) {

					// >large? Bail.
						if (breakpoints.active('>large'))
							return;

					// Vars.
						var $a = $(this),
							href = $a.attr('href'),
							target = $a.attr('target');

					// Prevent default.
						event.preventDefault();
						event.stopPropagation();

					// Check URL.
						if (!href || href == '#' || href == '')
							return;

					// Hide sidebar.
						$sidebar.addClass('inactive');

					// Redirect to href.
						setTimeout(function() {

							if (target == '_blank')
								window.open(href);
							else
								window.location.href = href;

						}, 500);

				});

			// Prevent certain events inside the panel from bubbling.
				$sidebar.on('click touchend touchstart touchmove', function(event) {

					// >large? Bail.
						if (breakpoints.active('>large'))
							return;

					// Prevent propagation.
						event.stopPropagation();

				});

			// Hide panel on body click/tap.
				$body.on('click touchend', function(event) {

					// >large? Bail.
						if (breakpoints.active('>large'))
							return;

					// Deactivate.
						$sidebar.addClass('inactive');

				});

		// Scroll lock.
		// Note: If you do anything to change the height of the sidebar's content, be sure to
		// trigger 'resize.sidebar-lock' on $window so stuff doesn't get out of sync.

			$window.on('load.sidebar-lock', function() {

				var sh, wh, st;

				// Reset scroll position to 0 if it's 1.
					if ($window.scrollTop() == 1)
						$window.scrollTop(0);

				$window
					.on('scroll.sidebar-lock', function() {

						var x, y;

						// <=large? Bail.
							if (breakpoints.active('<=large')) {

								$sidebar_inner
									.data('locked', 0)
									.css('position', '')
									.css('top', '');

								return;

							}

						// Calculate positions.
							x = Math.max(sh - wh, 0);
							y = Math.max(0, $window.scrollTop() - x);

						// Lock/unlock.
							if ($sidebar_inner.data('locked') == 1) {

								if (y <= 0)
									$sidebar_inner
										.data('locked', 0)
										.css('position', '')
										.css('top', '');
								else
									$sidebar_inner
										.css('top', -1 * x);

							}
							else {

								if (y > 0)
									$sidebar_inner
										.data('locked', 1)
										.css('position', 'fixed')
										.css('top', -1 * x);

							}

					})
					.on('resize.sidebar-lock', function() {

						// Calculate heights.
							wh = $window.height();
							sh = $sidebar_inner.outerHeight() + 30;

						// Trigger scroll.
							$window.trigger('scroll.sidebar-lock');

					})
					.trigger('resize.sidebar-lock');

				});

	// Menu.
		var $menu = $('#menu'),
			$menu_openers = $menu.children('ul').find('.opener');

		// Openers.
			$menu_openers.each(function() {

				var $this = $(this);

				$this.on('click', function(event) {

					// Prevent default.
						event.preventDefault();

					// Toggle.
						$menu_openers.not($this).removeClass('active');
						$this.toggleClass('active');

					// Trigger resize (sidebar lock).
						$window.triggerHandler('resize.sidebar-lock');

				});

			});

})(jQuery);




  // point score AT THE TOP!!!


var w = document.getElementById("win"),
  winCount = 0;
w.onclick = function() {
  winCount += 15;
  w.innerHTML = "" + winCount;
  if(winCount == 45){
    // alert('no its 40');
    winCount = 40;
  w.innerHTML = "" + winCount;
}
}

var l = document.getElementById("loose"),
  looseCount = 0;
l.onclick = function() {
  looseCount += 15;
  l.innerHTML = "" + looseCount;
    if(looseCount == 45){
    // alert('no its 40');
    looseCount = 40;
  l.innerHTML = "" + looseCount;
}
};

// Mg stand for My Game 
// Og stands for Oppenents Game
  var Mg = document.getElementById("Mygame"),
  MgameScore = 0;
Mg.onclick = function() {
  MgameScore += 1;
  Mg.innerHTML = "" + MgameScore;
       winCount = 0;
    w.innerHTML= "" + winCount;
       looseCount = 0;
  l.innerHTML = "" + looseCount;
}

  var Og = document.getElementById("Ogame"),
  OgameScore = 0;
Og.onclick = function() {
  OgameScore += 1;
  Og.innerHTML = "" + OgameScore;
       winCount = 0;
    w.innerHTML= "" + winCount;
       looseCount = 0;
  l.innerHTML = "" + looseCount;
}
//Ms = my set
// Oset = oppenent's set
 var Ms = document.getElementById("MySet"),
  MsetScore = 0;
Ms.onclick = function() {
  MsetScore += 1;
  Ms.innerHTML = "" + MsetScore;
       MgameScore = 0;
    Mg.innerHTML= "" + MgameScore;
       OgameScore = 0;
  Og.innerHTML = "" + OgameScore;
}

  var Oset = document.getElementById("Oset"),
  OsetScore = 0;
Oset.onclick = function() {
  OsetScore += 1;
  Oset.innerHTML = "" + OsetScore;
       MgameScore = 0;
    Mg.innerHTML= "" + MgameScore;
       OgameScore = 0;
  Og.innerHTML = "" + OgameScore;
}

// SERVE COUNTERS!!


  var S1 = document.getElementById("serveOne"),
  serveOneScore = 0;
S1.onclick = function() {
  serveOneScore += 1;
  S1.innerHTML = "" + serveOneScore;
}

var S2 = document.getElementById("serveTwo"),
  serveTwoScore = 0;
S2.onclick = function() {
  serveTwoScore += 1;
  S2.innerHTML = "" + serveTwoScore;
}

// ALLEY BODY CENTER COUNTER (1st)

var OneA = document.getElementById("1Alley"),
  OneAlley = 0;
OneA.onclick = function() {
  OneAlley += 1;
  OneA.innerHTML = "" + OneAlley;
}

var OneB = document.getElementById("1Body"),
  OneBody = 0;
OneB.onclick = function() {
  OneBody += 1;
  OneB.innerHTML = "" + OneBody;
}
var OneC = document.getElementById("1Center"),
  OneCenter = 0;
OneC.onclick = function() {
  OneCenter += 1;
    OneC.innerHTML = "" + OneCenter;
  }

  // ABC (2nd)

  var TwoA = document.getElementById("2Alley"),
  TwoAlley = 0;
TwoA.onclick = function() {
  TwoAlley += 1;
  TwoA.innerHTML = "" + TwoAlley;
}

var TwoB = document.getElementById("2Body"),
  TwoBody = 0;
TwoB.onclick = function() {
  TwoBody += 1;
  TwoB.innerHTML = "" + TwoBody;
}
var TwoC = document.getElementById("2Center"),
  TwoCenter = 0;
TwoC.onclick = function() {
  TwoCenter += 1;
    TwoC.innerHTML = "" + TwoCenter;
  }
// FUNCTIONS - NOT IMPORTANT ANY MORE
// trans gets rid of BASE and VOLLEY
// base gets rid of TRANS and VOLLEY
// volley gets rid of BASE and TRANS
//VARS:
//  b is to get rid of BASE
// t is to get rid of TRANS
//  v is to get rid of VOLLEY
function trans() {
  // var b = document.getElementById("base");
  // if (b.style.display === "none") {
  //   b.style.display = "block";
  // } else {
  //   b.style.display = "none";
  // }
  
  //  var v = document.getElementById("voll");
  // if (v.style.display === "none") {
  //   v.style.display = "block";
  // } else {
  //   v.style.display = "none";
  // }

  var t = document.getElementById("trans");
  if (t.style.display === "none") {
    t.style.display = "block";
   } else {
     t.style.display = "block";
   }
}

function base() {
  // var t = document.getElementById("trans");
  // if (t.style.display === "none") {
  //   t.style.display = "block";
  // } else {
  //   t.style.display = "none";
  // }
  
  // var v = document.getElementById("voll");
  // if (v.style.display === "none") {
  //   v.style.display = "block";
  // } else {
  //   v.style.display = "none";
  // }

  var b = document.getElementById("base");
  if (b.style.display === "none") {
    b.style.display = "block";
   } else {
     b.style.display = "block";
   }
}

function volley() {
  //  var b = document.getElementById("base");
  // if (b.style.display === "none") {
  //   b.style.display = "block";
  // } else {
  //   b.style.display = "none";
  // }
  
  // var t = document.getElementById("trans");
  // if (t.style.display === "none") {
  //   t.style.display = "block";
  // } else {
  //   t.style.display = "none";
  // }

  var v = document.getElementById("voll");
  if (v.style.display === "none") {
    v.style.display = "block";
   } else {
     v.style.display = "block";
   }
}

function next(){
    var b = document.getElementById("base");
  if (b.style.display === "block") {
    b.style.display = "none";
  } else {
    b.style.display = "none";
  }

  var t = document.getElementById("trans");
  if (t.style.display === "block") {
    t.style.display = "none";
  } else {
    t.style.display = "none";
  }

  var v = document.getElementById("voll");
  if (v.style.display === "block") {
    v.style.display = "none";
  } else {
    v.style.display = "none";
  }
}
// COUNTERS: capita = vars lower = id 
//Baseline Ad Forcing 1-4 (baf1-4)
var BAF1 = document.getElementById("baf1"),
  Numbaf1 = 0;
BAF1.onclick = function() {
  Numbaf1 += 1;
  BAF1.innerHTML = "" + Numbaf1;
}

var BAF2 = document.getElementById("baf2"),
  Numbaf2 = 0;
BAF2.onclick = function() {
  Numbaf2 += 1;
  BAF2.innerHTML = "" + Numbaf2;
}

var BAF3 = document.getElementById("baf3"),
  Numbaf3 = 0;
BAF3.onclick = function() {
  Numbaf3 += 1;
  BAF3.innerHTML = "" + Numbaf3;
}

var BAF4 = document.getElementById("baf4"),
  Numbaf4 = 0;
BAF4.onclick = function() {
  Numbaf4 += 1;
  BAF4.innerHTML = "" + Numbaf4;
}
//Baseline Ad Unforced 1-4 (bau1-4)
var BAU1 = document.getElementById("bau1"),
  Numbau1 = 0;
BAU1.onclick = function() {
  Numbau1 += 1;
  BAU1.innerHTML = "" + Numbau1;
}
var BAU2 = document.getElementById("bau2"),
  Numbau2 = 0;
BAU2.onclick = function() {
  Numbau2 += 1;
  BAU2.innerHTML = "" + Numbau2;
}
var BAU3 = document.getElementById("bau3"),
  Numbau3 = 0;
BAU3.onclick = function() {
  Numbau3 += 1;
  BAU3.innerHTML = "" + Numbau3;
}
var BAU4 = document.getElementById("bau4"),
  Numbau4 = 0;
BAU4.onclick = function() {
  Numbau4 += 1;
  BAU4.innerHTML = "" + Numbau4;
}

// Baseline Duece Forcing 1-4 (bdf1-4) 

var BDF1 = document.getElementById("bdf1"),
  Numbdf1 = 0;
BDF1.onclick = function() {
  Numbdf1+= 1;
  BDF1.innerHTML = "" + Numbdf1;
}
var BDF2 = document.getElementById("bdf2"),
  Numbdf2 = 0;
BDF2.onclick = function() {
  Numbdf2 += 1;
  BDF2.innerHTML = "" + Numbdf2;
}
var BDF3 = document.getElementById("bdf3"),
  Numbdf3 = 0;
BDF3.onclick = function() {
  Numbdf3 += 1;
  BDF3.innerHTML = "" + Numbdf3;
}
var BDF4 = document.getElementById("bdf4"),
  Numbdf4 = 0;
BDF4.onclick = function() {
  Numbdf4 += 1;
  BDF4.innerHTML = "" + Numbdf4;
}

// Baseline Duece Unforced (bdu1-4)

var BDU1 = document.getElementById("bdu1"),
  Numbdu1 = 0;
BDU1.onclick = function() {
  Numbdu1+= 1;
  BDU1.innerHTML = "" + Numbdu1;
}
var BDU2 = document.getElementById("bdu2"),
  Numbdu2 = 0;
BDU2.onclick = function() {
  Numbdu2 += 1;
  BDU2.innerHTML = "" + Numbdu2;
}
var BDU3 = document.getElementById("bdu3"),
  Numbdu3 = 0;
BDU3.onclick = function() {
  Numbdu3 += 1;
  BDU3.innerHTML = "" + Numbdu3;
}
var BDU4 = document.getElementById("bdu4"),
  Numbdu4 = 0;
BDU4.onclick = function() {
  Numbdu4 += 1;
  BDU4.innerHTML = "" + Numbdu4;
}




//Transition Ad Forcing 1-4 (taf1-4)
var TAF1 = document.getElementById("taf1"),
  Numtaf1 = 0;
TAF1.onclick = function() {
  Numtaf1 += 1;
  TAF1.innerHTML = "" + Numtaf1;
}

var TAF2 = document.getElementById("taf2"),
  Numtaf2 = 0;
TAF2.onclick = function() {
  Numtaf2 += 1;
  TAF2.innerHTML = "" + Numtaf2;
}

var TAF3 = document.getElementById("taf3"),
  Numtaf3 = 0;
TAF3.onclick = function() {
  Numtaf3 += 1;
  TAF3.innerHTML = "" + Numtaf3;
}

var TAF4 = document.getElementById("taf4"),
  Numtaf4 = 0;
TAF4.onclick = function() {
  Numtaf4 += 1;
  TAF4.innerHTML = "" + Numtaf4;
}
//Transition Ad Unforced 1-4 (tau1-4)
var TAU1 = document.getElementById("tau1"),
  Numtau1 = 0;
TAU1.onclick = function() {
  Numtau1 += 1;
  TAU1.innerHTML = "" + Numtau1;
}
var TAU2 = document.getElementById("tau2"),
  Numtau2 = 0;
TAU2.onclick = function() {
  Numtau2 += 1;
  TAU2.innerHTML = "" + Numtau2;
}
var TAU3 = document.getElementById("tau3"),
  Numtau3 = 0;
TAU3.onclick = function() {
  Numtau3 += 1;
  TAU3.innerHTML = "" + Numtau3;
}
var TAU4 = document.getElementById("tau4"),
  Numtau4 = 0;
TAU4.onclick = function() {
  Numtau4 += 1;
  TAU4.innerHTML = "" + Numtau4;
}

// Transition Duece Forcing 1-4 (tdf1-4) 

var TDF1 = document.getElementById("tdf1"),
  Numtdf1 = 0;
TDF1.onclick = function() {
  Numtdf1+= 1;
  TDF1.innerHTML = "" + Numtdf1;
}
var TDF2 = document.getElementById("tdf2"),
  Numtdf2 = 0;
TDF2.onclick = function() {
  Numtdf2 += 1;
  TDF2.innerHTML = "" + Numtdf2;
}
var TDF3 = document.getElementById("tdf3"),
  Numtdf3 = 0;
TDF3.onclick = function() {
  Numtdf3 += 1;
  TDF3.innerHTML = "" + Numtdf3;
}
var TDF4 = document.getElementById("tdf4"),
  Numtdf4 = 0;
TDF4.onclick = function() {
  Numtdf4 += 1;
  TDF4.innerHTML = "" + Numtdf4;
}

// Transition Duece Unforced (bdu1-4)

var TDU1 = document.getElementById("tdu1"),
  Numtdu1 = 0;
TDU1.onclick = function() {
  Numtdu1+= 1;
  TDU1.innerHTML = "" + Numtdu1;
}
var TDU2 = document.getElementById("tdu2"),
  Numtdu2 = 0;
TDU2.onclick = function() {
  Numtdu2 += 1;
  TDU2.innerHTML = "" + Numtdu2;
}
var TDU3 = document.getElementById("tdu3"),
  Numtdu3 = 0;
TDU3.onclick = function() {
  Numtdu3 += 1;
  TDU3.innerHTML = "" + Numtdu3;
}
var TDU4 = document.getElementById("tdu4"),
  Numtdu4 = 0;
TDU4.onclick = function() {
  Numtdu4 += 1;
  TDU4.innerHTML = "" + Numtdu4;
}

// LOVE ALL

function loveAll(){
  // reset Score - POINT then GAME then SET (along w auto reset whenver game/set is pressed) 
  winCount = 0;
w.innerHTML = "" + winCount;
  
  looseCount = 0;
  l.innerHTML = "" + looseCount;

    MgameScore = 0;
Mg.innerHTML = "" + MgameScore;
  
  OgameScore = 0;
  Og.innerHTML = "" + OgameScore;

MsetScore = 0;
Ms.innerHTML = "" + MsetScore;

OsetScore = 0;
Oset.innerHTML = "" + OsetScore;

//1st and 2nd Serve

serveOneScore = 0;
S1.innerHTML = "" + serveOneScore;

serveTwoScore = 0;
S2.innerHTML = "" + serveTwoScore;

// Alley Body Center 1st THEN 2nd

OneAlley = 0;
OneA.innerHTML = "" + OneAlley;

OneBody = 0;
OneB.innerHTML = "" + OneBody;

OneCenter = 0;
OneC.innerHTML = "" + OneCenter;

TwoAlley = 0;
TwoA.innerHTML = "" + TwoAlley;

TwoBody = 0;
TwoB.innerHTML = "" + TwoBody;

TwoCenter = 0;
TwoC.innerHTML = "" + TwoCenter;
// Baseline forcing ad side 1-4 
Numbaf1 = 0;
BAF1.innerHTML = "" + Numbaf1

Numbaf2 = 0;
BAF2.innerHTML = "" + Numbaf2

Numbaf3 = 0;
BAF3.innerHTML = "" + Numbaf3

Numbaf4 = 0;
BAF4.innerHTML = "" + Numbaf4

// baseline unfroced ad side 1-4

Numbau1 = 0;
BAU1.innerHTML = "" + Numbau1

Numbau2 = 0;
BAU2.innerHTML = "" + Numbau2

Numbau3 = 0;
BAU3.innerHTML = "" + Numbau3

Numbau4 = 0;
BAU4.innerHTML = "" + Numbau4

// baseline duece forcing 1-4
Numbdf1 = 0;
BDF1.innerHTML = "" + Numbdf1

Numbdf2 = 0;
BDF2.innerHTML = "" + Numbdf2

Numbdf3 = 0;
BDF3.innerHTML = "" + Numbdf3

Numbdf4 = 0;
BDF4.innerHTML = "" + Numbdf4

//baselien duece unforced 1-4

Numbdu1 = 0;
BDU1.innerHTML = "" + Numbdu1

Numbdu2 = 0;
BDU2.innerHTML = "" + Numbdu2

Numbdu3 = 0;
BDU3.innerHTML = "" + Numbdu3

Numbdu4 = 0;
BDU4.innerHTML = "" + Numbdu4
// TRANSITION ad forcing 1-4 
Numtaf1 = 0;
TAF1.innerHTML = "" + Numtaf1

Numtaf2 = 0;
TAF2.innerHTML = "" + Numtaf2

Numtaf3 = 0;
TAF3.innerHTML = "" + Numtaf3

Numtaf4 = 0;
TAF4.innerHTML = "" + Numtaf4

// transition  unfroced ad side 1-4

Numtau1 = 0;
TAU1.innerHTML = "" + Numtau1

Numtau2 = 0;
TAU2.innerHTML = "" + Numtau2

Numtau3 = 0;
TAU3.innerHTML = "" + Numtau3

Numtau4 = 0;
TAU4.innerHTML = "" + Numtau4

// transition duece forcing 1-4
Numtdf1 = 0;
TDF1.innerHTML = "" + Numtdf1

Numtdf2 = 0;
TDF2.innerHTML = "" + Numtdf2

Numtdf3 = 0;
TDF3.innerHTML = "" + Numtdf3

Numtdf4 = 0;
TDF4.innerHTML = "" + Numtdf4

//transition duece unforced 1-4

Numtdu1 = 0;
TDU1.innerHTML = "" + Numtdu1

Numtdu2 = 0;
TDU2.innerHTML = "" + Numtdu2

Numtdu3 = 0;
TDU3.innerHTML = "" + Numtdu3

Numtdu4 = 0;
TDU4.innerHTML = "" + Numtdu4
  }
// Analysis!!!!!!s
// document.getElementById("anaTwo").innerHTML = TRIAL();

// anaTwo.onclick = function() {
//   if(OneAlley >= 6) {
//    return "You hit most of your severs to the alley";
//    } 
// }
// // function TRIAL() {
// //   // var totalServe = serveOneScore + serveTwoScore;
// //   //   return "You're serve went in " + serveOneScore + " / " + totalServe + " times";
// //   if(OneAlley >= 6) {
// //    return "You hit most of your severs to the alley";
// //    } 
// // }

//   function Analyze() {
   
// var totalServe = serveOneScore + serveTwoScore;
//     document.getElementById("ana").innerHTML = ("You're serve went in " + serveOneScore + " / " + totalServe + " times");

//     //  if(serveOneScore > serveTwoScore ){
//     //   document.getElementById("ana").innerHTML = ("You're serve mostly goes in on the first try");
//     // }

//     // if(serveTwoScore > serveOneScore ){
//     //   document.getElementById("ana").innerHTML = ("You need to work on getting your first serve in more consitiantly");
//     // }
// if(OneAlley >= 6) {
//    document.getElementById("ana").innerHTML = ("You hit most of your severs to the alley") 
//    }
//  }

    