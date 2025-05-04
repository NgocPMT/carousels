let slideIndex = 1;

const showSlide = (showingIndex) => {
  const slides = document.querySelectorAll(".slide-card");
  const slideDots = document.querySelectorAll(".slide-dot");
  const slideAmount = slides.length;

  if (slideIndex > slideAmount) {
    showingIndex = 1;
    slideIndex = 1;
  } else if (slideIndex < 1) {
    showingIndex = slides.length;
    slideIndex = slides.length;
  }

  slides.forEach((slide, index) => {
    if (index + 1 === showingIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
  slideDots.forEach((dot, index) => {
    if (index + 1 === showingIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
};

const showNext = () => {
  slideIndex++;
  showSlide(slideIndex);
  console.log("showing next slide");
};

const showPrev = () => {
  slideIndex--;
  showSlide(slideIndex);
  console.log("showing previous slide");
};

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const slideDots = document.querySelectorAll(".slide-dot");

slideDots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index + 1));
});

nextButton.addEventListener("click", () => showNext());
prevButton.addEventListener("click", () => showPrev());

showSlide(slideIndex);
