(function(){
  const slidesTestimonials = [
    '<div class="testimonialsSlide"><img src="img/carousal_two_1.jpg" alt=""><h3 class="slide_who">Cole Tiers</h3><p class="slide_what">I wanted to see Norway since childhood when I saw a stylish house right in the middle of the Norwegian forest in some magazine. I  thought then that I also want to live in such a house. This dream came true a few months ago on a tour of Norway. I am very happy! Thanks, guys!</p><h4 class="slide_when">October 28, 2018</h4></div>',
    '<div class="testimonials_slide"><img src="img/carousal_two_2.jpg" alt=""><h3 class="slide_who">Lilland Forester</h3><p class="slide_what">We went on this tour with our daughter, she was 5 years old. I was worried that it would be difficult for her but everything went great. We spent nights in good hotels with excellent breakfasts. My daughter always had something to eat, and the nature in Norway fascinated her even more than us!</p><h4 class="slide_when">May 13, 2019</h4></div>',
    '<div class="testimonials_slide"><img src="img/carousal_two_3.jpg" alt=""><h3 class="slide_who">May 13, 2019</h3><p class="slide_what">I still can\'t believe I have seen the Northern Lights with my own eyes! That was incredible! When we arrived in Tromsø, it was constantly snowing, the weather was bad, and the guide said that we were out of luck, most likely. But on the last night, right at midnight, the clouds left, and I saw it! It was magical!</p><h4 class="slide_when">January 12, 2020</h4></div>'
  ]
  let currentSlide = 0;

function renderCarousel() {
  const slidesTestimonialsContainer = document.querySelector(".slidesTestimonials .testimonialsSlide");
  slidesTestimonialsContainer.innerHTML = slidesTestimonials[currentSlide];
}
function nextSlide() {
  currentSlide = currentSlide + 1 >= slidesTestimonials.length ? 0 : currentSlide + 1;
  renderCarousel();
}
function prevSlide() {
  currentSlide = currentSlide - 1 <= 0 ? slidesTestimonials.length -1 : currentSlide - 1;
  renderCarousel();
}

const btnNexT = document.querySelector(".slidesTestimonials .nexT");
btnNexT.addEventListener('click', nextSlide);
const btnBacK = document.querySelector(".slidesTestimonials .bacK");
btnBacK.addEventListener('click', prevSlide);

renderCarousel();
window.addEventListener("resize", renderCarousel);
})()