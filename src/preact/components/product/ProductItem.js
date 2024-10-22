import { h, Fragment } from "preact";

const ProductItem = ({ title, image, id, cost, discount }) => {
  return (
    <a href={`/product/${id}`} style={style.container} key={id}>
      {discount ? (
        <>
          <span style={style.alerts + style.alert}>Распродажа</span>
          <span style={style.alerts + style.present}>
            {Math.floor(100 - ((cost - discount) / cost) * 100)}%
          </span>
        </>
      ) : null}
      <img width="266px" src={image}></img>
      <div style={style.bottom}>
        <h3 style={style.title}>{title}</h3>
        {!discount ? (
          <p style={style.cost}>{cost}₽</p>
        ) : (
          <p style={style.cost + style.costMod}>
            {cost - discount}₽ <span style={style.costOld}>{cost}₽</span>
          </p>
        )}
      </div>
    </a>
  );
};

const style = {
  container: `
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-width: 266px;
    border-radius: 24px;
    background-color: #fff;
    box-shadow: 0px 0px 16px 0px rgba(51, 37, 87, 0.15);
    margin-bottom: 24px;
    `,
  title: `
    color: var(--color-text);
    font-size: 16px;
    margin-bottom: 16px;
    `,
  bottom: `
    padding: 16px;
  `,
  cost: `
    display: flex;
    align-items: center;
    font-size: 20px;
    width: fit-content;
    border-radius: 12px;
    color: var(--color-text);
    padding: 12px 24px;
    background-color: #F1F6F8;
  `,
  costMod: `
    color: #36A114;
  `,
  costOld: `
    margin-left: 4px;
    text-align: center;
    text-decoration: line-through;
    color: var(--color-gray);
    font-size: 12px;

  `,
  alerts: `
    color: white;
    position: absolute;
    top: 6%;
    background-color: #E9566A;
    border-radius: 8px;
    padding: 4px 8px;
  `,
  alert: `
    left: 6%;
  `,
  present: `
    right: 6%;
  `,
};

export default ProductItem;
