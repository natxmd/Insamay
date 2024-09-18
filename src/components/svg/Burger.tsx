interface Props {
  onClick: () => void;
  fill: string
}
function Burger({ onClick, fill }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
      className="cursor-pointer"
      onClick={onClick}
    >
      <circle cx="24" cy="24" r="23.5" stroke={fill}></circle>
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12.46 18h22.858M15.316 25.012H32.46M19.992 32.025h7.792"
      ></path>
    </svg>
  );
}

export default Burger;