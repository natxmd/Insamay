import Fb from "../svg/rrss/Fb";
import Ig from "../svg/rrss/Ig";
import In from "../svg/rrss/In";
import Lt from "../svg/rrss/Lt";

interface Props {
    foto: string;
    name: string;
    cargo: string;
    description: string;
    linkIG: string;
    linkIN?: string;
    linkFB?: string;
    linkLT?: string;
}
const CardEquipo = ({
    foto,
    name,
    cargo,
    description,
    linkIG,
    linkIN,
    linkFB,
    linkLT
}: Props

) => {
    return (
        <div
            style={{ boxShadow: '0px 3.65px 5.48px 0px rgba(77, 48, 13, 0.06)' }}
            className="text-center rounded-[15px]
            px-[8px] pt-[12px] pb-[18px] 
            sm:p-[8px] sm:pb-[30px]">
            <img
                src={foto}
                alt={name}
                className="rounded-[8px]"
            />
            <h4
                className="font-satoshi font-medium text-[23px] text-blacki">
                {name}
            </h4>
            <p
                className="font-satoshi font-medium text-[14px] text-[#7C7C7C]">
                {cargo}
            </p>
            <p
                className="font-satoshi font-normal text-[17px] text-blacki
                pt-[24px] pb-[32px] sm:py-[30px]">
                {description}
            </p>
            <div className="flex gap-[16px] justify-center items-center">
                <Ig link={linkIG} />
                {linkFB && <Fb link={linkFB} />}
                {linkLT && <Lt link={linkLT} />}
                {linkIN && <In link={linkIN} />}
            </div>
        </div>
    )
}

export default CardEquipo
