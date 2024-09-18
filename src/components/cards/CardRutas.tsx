import { cloneElement, ReactElement, useState } from "react"

interface Props {
    children: ReactElement
    title: string
    text: string
}

const CardRutas = ({ children, title, text }: Props) => {

    const [hover, setHover] = useState(false)
    const Icon = cloneElement(children, { fill: hover ? "#fff" : "#513214" })

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ boxShadow: '0px 6px 8px 1px rgba(77, 48, 13, 0.08)' }}
            className="transition-all ease-linear duration-400 bg-white hover:bg-[#FFFCEC]
            py-[24px] px-[32px] rounded-[16px] cursor-default
            sm:py-[40px] sm:px-[32px]">
            <div
                className={`w-[128px] h-[128px] border-[5px] rounded-full
                flex items-center justify-center transition-all ease-linear duration-400
                ${ hover ? "border-browni bg-browni": "border-[#FFFCEC] bg-transparent"}`}>
                {Icon}
            </div>
            <div
                className="grid gap-[16px]
                pt-[8px] pb-[32px] sm:py-[32px]">
                <h3
                    className="font-satoshi font-bold text-[27px]">
                    {title}
                </h3>
                <p
                    className="font-satoshi font-normal text-[17px] leading-[150%]">
                    {text}
                </p>
            </div>
            {/* <BtnYellow text="Explorar Talleres" /> */}
        </div>
    )
}

export default CardRutas
