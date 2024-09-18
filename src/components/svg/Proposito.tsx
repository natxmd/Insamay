
interface Props {
    color: string
}

function Proposito({color}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20"
    >
      <g
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clipPath="url(#clip0_420_274)"
      >
        <path d="M10.5 8.332a5 5 0 00-5-5H3v1.667a5 5 0 005 5h2.5M10.5 11.668a5 5 0 015-5H18v.833a5 5 0 01-5 5h-2.5M10.5 16.665V8.332"></path>
      </g>
      <defs>
        <clipPath id="clip0_420_274">
          <path fill="#fff" d="M0 0H20V20H0z" transform="translate(.5)"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Proposito;