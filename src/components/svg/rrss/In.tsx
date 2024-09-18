import { useState } from "react";

interface Props {
   link?: string
}

function In({ link }: Props) {

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
            <rect width="40" height="40" y="0.153" fill={fillBg} rx="7.619"></rect>
            <g clipPath="url(#clip0_515_2377)">
               <path
                  fill={fill}
                  d="M14.741 30.314h-3.95V17.597h3.95v12.717zm-1.977-14.451c-1.263 0-2.287-1.046-2.287-2.309a2.288 2.288 0 014.574 0c0 1.263-1.024 2.309-2.287 2.309zM29.52 30.314h-3.941v-6.19c0-1.476-.03-3.368-2.054-3.368-2.053 0-2.368 1.603-2.368 3.261v6.297H17.21V17.597H21v1.735h.055c.527-1 1.815-2.053 3.737-2.053 3.997 0 4.732 2.631 4.732 6.05v6.985h-.004z"
               ></path>
            </g>
            <defs>
               <clipPath id="clip0_515_2377">
                  <path
                     fill={fill}
                     d="M0 0H19.048V21.769H0z"
                     transform="translate(10.477 9.68)"
                  ></path>
               </clipPath>
            </defs>
         </svg>
      </a>
   );
}

export default In;