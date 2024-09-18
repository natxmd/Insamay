import BtnYellow from '../buttons/BtnYellow'
import CardRutas from '../cards/CardRutas'
import Capacitaciones from '../svg/rules/Capacitaciones'
import Circulos from '../svg/rules/Circulos'
import Coaching from '../svg/rules/Coaching'
import Consultorias from '../svg/rules/Consultorias'
import Gestion from '../svg/rules/Gestion'
import Talleres from '../svg/rules/Talleres'
import H2 from '../titles/H2'

interface Props {
    className?: string
}

const RutasSection = ({ className }: Props) => {
    return (
        <section id="Rutas">
            <div className={`container pyContainer ${className}`}>
                <H2
                    subtitle="Las Rutas"
                    title="¿Cómo te"
                    titleBold="Ayudamos?"
                    position="text-center"
                />
                <p
                    className="p2 text-center max-w-[982px] mx-auto
            pt-[24px] pb-[40px] sm:pt-[40px] sm:pb-[56px]">
                    Ofrecemos una variedad de espacios diseñados para potenciar el crecimiento personal y empresarial. Deconstruimos la realidad para desde la presencia plena construir una mejor, impulsando la sostenibilidad de los negocios y su ecosistema. Los negocios, sin importar su tamaño, poseen el potencial de ser una infinita fuente generadora de bienestar.
                </p>
                <div
                    className="grid gap-[48px] 
            md:grid-cols-2 xl:grid-cols-3 lg:gap-x-[32px] lg:gap-y-[40px]">
                    <CardRutas
                        children={<Consultorias />}
                        title="Consultorías"
                        text="Proveemos asesoría estratégica holística para elevar el nivel de consciencia en los negocios, fomentando  la sostenibilidad, inclusión y regeneración."
                    />
                    <CardRutas
                        children={<Coaching />}
                        title="Coaching"
                        text="Ofrecemos apoyo personalizado para personas que deseen transformar su enfoque de negocios y potenciar sus habilidades para ejercer un liderazgo consciente."
                    />
                    <CardRutas
                        children={<Gestion />}
                        title="Gestión de Proyectos"
                        text="Conectamos los puntos que son invisibles para algunos. Expandimos bienestar a más de un grupo de interés."
                    />
                    <CardRutas
                        children={<Circulos />}
                        title="Círculos de Escucha"
                        text="Espacios para permitirte ser, conectar con tu poder interior, tus virtudes y temores. Permitámonos ser auténticos. Vivamos desde la consciencia."
                    />
                    <CardRutas
                        children={<Capacitaciones />}
                        title="Capacitaciones"
                        text="Brindamos programas y conferencias inspiradoras en temas de innovación, emprendimiento/negocios conscientes, sostenibilidad, desarrollo personal y bienestar."
                    />
                    <CardRutas
                        children={<Talleres />}
                        title="Talleres y Charlas"
                        text="Facilitamos espacios de reflexión y aprendizaje colaborativo. Desaprendemos para aprender a ejercer un liderazgo más consciente y forjar culturas de cuidado."
                    />
                </div>
                <div className="flex justify-center justify-items-center mt-[32px] sm:mt-[48px]">
                    <BtnYellow
                        text="Empieza tu Evaluación"
                        link="https://docs.google.com/forms/d/e/1FAIpQLSfliaV-46Kg8eBr9RAGSxrzLRMtqUi1Ilbj3kSgwRZRUgOK0Q/viewform"
                    />
                </div>
            </div>
        </section>
    )
}

export default RutasSection
