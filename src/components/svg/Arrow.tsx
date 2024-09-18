
interface Props {
    color: string;
    style?: React.CSSProperties;
}

export function Arrow({ color, style }: Props) {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="10"
            fill="none"
            viewBox="0 0 16 10"
            style={style}
        >
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.4"
                d="M1 5h14M11 9l4-4M11 1l4 4"
            ></path>
        </svg>
    );
}

export default Arrow;
