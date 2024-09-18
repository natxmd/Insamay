import CardEquipo from "../components/cards/CardEquipo"

const Nosotros = () => {
	return (
		<div>

			<section id="Equipo"
				className="pyContainer container">
				<div className="grid gap-[48px] lg:gap-[32px]">
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
			</section>

		</div>
	)
}

export default Nosotros
