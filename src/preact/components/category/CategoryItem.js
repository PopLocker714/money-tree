import { h } from "preact";

const CategoryItem = ({ title, key, image }) => {
  return (
    <a href="/catalog" style={style(image)} class="swiper-slide" key={key}>
      {title}
    </a>
  );
};

const style = (url) => {
  return `
    display: flex;
    align-items: flex-start;
    color: var(--color-black);
    padding: 20px;
    border-radius: 25px;
    background-color: #F1F6F8;
    background-image: url("${url}");
    background-repeat: no-repeat;
    background-position: 100% 100% ;
    `;
};

export default CategoryItem;
