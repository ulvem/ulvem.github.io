/*const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
*/
/*
<!-- Section C -->
<section class="section-c">
  <div class="section-inner">
    <h2>Project</h2>
    <a href="#" class="btn">
      <div class="hover"></div>
      <span>Up</span>
    </a>
  </div>

  <div class="scroll-arrow">
    <svg width="30px" height="20px">
      <path
        stroke="#ffffff"
        fill="none"
        stroke-width="2px"
        d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
      ></path>
    </svg>
  </div>
</section>

<!-- Section D -->
<section class="section-d">
  <div class="section-inner">
    <h2>Project</h2>
    <a href="#" class="btn">
      <div class="hover"></div>
      <span>Up</span>
    </a>
  </div>

  <div class="scroll-arrow">
    <svg width="30px" height="20px">
      <path
        stroke="#ffffff"
        fill="none"
        stroke-width="2px"
        d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
      ></path>
    </svg>
  </div>
</section>

<!-- Section E -->
<section class="section-e">
  <div class="section-inner">
    <h2>Project</h2>
    <a href="#" class="btn">
      <div class="hover"></div>
      <span>Up</span>
    </a>
  </div>

  <div class="scroll-arrow">
    <svg width="30px" height="20px">
      <path
        stroke="#ffffff"
        fill="none"
        stroke-width="2px"
        d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
      ></path>
    </svg>
  </div>
</section>

<!-- Section F -->
<section class="section-f">
  <div class="section-inner">
    <h2>Project</h2>
    <a href="#" class="btn">
      <div class="hover"></div>
      <span>Up</span>
    </a>
  </div>
</section> */




