let scrollPos = window.scrollY;
const numbersSection = document.querySelector(".numbers-section");
const numbersSectionTop =
  numbersSection.offsetTop + numbersSection.offsetHeight - window.innerHeight;

const animateNumbersSection = () => {
  scrollPos = window.scrollY;

  const numOne = document.getElementById("num-1");
  const numTwo = document.getElementById("num-2");
  const numThree = document.getElementById("num-3");
  const duration = 3000;
  const time_duration = 1000;

  if (scrollPos >= numbersSectionTop) {
    numbersSection.classList.add("active");
  }

  if (numbersSection.classList.contains("active")) {
    animateValue(numOne, 0, 1120, duration);
    animateValue(numTwo, 0, 1383, duration);
    animateValue(numThree, 0, 20, time_duration);
    window.removeEventListener("scroll", animateNumbersSection, true);
  }
};

const animateValue = (obj, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

window.addEventListener("scroll", animateNumbersSection, true);
