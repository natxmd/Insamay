import { useState } from "react"
import Arrow from "../svg/Arrow"
import { linkWhatsApp } from "../../Global"

const BtnHeader = ( ) => {

    const [hover, setHover] = useState(false)

    return (
        <a  
            href={linkWhatsApp}
            target="_blank"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`flex items-center gap-[16px] transition-all ease-linear cursor-pointer
            py-[12px] px-[24px] rounded-[32px] border-white border-[1px]
            ${hover ? "bg-white text-black" : "bg-transparent text-white"}`}>
            <p className="font-satoshi font-medium text-[17px] leading-[150%]">
                Conversemos
            </p>
            <Arrow color={!hover ? "#FFF" : "#000"} />
        </a>
    )
}

export default BtnHeader
