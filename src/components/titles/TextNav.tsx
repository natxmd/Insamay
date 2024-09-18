import { Link } from 'react-router-dom'

interface Props {
    to: string;
    text: string;
    onclick: () => void;
    ClassName?: string
}

const TextNav = ({ to, text, onclick, ClassName }: Props) => {
    return (
        <Link
            onClick={onclick}
            to={to}
            className={`textNav ${ClassName}`}>
            {text}
        </Link>
    )
}

export default TextNav
