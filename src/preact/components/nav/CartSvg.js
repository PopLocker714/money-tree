import { h, Fragment } from "preact";
const CartSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="m2.667 4 .353.118c1.76.586 2.64.88 3.143 1.578.504.698.504 1.626.504 3.481v3.49c0 3.77 0 5.656 1.171 6.828 1.172 1.172 3.057 1.172 6.829 1.172h10.666"
    />
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="M10 24a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM22 24a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM6.667 8h15.267c2.74 0 4.11 0 4.703.899.592.899.053 2.158-1.027 4.677l-.571 1.333c-.504 1.176-.756 1.764-1.257 2.094-.5.33-1.14.33-2.42.33H6.667"
    />
  </svg>
);
export default CartSvg;
