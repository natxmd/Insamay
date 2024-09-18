import { useState } from "react";

interface Props {
   link?: string
}

export default function Fb({ link }: Props) {

   const [hover, setHover] = useState(false)

   const fill = hover ? "#4D300D" : "#FFF"
   const fillBg = hover ? "#FFF" : "#4D300D"

   return (
      <a
         href={link}
         target="_blank">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="41"
            fill="none"
            viewBox="0 0 40 41"
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
         >
            <rect width="40" height="40" y="0.653" fill={fillBg} rx="7.619"></rect>
            <g clipPath="url(#clip0_515_4068)">
               <path
                  fill={fill}
                  d="M16.664 22.648v8.862h4.833v-8.862h3.605l.75-4.075h-4.355V17.13c0-2.154.846-2.98 3.03-2.98.679 0 1.225.017 1.541.05v-3.695c-.596-.163-2.054-.33-2.896-.33-4.454 0-6.508 2.105-6.508 6.642v1.755h-2.75v4.075h2.75z"
               ></path>
            </g>
            <defs>
               <clipPath id="clip0_515_4068">
                  <path
                     fill={fill}
                     d="M0 0H13.333V21.333H0z"
                     transform="translate(13.332 10.18)"
                  ></path>
               </clipPath>
            </defs>
         </svg>
      </a>
   );
}
