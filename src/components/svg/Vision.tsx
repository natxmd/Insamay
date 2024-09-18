interface Props {
    color: string
}
function Vision({ color }: Props) {
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
                clipPath="url(#clip0_420_281)"
            >
                <path d="M3 10a7.5 7.5 0 1015 0 7.5 7.5 0 00-15 0zM3.5 7.5h14M3.5 12.5h14M10.082 2.5a14.166 14.166 0 000 15M10.918 2.5a14.166 14.166 0 010 15"></path>
            </g>
            <defs>
                <clipPath id="clip0_420_281">
                    <path fill="#fff" d="M0 0H20V20H0z" transform="translate(.5)"></path>
                </clipPath>
            </defs>
        </svg>
    );
}

export default Vision;