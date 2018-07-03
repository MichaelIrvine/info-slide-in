

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


// -----------------------------------------------------------------
const imageTriggers = document.querySelectorAll(".cover-image");
const infoPanel = document.querySelector(".cover-info");

function slideInfoOver(e) {
    imageTriggers.forEach(imageTrigger => {

        // bottom of browser window
        const triggerLine = window.scrollY + window.innerHeight;
        // Half way point of each image
        const imageHalfWay = imageTrigger.offsetHeight / 2;
        // Bottom of image
        const imageBottom = imageTrigger.offsetTop + imageTrigger.offsetHeight;

        if (triggerLine === imageHalfWay) {
            // infoPanel.classList.add("slide-over-active");
            console.log('we working');
        } 
        // else {
        // infoPanel.classList.remove("slide-over-active");
        // }
    });
}

window.addEventListener('scroll', debounce(slideInfoOver));



// Close Button ---
function closeSlide() {
    infoPanel.classList.remove('slide-over-active');
}