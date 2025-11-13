const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar .nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionCenter = sectionTop + sectionHeight / 2;

    // If scroll position is near the section's center
    if (scrollY + window.innerHeight / 2 >= sectionTop && scrollY + window.innerHeight / 2 < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Change active menu immediately when clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});










const imgList = document.getElementById("imgList");
const scrollRight = document.getElementById("scroll-right");
const scrollLeft = document.getElementById("scroll-left");

// Get the width of a single image (first <li>)
function getImageWidth() {
  const firstItem = imgList.querySelector("li");
  return firstItem ? firstItem.offsetWidth + 20 : 0; // 20 = gap between images
}

// Scroll right
scrollRight.addEventListener("click", () => {
  imgList.scrollBy({ left: getImageWidth(), behavior: "smooth" });
});

// Scroll left
scrollLeft.addEventListener("click", () => {
  imgList.scrollBy({ left: -getImageWidth(), behavior: "smooth" });
});

// Keep it centered on resize
window.addEventListener("resize", () => {
  imgList.scrollTo({ left: 0, behavior: "smooth" });
});
