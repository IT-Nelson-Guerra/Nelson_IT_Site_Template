var elements = document.querySelectorAll('.card');
var elements2 = document.querySelectorAll('.wrapper');
var sideNav = document.querySelectorAll('.side-nav');
var navBtns = document.querySelectorAll('#projects-btn , #about-btn');

/**CARD */
anime({
    targets: elements,
    translateX: [-2500, 0],
    duration: 1500,
    loop: false,
    opacity: [0, 1],
    easing: 'spring(1, 80, 13, 0)',
    delay: 500
});

/**Contact Page--------------------------------- */
anime({
    targets: elements2,
    translateX: [-1000, 0],
    duration: 2500,
    loop: false,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    delay: (el, i) => {
        return 2000 + 100 * i;
    }
});

/**Project Containers */
anime({
    targets: '#container-1',
    translateX: [-1000, 0],
    duration: 1500,
    loop: false,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    delay: (el, i) => {
        return 1500 + 200 * i;
    }
});

/**Side Nav */
anime({
    targets: sideNav,
    translateY: [-1500, 0],
    duration: 2500,
    loop: false,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    delay: (el, i) => {
        return 1200 + 100 * i;
    }
});


/**Nav Buttons */
anime({
    targets: navBtns,
    translateY: [-1000, 0],
    duration: 2000,
    loop: false,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    delay: (el, i) => {
        return 2000 + 200 * i;
    }
});

/**EMAIL SLIDE IN */
anime({
    targets: '#email-slide',
    translateX: [-2000, 0],
    duration: 2000,
    loop: false,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    delay: (el, i) => {
        return 1500 + 200 * i;
    }
});


/**TITLE--------------------------------- */
anime({
    targets: '#my-title-slide',
    translateX: [-1000, 0],
    duration: 2500,
    loop: false,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    delay: (el, i) => {
        return 1500 + 100 * i;
    }
});

/**ARROW--------------------------------- */
anime({
    targets: '#arrow-slide',
    translateX: [-1000, 0],
    duration: 2500,
    loop: false,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    delay: (el, i) => {
        return 1600 + 100 * i;
    }
});

/**TEXT SLIDE--------------------------------- */
anime({
    targets: '#text-box-slide',
    translateX: [-1000, 0],
    duration: 2500,
    loop: false,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    delay: (el, i) => {
        return 1000 + 100 * i;
    }
});



/**TOOLTIPS -----------------------------------------------------------------------------------*/
tippy('#git-tooltip', {
    content: 'GitHub',
    placement: 'right',
    animation: 'fade',

});

tippy('#linkedin-tooltip', {
    content: 'LinkedIn',
    placement: 'right',
    animation: 'fade',

});

tippy('#codepen-tooltip', {
    content: 'CodePen',
    placement: 'right',
    animation: 'fade',

});

tippy('#logo-tooltip', {
    content: 'Home',
    placement: 'top',
    animation: 'fade',

});

tippy('#arrow-tooltip', {
    content: 'Projects',
    placement: 'top',
    animation: 'fade',

});

/**Particles -----------------------------------------------------------------------------------*/




/**GRADIENT BACKGROUND
var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#34e89e', '#0f3443'],
                ['#44A08D', '#093637'],
                ['#0f3443', '#34e89e']
            ]
        }
    }
});
*/