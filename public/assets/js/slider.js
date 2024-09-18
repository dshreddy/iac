const sliderList = document.getElementById("slider");
const intiailNumberSlides = sliderList.children.length;
let nSlides = 3;
let centralSlide = 1;
let slideNumber = 100 / nSlides;
resetSlides(slideNumber)

// console.log(intiailNumberSlides);

function resetSlides(number) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => (slide.style.width = `${number}%`));
    slideNumber = number;
}

function calculateCentralSlide(numVisibleItems) {
    const centralSlide= Math.ceil(numVisibleItems / 2);
    return centralSlide;
}

function addActiveElement(centralItem, totalVisibleItems) {
    // Clear active class
    const sliderItems = document.querySelectorAll(".slide-content");
    // console.log(sliderItems)
    sliderItems.forEach((item) =>
      item.classList.remove("active")
    );
  
    const central = sliderItems[Math.floor(centralItem)];
    central.classList.add("active");
  
    if (totalVisibleItems % 2 === 0) {
      const central2 = sliderItems[Math.floor(centralItem) + 1];
      central2.classList.add("active");
  
      if (totalVisibleItems == 2) {
        const central3 = sliderItems[Math.floor(centralItem) - 1];
        central3.classList.add("active");
      }
    }
}

addActiveElement(centralSlide, nSlides);


function autoScroll() {
    const firstItem = sliderList.firstElementChild;
    firstItem.style.marginLeft = `calc(-${slideNumber}%)`;
  
    if (firstItem) {
      setTimeout(() => {
        firstItem.style.marginLeft = "";
        sliderList.appendChild(firstItem);
      }, 300);
    }
    addActiveElement(centralSlide+1, nSlides);
}

setInterval(autoScroll, 2500);