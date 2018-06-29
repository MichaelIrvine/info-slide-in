

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

function slideInfoOver() {
    imageTriggers.forEach(imageTrigger => {
      // half way through the image
      const slideInAt = (window.scrollY + window.innerHeight) - imageTrigger.height / 2;
      // bottom of the image
      const imageBottom = imageTrigger.offsetTop + imageTrigger.height;
      const isHalfShown = slideInAt > imageTrigger.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        infoPanel.classList.add("slide-over-active");
      } else {
        infoPanel.classList.remove("slide-over-active");
      }
    });
}

window.addEventListener('scroll', debounce(slideInfoOver));



// Close Button ---
function closeSlide() {
    infoPanel.classList.remove('slide-over-active');
}