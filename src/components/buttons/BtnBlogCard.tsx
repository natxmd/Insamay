import { useState } from "react"
import Arrow from "../svg/Arrow"

const BtnBlogCard = () => {

    const [hover, setHover] = useState(false)

    return (
        <a
            href="https://www.linkedin.com/in/jennifer-milla/recent-activity/all/"
            target="_blank"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`flex items-center gap-[16px] transition-all ease-linear cursor-pointer
            rounded-[10px] text-browni ${!hover ? "bg-transparent" : "bg-[rgba(81,50,20,0.2)]"}`}>
            <p className="font-satoshi font-medium text-[17px] leading-[150%]">
                Leer artículos en Linkedin
            </p>
            <Arrow color="#513214" />
        </a>
    )
}

export default BtnBlogCard
