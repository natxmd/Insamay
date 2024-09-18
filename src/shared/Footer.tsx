import BtnFooter from "../components/buttons/BtnFooter"
import { linkCalendly, linkWhatsApp } from "../Global"

const Footer = () => {
	return (
		<footer
			className="bg-[url('/img/bg-footer.png')] bg-top bg-cover">
			<div
				className="grid justify-items-center
          		pt-[244px] pb-[48px] px-[16px] sm:px-[50px] sm:pt-[222px] sm:pb-[60px]">
				<img src="logo-footer.svg" />
				<div 
					className="flex justify-center gap-[16px] items-center flex-wrap
					pt-[54px] pb-[60px] sm:pt-[48px] sm:pb-[64px]">
					<BtnFooter link={linkCalendly} text="Agendar Reunión" />
					<BtnFooter link="mailto:holainsamay@gmail.com" text="holainsamay@gmail.com" />
					<BtnFooter link={linkWhatsApp} text="+51 999 010 686" />
				</div>
				<p
					className="font-satoshi text-center font-normal text-[14px] text-browni
					max-w-[680px] mx-auto">
					© 2024 {" "}
					<span>
						<a
							target="_blank"
							href="https://www.cbjourney.com/consciousbusinessnetwork">
							Socios Estratégicos de Conscious Business Network {" "}
						</a>
					</span>
					y {" "}
					<span>
						<a
							target="_blank"
							href="https://multiplesesencias.com/">
							Mútiples Esencias {" "}
						</a>
					</span>
					Promotores de la filosofía de Capitalismo Consciente, Objetivos de Desarrollo Sostenible, Women Empowerment Principles y Nonflict.
				</p>
			</div>
		</footer>
	)
}

export default Footer
