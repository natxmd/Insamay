import H2 from "../titles/H2"
import { useMediaQuery } from "react-responsive"

interface Props {
    title: string;
    text: string
}

const CardHero = ({title, text} : Props) => {
    const mobileGlobal = useMediaQuery({ query: '(min-width: 640px)' })
    return (
        <div
            className={`container relative grid bg-cover w-full rounded-[24px] bg-center
            ${mobileGlobal ? "bg-[url('/img/rutas-hero.png')]" : "bg-[url('/img/rutas-hero-m.png')]"}
            before:absolute before:top-0 before:left-0 before:!z-10 before:w-full before:h-full before:from-transparent before:via-[#B38867]/70 before:to-[#B38867] before:rounded-[24px]
            pt-[116px] pb-[40px] px-[24px] before:bg-gradient-to-b justify-start gap-[24px] min-h-[484px] place-content-end
            sm:p-[46px] sm:before:bg-gradient-to-r sm:justify-end sm:items-center md:min-h-[282px]
            lg:px-[80px] lg:grid-cols-[1fr_568px] lg:place-content-center xl:px-[116px]`}>
            <H2
                color="text-white z-20"
                titleBold={title}
                position="text-left"
            />
            <p className="p1 text-left z-20">
                {text}
            </p>
        </div>
    )
}

export default CardHero
