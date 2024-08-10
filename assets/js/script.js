//---------- Navbar ----------//

window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  navbar.classList.toggle("fixed", this.window.scrollY > 0);
});

const texts = [
  "Backend Web Developer",
  "Cloud Computing Enthusiast",
  "Machine Learning Enthusiast",
];
let index = 0;
const dynamicText = document.getElementById("dynamic-text");

function changeText() {
  dynamicText.style.opacity = 0; // Start fade out
  setTimeout(() => {
    index = (index + 1) % texts.length; // Cycle through texts
    dynamicText.innerHTML = `<span>${texts[index]}</span>`;
    dynamicText.style.opacity = 1; // Fade in the new text
  }, 500); // Timing for the fade out effect
}

setInterval(changeText, 2000);
// Portfolio Gallery

let filterContainer = document.querySelector(".gallery-filter");
let galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {
    // deactivates existing active filter item
    filterContainer.querySelector(".active").classList.remove("active");
    // activates new filter item
    event.target.classList.add("active");
    let filterValue = event.target.getAttribute("data-filter");
    galleryItems.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});

// Review Carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1200: {
      items: 2,
    },
  },
});
