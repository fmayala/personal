var animLinks = document.querySelectorAll('.anim');

// Home
animLinks[0].addEventListener('click', (e) => {
    e.preventDefault();

    // Change z-indices
    document.getElementById('infoBox').style.zIndex = '10'
    document.getElementById('meWrapper').style.zIndex = '20'

    // Bring image back
    fadeInEffect(canvas, 100, .1);


    // Fade out contents of side div
    fadeOutEffect(document.getElementById('infoBox'), 20, .05);
})

// Portfolio
animLinks[1].addEventListener('click', (e) => {
    e.preventDefault();

    // Fade out interactable image.
    fadeOutEffect(canvas, 100, 0.1);

    fadeInEffect(document.getElementById('infoBox'), 20, .05);

    // Change z-indices
    document.getElementById('infoBox').style.zIndex = '20'
    document.getElementById('meWrapper').style.zIndex = '10'

    document.getElementById('titleNav').textContent = "== portfolio"

})

// Resume
animLinks[2].addEventListener('click', (e) => {
    e.preventDefault();


    document.querySelector('.wrapper').classList.add('pointer-events-auto');


    document.getElementById('infoBox').style.display = 'block';
    document.getElementById('titleNav').textContent = "== resume"

})

// Contact
animLinks[3].addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('.wrapper').classList.add('pointer-events-auto');

    document.getElementById('infoBox').style.display = 'block';
    document.getElementById('titleNav').textContent = "== contact"

})

// About
animLinks[4].addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('.wrapper').classList.add('pointer-events-auto');

    document.getElementById('infoBox').style.display = 'block';
    document.getElementById('titleNav').textContent = "== about"

})

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