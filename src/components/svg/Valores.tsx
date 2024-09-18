interface Props {
    color: string
}
function Valores({ color }: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
        >
            <g
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                clipPath="url(#clip0_420_290)"
            >
                <path d="M16.25 10.477L10 16.667l-6.25-6.19A4.167 4.167 0 1110 5.005a4.166 4.166 0 116.25 5.477"></path>
                <path d="M10 5L7.256 7.744a.833.833 0 000 1.178l.452.453a1.474 1.474 0 002.084 0l.833-.833a2.652 2.652 0 013.75 0l1.875 1.875M10.418 12.918l1.667 1.667M12.5 10.832l1.667 1.667"></path>
            </g>
            <defs>
                <clipPath id="clip0_420_290">
                    <path fill="#fff" d="M0 0H20V20H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}

export default Valores;