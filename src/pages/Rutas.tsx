import CardPausa from "../components/cards/CardPausa"
import RutasSection from "../components/sections/RutasSection"
import CardHero from "../components/cards/CardHero"

const Rutas = () => {

   return (
      <>
         <section id="Hero"
            className="pt-[24px] sm:pt-[40px]">
            <CardHero
               title="Las Rutas"
               text="Ofrecemos una variedad de espacios diseñados para potenciar el crecimiento personal y empresarial. Deconstruimos la realidad para desde la presencia plena construir una mejor, impulsando la sostenibilidad de los negocios y su ecosistema. Los negocios, sin importar su tamaño, poseen el potencial de ser una infinita fuente generadora de bienestar."
            />
         </section>

         <RutasSection className="!pt-[48px] sm:!pt-[88px]"/>

         <section id="Pausa"
            className="pb-[48px] sm:pb-[140px]">
            <CardPausa />
         </section>
      </>
   )
}

export default Rutas
