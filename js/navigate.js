location.hash = '#home';

var animLinks = document.querySelectorAll('.anim');

/**
 * Desktop Navigation
 */

// Home
animLinks[0].addEventListener('click', (e) => {
  e.preventDefault();

  // Change z-indices
  document.getElementById('infoBox').style.zIndex = '10'
  document.getElementById('meWrapper').style.zIndex = '20'

  // Bring image back
  fadeInEffect(canvas, 100, .1);


  // Fade out contents of side div
  //fadeOutEffect(document.getElementById('infoBox'), 20, .05);

  document.getElementById('infoBox').style.display = 'none';
})

// Portfolio
animLinks[1].addEventListener('click', (e) => {
  e.preventDefault();

  // Fade out interactable image.
  fadeOutEffect(canvas, 100, 0.1);

  //fadeInEffect(document.getElementById('infoBox'), 20, .05);

  document.getElementById('infoBox').style.display = 'block';

  // Change z-indices
  document.getElementById('infoBox').style.zIndex = '20'
  document.getElementById('meWrapper').style.zIndex = '10'

  document.getElementById('titleNav').textContent = "== portfolio"

  // Hide all other contents
  document.getElementById('contact').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  document.getElementById('resume').style.display = 'none'
  // 
  document.getElementById('portfolio').style.display = 'block';

})

// Resume
animLinks[2].addEventListener('click', (e) => {
  e.preventDefault();

  // Fade out interactable image.
  fadeOutEffect(canvas, 100, 0.1);

  //fadeInEffect(document.getElementById('infoBox'), 20, .05);

  // Change z-indices
  document.getElementById('infoBox').style.zIndex = '20'
  document.getElementById('meWrapper').style.zIndex = '10'

  document.getElementById('infoBox').style.display = 'block';

  document.getElementById('titleNav').textContent = "== resume"

  // Hide all other contents
  document.getElementById('portfolio').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  document.getElementById('contact').style.display = 'none';

  document.getElementById('resume').style.display = 'block'
})

// Contact
animLinks[3].addEventListener('click', (e) => {
  e.preventDefault();

  // Fade out interactable image.
  fadeOutEffect(canvas, 100, 0.1);

  //fadeInEffect(document.getElementById('infoBox'), 20, .05);

  // Change z-indices
  document.getElementById('infoBox').style.zIndex = '20'
  document.getElementById('meWrapper').style.zIndex = '10'

  document.getElementById('infoBox').style.display = 'block';

  document.getElementById('titleNav').textContent = "== contact"

  // Hide all other contents
  document.getElementById('portfolio').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  document.getElementById('resume').style.display = 'none'

  document.getElementById('contact').style.display = 'block';
})

// About
animLinks[4].addEventListener('click', (e) => {
  e.preventDefault();

  // Fade out interactable image.
  fadeOutEffect(canvas, 100, 0.1);

  //fadeInEffect(document.getElementById('infoBox'), 20, .05);

  // Change z-indices
  document.getElementById('infoBox').style.zIndex = '20'
  document.getElementById('meWrapper').style.zIndex = '10'

  document.getElementById('infoBox').style.display = 'block';

  document.getElementById('titleNav').textContent = "== about"

  // Hide all other contents
  document.getElementById('portfolio').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('resume').style.display = 'none'

  document.getElementById('about').style.display = 'block';
})

/**
 * Mouse determinations
 */

const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
  TweenMax.to($smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  })
}

var infobox = document.getElementById('boundinginfo')

/**
 * Mobile Navigation
 */

document.getElementById('homeNav').addEventListener('click', function (e) {
  e.preventDefault();

  // Change z-indices
  document.getElementById('infoBox').style.zIndex = '10'
  document.getElementById('meWrapper').style.zIndex = '20'

  // Bring image back
  fadeInEffect(canvas, 100, .1);
  fadeInEffect(document.getElementById('boundinginfo'), 20, .05);


  // Fade out contents of side div
  //fadeOutEffect(document.getElementById('infoBox'), 20, .05);
  document.getElementById('boundinginfo').style.display = 'block';
  document.getElementById('infoBox').style.display = 'none';
  document.getElementById('parentLanding').classList.add('overflow-y-scroll');

  hambar.classList.remove('open')
  document.getElementById("touch").checked = false;


  // Set hash
  location.hash = '#home'
})

document.getElementById('portfolioNav').addEventListener('click', function (e) {
  e.preventDefault();

  // Fade out interactable image.
  //fadeOutEffect(canvas, 100, 0.1);

  fadeInEffect(document.getElementById('infoBox'), 20, .05);

  // Change z-indices
  document.getElementById('infoBox').style.zIndex = '20'
  document.getElementById('meWrapper').style.zIndex = '10'

  // Remove intitial info.
  document.getElementById('boundinginfo').style.display = 'none';
  document.getElementById('parentLanding').classList.remove('overflow-y-scroll');

  // Change title
  document.getElementById('titleNav').textContent = "== portfolio"


  // Hide all other contents
  document.getElementById('resume').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('about').style.display = 'none';

  document.getElementById('portfolio').style.display = 'block';

  hambar.classList.remove('open')
  document.getElementById("touch").checked = false;

  // Set hash
  location.hash = '#portfolio'
})

document.getElementById('resumeNav').addEventListener('click', function (e) {
  e.preventDefault();

  // Fade out interactable image.
  //fadeOutEffect(canvas, 100, 0.1);

  fadeInEffect(document.getElementById('infoBox'), 20, .05);

  // Change z-indices
  document.getElementById('infoBox').style.zIndex = '20'
  document.getElementById('meWrapper').style.zIndex = '10'

  // Remove intitial info.
  document.getElementById('boundinginfo').style.display = 'none';
  document.getElementById('parentLanding').classList.remove('overflow-y-scroll');

  // Change title
  document.getElementById('titleNav').textContent = "== resume"


  // Hide all other contents
  document.getElementById('contact').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  document.getElementById('portfolio').style.display = 'none';

  document.getElementById('resume').style.display = 'block';

  hambar.classList.remove('open')
  document.getElementById("touch").checked = false;

  // Set hash
  location.hash = '#resume'
})

document.getElementById('contactNav').addEventListener('click', function (e) {
  e.preventDefault();

  // Fade out interactable image.
  //fadeOutEffect(canvas, 100, 0.1);

  fadeInEffect(document.getElementById('infoBox'), 20, .05);

  // Change z-indices
  document.getElementById('infoBox').style.zIndex = '20'
  document.getElementById('meWrapper').style.zIndex = '10'

  // Remove intitial info.
  document.getElementById('boundinginfo').style.display = 'none';
  document.getElementById('parentLanding').classList.remove('overflow-y-scroll');

  // Change title
  document.getElementById('titleNav').textContent = "== contact"


  // Hide all other contents
  document.getElementById('resume').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  document.getElementById('portfolio').style.display = 'none';

  document.getElementById('contact').style.display = 'block';

  hambar.classList.remove('open')
  document.getElementById("touch").checked = false;

  // Set hash
  location.hash = '#contact'
})

document.getElementById('aboutNav').addEventListener('click', function (e) {
  e.preventDefault();

  // Fade out interactable image.
  //fadeOutEffect(canvas, 100, 0.1);

  fadeInEffect(document.getElementById('infoBox'), 20, .05);

  // Change z-indices
  document.getElementById('infoBox').style.zIndex = '20'
  document.getElementById('meWrapper').style.zIndex = '10'

  // Remove intitial info.
  document.getElementById('boundinginfo').style.display = 'none';
  document.getElementById('parentLanding').classList.remove('overflow-y-scroll');

  // Change title
  document.getElementById('titleNav').textContent = "== about"


  // Hide all other contents
  document.getElementById('resume').style.display = 'none';
  document.getElementById('portfolio').style.display = 'none';
  document.getElementById('contact').style.display = 'none';

  document.getElementById('about').style.display = 'block';

  hambar.classList.remove('open')
  document.getElementById("touch").checked = false;

  // Set hash
  location.hash = '#about'
})