import { useState } from "react"
import Arrow from "../svg/Arrow"

interface Props {
    text: string
    link: string
    ClassName?: string
}

const BtnYellow = ({ text, link, ClassName }: Props) => {
    const [hover, setHover] = useState(false)

    return (
        <a
            target="_blank"
            href={link}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`flex items-center gap-[16px] transition-all ease-linear
            py-[12px] px-[24px] rounded-[32px] cursor-pointer ${ClassName} h-[48px]
            ${hover ? "bg-browni text-yellowi" : "bg-yellowi text-browni"}`}
            style={{ transition: "background-color 0.3s ease, color 0.3s ease" }}
        >
            <Arrow 
                color={!hover ? "#513214" : "#ffd966"} 
                style={{
                    flexGrow: hover ? 1 : 0,
                    order: hover ? 1 : 2,
                    transition: "flex-grow 0.3s ease, order 0.3s ease",
                }}
            />
            <p
                className="font-satoshi font-medium text-[17px] leading-[150%]"
                style={{
                    flexGrow: hover ? 1 : 0,
                    order: hover ? 2 : 1,
                    transition: "flex-grow 0.3s ease, order 0.3s ease",
                }}
            >
                {text}
            </p>
        </a>
    )
}

export default BtnYellow
