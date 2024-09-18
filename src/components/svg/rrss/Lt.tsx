import { useState } from "react";

interface Props {
    link?: string
}

function Lt({ link }: Props) {

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
                <g filter="url(#filter0_b_515_2373)">
                    <rect width="40" height="40" y="0.153" fill={fillBg} rx="7.619"></rect>
                    <path
                        fill={fill}
                        d="M26.075 16.62h3.26v2.972h-5.273l3.51 3.947-1.965 1.978-5.5-5.326-5.04 5.496-2.144-2.268 3.334-3.776H11v-3.005h5.554l-3.843-3.643 2.141-2.24 3.524 3.681.17-.087V9.153h3.222v5.375l3.523-3.837 2.31 2.327-3.799 3.602h2.273z"
                    ></path>
                    <path
                        fill={fill}
                        d="M21.793 29.867v1.286h-3.2v-7.098h3.2v5.812z"
                    ></path>
                </g>
                <defs>
                    <filter
                        id="filter0_b_515_2373"
                        width="48"
                        height="48"
                        x="-4"
                        y="-3.847"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feGaussianBlur
                            in="BackgroundImageFix"
                            stdDeviation="2"
                        ></feGaussianBlur>
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_515_2373"
                        ></feComposite>
                        <feBlend
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_515_2373"
                            result="shape"
                        ></feBlend>
                    </filter>
                </defs>
            </svg>
        </a>
    );
}

export default Lt;