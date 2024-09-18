interface Props {
    subtitle?: string
    title?: string
    titleBold?: string
    position: string
    color?: string
    title2?: string
}

const H2 = ({ subtitle, title, titleBold, position, color, title2 }: Props) => {

    return (
        <div className={`grid gap-[8px] ${position}`}>
            {
                subtitle &&
                <p
                    className={`font-satoshi font-normal underline-offset-[7px]
                    text-[20px] underline ${color ? color : "text-browni"}`}>
                    {subtitle}
                </p>
            }
            <h2
                className={`font-merriweather font-light italic leading-[150%] select-none
                text-[32px] sm:text-[39px] ${color ? color : "text-black"}`}>
                {title} {" "}
                <span className="font-satoshi font-bold not-italic">
                    {titleBold}
                </span>
                {title2}
            </h2>
        </div>
    )
}

export default H2
