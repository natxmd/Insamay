import H2 from "../titles/H2"
import BtnYellow from "../buttons/BtnYellow"
import { useMediaQuery } from "react-responsive"

const CardPausa = () => {
    const mobileGlobal = useMediaQuery({ query: '(min-width: 640px)' })
    return (
        <div
            className={`container relative flex bg-cover max-w-[1088px] rounded-[24px]
            ${mobileGlobal ? "bg-[url('/img/bg-pausa-d.png')]" : "bg-[url('/img/bg-pausa-m.png')]"}
            before:absolute before:top-0 before:left-0 before:!z-10 before:w-full before:h-full before:from-transparent before:via-[#B38867]/70 before:to-[#B38867] before:rounded-[24px]
            p-[26.5px] pb-[248px] before:bg-gradient-to-t justify-start bg-bottom
            sm:py-[96px] sm:px-[56px] sm:before:bg-gradient-to-r sm:justify-end sm:bg-left`}>
            <div 
                className="grid justify-items-start !z-20 sm:max-w-[483px]">
                <H2
                    color="text-white z-20"
                    title="¿Deseas saber si eres parte de la "
                    titleBold="Nueva Economía y redefinición de éxito?"
                    position="text-left"
                />
                <p className="p1 text-left font-normal pt-[8px] pb-[20px] sm:pb-[24px] z-20">
                    Assesment de Negocios Conscientes
                </p>
                <BtnYellow
                    text="Empieza tu Evaluación"
                    link="https://docs.google.com/forms/d/e/1FAIpQLSfliaV-46Kg8eBr9RAGSxrzLRMtqUi1Ilbj3kSgwRZRUgOK0Q/viewform"
                    ClassName="z-20"
                />
            </div>
        </div>
    )
}

export default CardPausa
