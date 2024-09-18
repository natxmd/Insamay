import BtnBlogCard from "../buttons/BtnBlogCard"

interface Props {
    title: string;
    img: string;
    hidden?: boolean
}

const CardBlog = ({ img, title, hidden }: Props) => {
    return (
        !hidden &&
        <div className="grid justify-items-start">
            <img
                src={img}
                alt={title}
                className="object-cover w-full h-auto"
            />
            <p className="font-satoshi text-[14px] pt-[12px] sm:pt-[16px]">
                Categoría: {" "}
                <span className="font-medium text-browni">
                    Negocios
                </span>
            </p>
            <h3
                className="font-satoshi font-medium text-[21px] sm:text-[27px]">
                {title}
            </h3>
            <div className="w-full h-[1px] bg-[rgba(44,44,44,0.15)] mt-[12px] mb-[16px]" />
            <BtnBlogCard />
        </div>
    )
}

export default CardBlog
