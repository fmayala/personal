nextParticle = new NextParticle({
    image: document.all.logo,
    width: window.innerWidth,
    height: window.innerHeight,
    maxWidth: window.innerWidth * .8,
    particleGap: 2,
    initPosition: 'none',
    initDirection: 'none',
});

window.onresize = function () {
    if (window.innerWidth > 600) {
        nextParticle.width = window.innerWidth - 20;
        nextParticle.height = window.innerHeight - 20;
        nextParticle.start();
    }

    if (window.innerWidth < 600) {
        nextParticle.width = window.innerWidth;
        nextParticle.height = window.innerHeight;
        //nextParticle.imageHeight = window.innerHeight + 200;
        //nextParticle.imageWidth = window.innerWidth + 400;
        nextParticle.maxWidth = window.innerWidth * 2;
        nextParticle.start();
    }
};

window.nextParticle = nextParticle;

window.onload = () => {
    window.canvas = nextParticle.canvas;
}

var currentOpacity = 0

var imageFadeIn;
var imageFadeOut;

var counter = 0;
var fadeAnims = [];

function fadeOutEffect(fadeTarget, updateInterval, decrement) {
    if (fadeTarget == canvas) {
        clearInterval(imageFadeIn);
        imageFadeOut = setInterval(function () {
            if (!fadeTarget.style.opacity) {
                fadeTarget.style.opacity = 1;
            }

            if (fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= decrement;

            } else {
                nextParticle.stop();
                clearInterval(imageFadeOut);
                currentOpacity = parseInt(fadeTarget.style.opacity);
            }

        }, updateInterval);
    } else {
        var fadeOutEffectInt = setInterval(function () {
            if (!fadeTarget.style.opacity) {
                fadeTarget.style.opacity = 1;
            }

            if (fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= decrement;
            } else {
                clearInterval(fadeOutEffectInt);
                document.getElementById('infoBox').style.display = 'none';
            }

        }, updateInterval);
    }
}

function fadeInEffect(fadeTarget, updateInterval, increment) {
    // If interval is null
    if (fadeTarget == canvas) {
        clearInterval(imageFadeOut);

        imageFadeIn = setInterval(function () {
            nextParticle.start();
            if (fadeTarget.style.opacity < 1) {
                if (currentOpacity != 1)
                    currentOpacity += increment
                fadeTarget.style.opacity = currentOpacity;
            } else if (currentOpacity > 1) {
                currentOpacity = 1;
                clearInterval(imageFadeIn);
            } else {
                clearInterval(imageFadeIn);
            }

        }, updateInterval);
    } else {
        var fadeInEffectInt = setInterval(function () {
            document.getElementById('infoBox').style.display = 'block';

            if (fadeTarget.style.opacity < 1) {
                if (currentOpacity != 1)
                    currentOpacity += increment
                fadeTarget.style.opacity = currentOpacity;
            } else if (currentOpacity > 1) {
                clearInterval(fadeInEffectInt);
                currentOpacity = 1;
            } else {
                clearInterval(fadeInEffectInt);
            }

        }, updateInterval);
    }
}


var hambar = document.getElementById('nav-icon4')

hambar.addEventListener('click', () => {
    if (hambar.classList.contains('open')) {
        hambar.classList.remove('open')
    } else {
        hambar.classList.add('open')
    }
})