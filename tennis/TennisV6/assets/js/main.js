/*
	Read Only by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$titleBar = null,
		$nav = $('#nav'),
		$wrapper = $('#wrapper');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '1025px',  '1280px' ],
			medium:   [ '737px',   '1024px' ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Tweaks/fixes.

		// Polyfill: Object fit.
			if (!browser.canUse('object-fit')) {

				$('.image[data-position]').each(function() {

					var $this = $(this),
						$img = $this.children('img');

					// Apply img as background.
						$this
							.css('background-image', 'url("' + $img.attr('src') + '")')
							.css('background-position', $this.data('position'))
							.css('background-size', 'cover')
							.css('background-repeat', 'no-repeat');

					// Hide img.
						$img
							.css('opacity', '0');

				});

			}

	// Header Panel.

		// Nav.
			var $nav_a = $nav.find('a');

			$nav_a
				.addClass('scrolly')
				.on('click', function() {

					var $this = $(this);

					// External link? Bail.
						if ($this.attr('href').charAt(0) != '#')
							return;

					// Deactivate all links.
						$nav_a.removeClass('active');

					// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
						$this
							.addClass('active')
							.addClass('active-locked');

				})
				.each(function() {

					var	$this = $(this),
						id = $this.attr('href'),
						$section = $(id);

					// No section for this link? Bail.
						if ($section.length < 1)
							return;

					// Scrollex.
						$section.scrollex({
							mode: 'middle',
							top: '5vh',
							bottom: '5vh',
							initialize: function() {

								// Deactivate section.
									$section.addClass('inactive');

							},
							enter: function() {

								// Activate section.
									$section.removeClass('inactive');

								// No locked links? Deactivate all links and activate this section's one.
									if ($nav_a.filter('.active-locked').length == 0) {

										$nav_a.removeClass('active');
										$this.addClass('active');

									}

								// Otherwise, if this section's link is the one that's locked, unlock it.
									else if ($this.hasClass('active-locked'))
										$this.removeClass('active-locked');

							}
						});

				});

		// Title Bar.
			$titleBar = $(
				'<div id="titleBar">' +
					'<a href="#header" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$header
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'header-visible'
				});

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() {

				if (breakpoints.active('<=medium'))
					return $titleBar.height();

				return 0;

			}
		});

})(jQuery);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("topBTN").style.display = "block";
  } else {
    document.getElementById("topBTN").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// POINT COUNTERS AT TOP

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