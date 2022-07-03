(function(){
  const slides = [
   '<div class="stCarousel"><img src="img/carousal_1.jpg" alt="photo"></div>',
   '<div class="stCarousel"><img src="img/carousal_2.jpg" alt="photo"></div>',
   '<div class="stCarousel"><img src="img/carousal_3.jpg" alt="photo"></div>',
   '<div class="stCarousel"><img src="img/carousal_4.jpg" alt="photo"></div>',
   '<div class="stCarousel"><img src="img/carousal_5.jpg" alt="photo"></div>',
   '<div class="stCarousel"><img src="img/carousal_6.jpg" alt="photo"></div>'
  ];
  let actualSlide = 0;

  function reviveCarousel() {
    const slidesContainer = document.querySelector(".stunningCarousal .stCarousel");
    slidesContainer.innerHTML = slides[actualSlide];
    if (window.innerWidth >= 650) {
      const secondSlide = actualSlide + 1  >= slides.length ? 0 : actualSlide + 1;
      slidesContainer.innerHTML += slides[secondSlide];
      if (window.innerWidth >= 1000) {
        const nextSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
        slidesContainer.innerHTML += slides[nextSlide];
      }
    }
  }

 function followingSlide() {
  actualSlide = actualSlide + 1 >= slides.length ? 0 : actualSlide + 1;
  reviveCarousel();
 }
 function prevSlide() {
  actualSlide = actualSlide - 1 <= 0 ? slides.length -1 : actualSlide - 1;
  reviveCarousel();
 } 

 const btnNext = document.querySelector(".stunningCarousal .next");
 btnNext.addEventListener('click', followingSlide);
 const btnBack = document.querySelector(".stunningCarousal .back");
 btnBack.addEventListener('click', prevSlide);

 reviveCarousel();
 window.addEventListener("resize", reviveCarousel);
})()