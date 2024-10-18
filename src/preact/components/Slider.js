import { h } from "preact";
import { useEffect } from "preact/hooks";

const initSwiper = async () => {
  const { Swiper } = await import(
    "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs"
  );

  new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    // loop: true,

    autoplay: {
      delay: 8000,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

const Slider = () => {
  useEffect(() => {
    // const css = import(
    //   "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
    // );
    initSwiper();
  });

  return (
    <div class="swiper" style={swiper}>
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="swiper-slide__text-container">
            <h3>Создайте</h3>
            <h2 style={hero.title}>Cвой зеленый уголок</h2>
            <a style={hero.btn} href="/">
              Узнать подробнее
            </a>
          </div>
        </div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        ...
      </div>
      <div class="swiper-pagination"></div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  );
};

const swiper = `
  background-color: #f0fcf6;
  min-width: 100%;
  height: 312px;
`;

const hero = {
  btn: `
    color: #FFFFFF;
    font-size: 16px;
    display: inline-flex;
    border-radius: 30px;
    padding: 14px;
    background-color: #E9566A;
    width: fit-content;
  `,
  title: `
    font-size: 48px;
  `,
};

export default Slider;
