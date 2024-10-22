import { h } from "preact";
import { useEffect } from "preact/hooks";
import { Navigation, Pagination } from "swiper/modules";
import RightSvg from "./slider/RightSvg";
import LeftSvg from "./slider/LeftSvg";

import Swiper from "swiper";

const initSwiper = async () => {
  new Swiper(".swiper__hero", {
    direction: "horizontal",
    loop: true,
    modules: [Navigation, Pagination],

    autoplay: {
      delay: 8000,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination__hero",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next__hero",
      prevEl: ".swiper-button-prev__hero",
    },
  });
};

const Slider = () => {
  useEffect(() => {
    initSwiper();
  });

  return (
    <div class="swiper swiper__hero" style={swiper}>
      <div class="swiper-wrapper">
        <div style={hero.slider[1]} class="swiper-slide">
          <div class="swiper-slide__text-container">
            <h3 style={hero.subTitle}>Создайте</h3>
            <h2 style={hero.title}>Cвой зеленый уголок</h2>
            <a style={hero.btn} href="/">
              Узнать подробнее
            </a>
          </div>
        </div>
        <div style={hero.slider[2]} class="swiper-slide">
          <div class="swiper-slide__text-container">
            <h3 style={hero.subTitle}>Широкий выбор </h3>
            <h2 style={hero.title}>Cуккулентов и толстянок</h2>
            <a style={hero.btn} href="/">
              Узнать подробнее
            </a>
          </div>
        </div>
        <div style={hero.slider[3]} class="swiper-slide">
          <div class="swiper-slide__text-container">
            <h2 style={hero.title}>Грунты, горшки и кашпо</h2>
            <a style={hero.btn} href="/">
              Узнать подробнее
            </a>
          </div>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination__hero"></div>
      <div class="swiper-button-prev swiper-button-prev__hero">
        <RightSvg />
      </div>
      <div class="swiper-button-next swiper-button-next__hero">
        <LeftSvg />
      </div>
    </div>
  );
};

const swiper = `
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
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  `,
  title: `
    font-size: 48px;
    font-weight: 600;
    margin: 18px 0 32px 0;
  `,
  subTitle: `
    margin: 0;
    color: #199E53;
    width: fit-content;
    font-size: 18px;
    border-radius: 30px;
    padding: 14px;
    background-color: #DCF9EA;
  `,
  slider: {
    1: `
      background-color: #f0fcf6;
    `,
    2: `
      background-color: #FAF0FC;
    `,
    3: `
      background-color: #FCF0F0;
    `,
  },
};

export default Slider;
