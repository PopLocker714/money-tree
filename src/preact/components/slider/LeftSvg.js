import { h, Fragment } from "preact";
const LeftSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="#44BC1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1.375 12.25 6.625 7l-5.25-5.25"
    />
  </svg>
);
export default LeftSvg;
