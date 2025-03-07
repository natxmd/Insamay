import CardEquipo from "../components/cards/CardEquipo"
import InfinityLoopCountrys from "../components/interactive/InfinityLoopCountrys"
import H2 from "../components/titles/H2"

const Nosotros = () => {
	return (
		<div>

			<section id="Equipo"
				className="pyContainer container">
				<div>
					<H2 title="El equipo que " titleBold="Impulsa Insamay" position="text-center" />
					<div className="grid gap-[48px] lg:gap-[32px] lg:grid-cols-3">
						<CardEquipo
							name="Jennifer Milla"
							cargo="Directora y Conectora Nata"
							description="MBA, coach y mentora con 25 años de experiencia en negocios globales."
							foto="/img/equipo/jennifer-milla.png"
							linkIG="https://www.instagram.com/jennifer.milla"
							linkLT="https://linktr.ee/jennifermilla"
							linkIN=" https://www.linkedin.com/in/jennifer-milla/"
						/>
						<CardEquipo
							name="Alexandra Talavera"
							cargo="Sembradora y Terapeuta"
							description="Guía el descubrimiento interior, canalizadora, escritora, poeta y amante de la naturaleza."
							foto="/img/equipo/alexandra-talavera.png"
							linkIG="https://www.instagram.com/sembradores_de_luz/"
							linkIN="https://www.facebook.com/mariaalexandra.talaveramanrique"
						/>
						<CardEquipo
							name="Nicola Flores"
							cargo="Especialista en Liderazgo"
							description="Experto en liderazgo, soporte emocional, docente, facilitador y actor de teatro."
							foto="/img/equipo/nicola-flores.png"
							linkIG="https://www.instagram.com/nicolaensintonia.pe"
							linkLT="https://linktr.ee/nicolaflores"
							linkIN="https://www.linkedin.com/in/nicola-flores/"
						/>

					</div>
				</div>
			</section>

			<section id="Equipo"
				className="bg-[#FFFCEC] border-y-[1px] border-[#D0D0D0]
				py-[32px] sm:py-[48px]">
				<div 
					className="w-[92%] mx-auto grid 
					gap-[16px] pb-[48px] sm:gap-[40px] sm:pb-[48px]">
					<H2
						subtitle="Nosotros"
						title="Experiencia Internacional"
						titleBold="de nuestro equipo"
						position="text-center"
					/>
					<p className="p2 text-center">
						Acompañamientos que traspasan fronteras. Las únicas barreras sólo existen en nuestra mente.
					</p>
				</div>
				<InfinityLoopCountrys />
			</section>

		</div>
	)
}

export default Nosotros
