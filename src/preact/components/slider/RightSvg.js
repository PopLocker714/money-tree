import { h, Fragment } from "preact";
const RightSvg = (props) => (
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
      d="M6.625 12.25 1.375 7l5.25-5.25"
    />
  </svg>
);
export default RightSvg;
