import { useMediaQuery } from "react-responsive"
import BtnHeader from "../components/buttons/BtnHeader"
import BtnYellow from "../components/buttons/BtnYellow"
import CardBlog from "../components/cards/CardBlog"
import CardLine from "../components/cards/CardLine"
import CardPausa from "../components/cards/CardPausa"
import AccordionNosotros from "../components/interactive/AccordionNosotros"
import InfinityLoop from "../components/interactive/InfinityLoop"
import TabNosotros from "../components/interactive/TabNosotros"
import H2 from "../components/titles/H2"
import RutasSection from "../components/sections/RutasSection"

const Home = () => {
    const mobileGlobal = useMediaQuery({ query: '(min-width: 640px)' })
    return (
        <>
            <section id="Hero"
                className="bg-[url('/img/bg-hero.png')] bg-cover bg-right-bottom">
                <div
                    className="grid justify-center justify-items-center
                    w-[94%] mx-auto md:max-w-[718px]
                    pt-[80px] pb-[145px] sm:pt-[272px] sm:pb-[190px]">
                    {!mobileGlobal &&
                        <img
                            src="logo-header.svg"
                            alt="Logo"
                            className="cursor-pointer w-[60%] mx-auto mb-[32px]"
                        />
                    }
                    <h1>
                        Despierta tu negocio a un nuevo {" "}
                        <span>
                            Nivel de Consciencia
                        </span>
                    </h1>
                    <p className="p1 pt-[16px] pb-[32px] sm:pt-[40px] sm:pb-[48px] max-w-[624px] mx-auto">
                        Insamay promueve una mejor manera de vincularnos, acelerando la evolución de las organizaciones y su ecosistema.
                    </p>
                    {!mobileGlobal && <BtnHeader />}
                    {/* <BtnYellow text="Descubre cómo" /> */}
                </div>
            </section>

            <section id="Nosotros">
                <div
                    className="container grid items-center grid-cols-1 
                    gap-[32px] pt-[48px] pb-[24px] sm:pb-0 sm:gap-[64px] sm:pt-[128px] 
                    lg:gap-[88px] lg:grid-cols-[1fr_574px]">
                    <img
                        src="/img/nosotros.png"
                        alt="Nosotros"
                        className="lg:w-full mx-auto"
                    />
                    <div className="grid justify-items-center lg:justify-items-start">
                        <H2
                            subtitle="Nosotros"
                            title="Nuestro compromiso con el "
                            titleBold="Despertar Consciente"
                            position="text-center lg:text-left"
                        />
                        <div className="py-[20px] sm:pt-[32px] sm:pb-[40px] !w-full">
                            {!mobileGlobal ? <AccordionNosotros /> : <TabNosotros />}
                        </div>
                        <BtnYellow
                            text="Conversemos"
                            link="https://api.whatsapp.com/send?phone=+51999010686&text=Hola%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20INSAMAY"
                        />
                    </div>
                </div>
            </section>

            <RutasSection/>

            <section id="Impacto"
                className="relative bg-[url('/img/bg-impacto-d.png')] bg-cover bg-center">
                <div className="absolute w-full h-[100px] bg-gradient-to-t from-transparent to-white top-0"></div>
                <div className="absolute w-full h-[100px] bg-gradient-to-b from-transparent to-white bottom-0"></div>
                <div
                    className="container grid gap-[48px] w-full 
                    lg:grid-cols-[627px_1fr] lg:gap-[82px] xl:gap-[150px] 
                    pt-[115px] pb-[176px] sm:pt-[128px]">
                    <div className="grid gap-[24px] items-center">
                        <H2
                            subtitle="Las Rutas"
                            title="Potenciando la redefinición de"
                            titleBold="Éxito Empresarial "
                            title2=" con Insamay"
                            position="text-left"
                            color="text-white"
                        />
                        <p className="p2 text-white">
                            Explora el desarrollo tangible de competencias que Insamay contribuye a generar con una visión de trascendencia en los negocios y organizaciones, permitiendo que cada ser humano desarrolle los tres tipos de inteligencia que necesita para tener éxito: racional, emocional y espiritual.
                        </p>
                    </div>
                    <div className="lg:py-[20px] grid items-center gap-[32px] h-full">
                        <CardLine percentage={85} subtitle="Inteligencia Sistémica" />
                        <CardLine percentage={80} subtitle="Desarrollo de Liderazgo" />
                        <CardLine percentage={85} subtitle="Innovación Empresarial" />
                    </div>
                </div>
            </section>

            <section id="Pausa">
                <InfinityLoop />
                <CardPausa />
            </section>

            <section id="Blog">
                <div className="container pyContainer grid gap-[48px] sm:gap-[56px]">
                    <H2
                        subtitle="Blog"
                        title="Lo nuevo en"
                        titleBold=" Nuestro Blog"
                        position="text-center"
                    />
                    <div
                        className="grid gap-[48px] 
                        md:grid-cols-2 xl:grid-cols-3 lg:gap-x-[56px]">
                        <CardBlog
                            title="ODS Cero: La Consciencia"
                            img="/img/blog/ods.png"
                        />
                        <CardBlog
                            hidden={!mobileGlobal}
                            title="The Game: Pay or Play"
                            img="/img/blog/game.png"
                        />
                        <CardBlog
                            hidden={!mobileGlobal}
                            title="Es tiempo de hacernos cargo"
                            img="/img/blog/tiempo.png"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
