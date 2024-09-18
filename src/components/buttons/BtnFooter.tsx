import { useState } from "react"

interface Props {
    text: string
    link: string
}
const BtnFooter = ({ text, link }: Props) => {
    const [hover, setHover] = useState(false)
    return (
        <a
            target="_blank"
            href={link}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`w-[254px] py-[18px] rounded-[32px] transition-all ease-linear
            ${!hover ? "bg-white text-browni" : "bg-browni text-white"}`}>
            <p className="font-satoshi font-medium text-[17px] text-center">
                {text}
            </p>
        </a>
    )
}

export default BtnFooter
