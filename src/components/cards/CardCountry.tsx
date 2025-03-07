interface Props {
    img: string;
    name: string;
}

const CardCountry = ({ img, name }: Props) => {
    return (
        <div
            className="ml-[32px] sm:ml-[64px]">
            <img
                src={img}
                alt={name}
                className=''
            />
            <p
                className="text-center">
                {name}
            </p>
        </div>
    )
}

export default CardCountry
