export function SliderHome() {
  const sliderContainer = document.querySelector(".slider-container");
  console.log(sliderContainer);
  let sliderIndex = 0;
  let sliderInterval;

  function startSlider() {
    sliderContainer.style.width = `${sliderContainer.children.length * 100}%`;

    sliderInterval = setInterval(() => {
      sliderIndex++;
      if (sliderIndex >= sliderContainer.children.length) {
        sliderIndex = 0;
      }
      sliderContainer.style.transform = `translateX(-${
        (sliderIndex * 100) / sliderContainer.children.length
      }%)`;
    }, 2000);
  }

  startSlider();
}
