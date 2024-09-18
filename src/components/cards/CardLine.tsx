import Line from "../svg/Line"

interface Props {
    subtitle: string
    percentage: number
}
const CardLine = ({ subtitle, percentage }: Props) => {
    return (
        <div className="grid gap-[8px]">
            <p className="font-satoshi font-normal text-[17px] text-white tracking-[-2%]">
                {subtitle} <span className="font-bold italic">{percentage}%</span>
            </p>
            <Line percentage={percentage}/>
        </div>
    )
}

export default CardLine
