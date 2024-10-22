import { h } from "preact";
import CategoryItem from "../components/category/CategoryItem";
import { useEffect } from "preact/hooks";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import RightSvg from "../components/slider/RightSvg";
import LeftSvg from "../components/slider/LeftSvg";
const categories = [
  { title: "Розы", image: "/categories/rouse.png" },
  { title: "Готовые букеты", image: "/categories/buket.png" },
  { title: "Горшки", image: "/categories/pot.png" },
  { title: "Суккулент", image: "/categories/sykylent.png" },
  { title: "Готовые наборы", image: "/categories/nabor.png" },
  { title: "Еще категория", image: "/categories/rouse.png" },
  { title: "Еще категория", image: "/categories/rouse.png" },
];

const initSlider = () => {
  new Swiper(".swiper-categories", {
    modules: [Navigation],
    slidesPerView: 5, // Показывать сразу 5 слайдов
    spaceBetween: 24, // Промежуток между слайдами (в пикселях)
    navigation: {
      nextEl: ".swiper-button-next__category",
      prevEl: ".swiper-button-prev__category",
    },
  });
};

const Categories = () => {
  useEffect(() => {
    initSlider();
  });
  return (
    <section style={category} class="section">
      <div style={swiper} class="swiper swiper-categories">
        <div class="swiper-wrapper">
          {categories.map((item, index) => {
            return <CategoryItem key={index} {...item} />;
          })}
        </div>
      </div>
      <div class="swiper-button-prev swiper-button-prev__category">
        <RightSvg />
      </div>
      <div class="swiper-button-next swiper-button-next__category">
        <LeftSvg />
      </div>
    </section>
  );
};

const swiper = `
  min-width: 100%;
  height: 207px;
`;

const category = `
  position: relative;
  margin-bottom: 24px;
  `;

export default Categories;
