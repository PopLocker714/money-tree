import { h, Fragment } from "preact";
const UserSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="M16 13.334a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667ZM16 28c5.155 0 9.333-2.388 9.333-5.334 0-2.945-4.178-5.333-9.333-5.333s-9.333 2.388-9.333 5.333C6.667 25.612 10.845 28 16 28Z"
    />
  </svg>
);
export default UserSvg;
