let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

// var swiper = new Swiper(".course-slider", {
//   spaceBetween: 20,
//   grabCursor: true,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     540: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },
// });

var swiper = new Swiper(".course-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  // Adding autoplay options here
  autoplay: {
    delay: 4500, // Delay in milliseconds between slides (e.g., 2500 milliseconds or 2.5 seconds)
    disableOnInteraction: true, // This means autoplay will not be disabled after user interactions (swipes), true by default
  },
});

var swiper = new Swiper(".teachers-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// var swiper = new Swiper(".reviews-slider", {
//   spaceBetween: 20,
//   grabCursor: true,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     540: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },
// });

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  effect: "coverflow",
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.addEventListener("DOMContentLoaded", () => {
  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Determine the target number based on the element's ID
          let target = 0;
          if (entry.target.id === "number150") {
            target = 150;
          } else if (entry.target.id === "number1500") {
            target = 1500;
          } else if (entry.target.id === "number80") {
            target = 80;
          }

          // else if (entry.target.id === "number100") {
          //   target = 100;
          // }

          // Animate the number
          animateNumber(entry.target, target);

          // Stop observing the element after animation starts
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.7 }
  );

  // Start observing the elements
  observer.observe(document.querySelector("#number150"));
  observer.observe(document.querySelector("#number1500"));
  observer.observe(document.querySelector("#number80"));
  // observer.observe(document.querySelector("#number100"));
});

function animateNumber(element, target) {
  let current = 0;
  const step = target / 200; // Adjust for smoother animation

  const counter = setInterval(() => {
    current += step;
    if (current > target) {
      element.innerText = `${target}+`; // Display the target number with a plus sign
      clearInterval(counter);
    } else {
      element.innerText = Math.ceil(current);
    }
  }, 10); // Adjust the speed of the counter as needed
}
