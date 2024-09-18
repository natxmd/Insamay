interface Props {
  fill?: string
}

function Consultorias({ fill }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="72"
      fill="none"
      viewBox="0 0 72 72"
    >
      <g fill={fill} clipPath="url(#clip0_2342_578)">
        <path d="M27.76 8H44.7v38.123h-1.263c-7.855 0-15.71-.011-23.564.023a3.96 3.96 0 00-1.867.506c-3.434 1.967-6.834 3.993-10.248 5.996-.307.18-.633.325-1.104.565V46.12H-4V8h31.76zm-2.9 22.545l8.84-8.71a71169.7 71169.7 0 00-3.415-3.47L17.805 30.93l-7.35-7.543-3.423 3.283 10.685 10.918c.304-.275.38-.3.43-.35 2.2-2.194 4.398-4.39 6.713-6.693z"></path>
        <path d="M56.151 58.082c-1.388-1.084-2.89-1.27-4.539-1.257-7.374.06-14.75.026-22.124.026h-1.302v-5.96h21.313v-5.374h21.648v-4.72H49.602V34.81h21.524V30.06h-21.53V18.772h27.258v38.042H66.228V64L56.15 58.082z"></path>
      </g>
      <defs>
        <clipPath id="clip0_2342_578">
          <path fill="#fff" d="M0 0H72V72H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Consultorias;